import React, { useState } from 'react';
import InspectionsListScreen from './screens/InspectionsListScreen';
import EditInspectionScreen from './screens/EditInspectionScreen';
import { Header } from 'react-native-elements'

import {View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard} from "react-native";
import COLORS from './constants/colors';
import INSPECTIONS from "./assets/Inspections";
import CustomInput from "./components/CustomInput";

export default function App() {

    const [inspections, setInspections] = useState(INSPECTIONS);
    const [filter, setFilter] = useState('');
    const [mode, setMode] = useState('LIST');  // mode=LIST/EDIT
    const [currentInspectionIndex, setCurrentInspectionIndex] = useState(-1);

    const searchHandler = (enteredText) => {
        setFilter(enteredText);
    };
    const homeHandler = () => {
        console.log('GO HOME!');
        setMode('HOME');
    };

    let content = {};
    let search;
    switch (mode) {
        case 'LIST':
        case 'HOME':
            content = <InspectionsListScreen
                inspections={inspections} setInspections={setInspections}
                filter={filter} setFilter={setFilter}
                mode={mode}
                setMode={setMode}
                currentInspectionIndex={currentInspectionIndex} setCurrentInspectionIndex={setCurrentInspectionIndex}
            />;
            search = <CustomInput
                onChangeText={searchHandler}
                value={filter}
                placeholder="Search..."
                placeholderTextColor='black'
                textInputStyle={styles.searchTextInput}
            />;
            break;
        case 'EDIT':
            content = <EditInspectionScreen
                inspection={inspections[currentInspectionIndex]}
                mode={mode}
                setMode={setMode}
            />;
            break;
        default:
            content = <Text>UNKNOWN MODE</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Header
                    backgroundColor={COLORS.gray}
                    leftComponent={{ icon: 'menu', color: COLORS.primary, onPress: () => alert('Not implemented') }}
                    centerComponent={search}
                    rightComponent={{ icon: 'home', color: COLORS.primary, onPress: () => homeHandler() }}
                />
                {content}
            </View>
        </TouchableWithoutFeedback>
    );

}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    searchTextInput: {
        borderBottomColor: 'black',
        color: 'black'
    }
});
