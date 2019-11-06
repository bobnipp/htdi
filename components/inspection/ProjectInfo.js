import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker';
import EditInspectionPage from "./EditInspectionPage";
import PROJECTS from '../../assets/Projects';

const ProjectInfo = props => {
    [dateContainer, setDate] = useState(props.inspection.date);
    [project, setProject] = useState(props.inspection.project);

    const dateHandler = val => {
        setDate(val.dateContainer);
        props.inspection.date = val.dateContainer;
    };

    const handleProjectSelection = (itemValue, itemIndex) => {
        if (itemValue) {
            setProject(PROJECTS[itemIndex - 1].value);
            props.inspection.project = PROJECTS[itemIndex - 1].label;
        }
    };

    return (
       <EditInspectionPage label="Project Information" style={styles.screen}>
           <RNPickerSelect
               onValueChange={handleProjectSelection}
               items={PROJECTS}
               placeholder={{label: 'Select a project...', value: null}}
           />
           <View style={styles.dateContainer}>
               <Text style={styles.dateText}>Inspection Date</Text>
               <DatePicker
                   style={{width: 200}}
                   date={dateContainer}
                   mode="date"
                   placeholder="select date"
                   format="YYYY-MM-DD"
                   minDate="2019-01-01"
                   maxDate="2099-12-31"
                   confirmBtnText="Ok"
                   cancelBtnText="Cancel"
                   customStyles={{
                       dateIcon: {
                           position: 'absolute',
                           left: 0,
                           top: 4,
                           marginLeft: 0
                       },
                       dateInput: {
                           marginLeft: 36
                       }
                   }}
                   onDateChange={(date) => {dateHandler({dateContainer: date})}}
               />
           </View>

       </EditInspectionPage>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    dateContainer: {
        marginTop: 20,
        width: '100%',
        marginLeft: 15
    },
    dateText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10
    },
});

export default ProjectInfo;