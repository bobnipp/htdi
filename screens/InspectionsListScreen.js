import React, { useState} from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';
import { Icon } from 'react-native-elements'
import COLORS from "../constants/colors";

import InspectionList from '../components/InspectionList';

const InspectionsListScreen = props => {

    // Add a temporary inspection
    const newInspection = () => {
        const d = new Date();
        const dateStr = d.getMonth()+1 + '/' + d.getDate() + '/' + d.getFullYear();
        const id = uuidv4();

        let newInspection = {};
        newInspection.date = dateStr;
        newInspection.id = id;
        newInspection.description = '';
        newInspection.archived = false;
        newInspection.state = 'incomplete'
        newInspection.inspectionPoints = [false,false,false,false,false,false,false,false,false,false,false,false,false];

        props.setInspections(inspections => [...inspections, newInspection]);
        props.setCurrentInspectionIndex(props.inspections.length);
        props.setMode('EDIT');
    };

    const uuidv4 = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    const handleArchiveInspection = (insp) => {
        Alert.alert(
            'Confirm Archive',
            'Do you want to archive this inspection?',
            [
                {
                    text: 'Cancel', onPress: () => {}, style: 'cancel',
                },
                {
                    text: 'OK', onPress: () => {
                        const idx = props.inspections.findIndex(e => e.id === insp.id);
                        props.inspections[idx].archived = true;
                        props.setInspections(inspections => [...inspections]);
                    }},
            ],
            {cancelable: false},
        );
    };

    const handleEditInspection = (insp) => {
        props.setCurrentInspectionIndex(props.inspections.findIndex(e => e.id === insp.id));
        props.setMode('EDIT');
    };

    return (
        <View style={styles.screen}>
            <InspectionList
                style={styles.inspectionList}
                inspections={props.inspections}
                filter={props.filter}
                archiveInspection={handleArchiveInspection}
                editInspection={handleEditInspection}
            />
            <Icon name='add-circle' color={COLORS.primary} size={50} containerStyle={styles.icon} onPress={newInspection}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        height: '80%'
    },
    inspectionList: {
        margin: 20,
    },
    newInspection: {
        padding: 10,
        marginBottom: 20
    },
    icon: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    }
});

export default InspectionsListScreen;