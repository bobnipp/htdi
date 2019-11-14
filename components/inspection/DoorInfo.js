import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EditInspectionPage from "./EditInspectionPage";
import CustomInput from "../CustomInput";
import RNPickerSelect from "react-native-picker-select";

const DoorInfo = props => {

    [doorId, setDoorId] = useState(props.inspection.doorId);
    [doorAlternateId, setDoorAlternateId] = useState(props.inspection.doorAlternateId);
    [floor, setFloor] = useState(props.inspection.floor);
    [manufacturer, setManufacturer] = useState(props.inspection.manufacturer);
    [numLeafs, setNumLeafs] = useState(props.inspection.numLeafs);

    const idHandler = (enteredText) => {
        setDoorId(enteredText);
        props.inspection.doorId = enteredText;
    };
    const alternateIdHandler = (enteredText) => {
        setDoorAlternateId(enteredText);
        props.inspection.doorAlternateId = enteredText;
    };
    const floorHandler = (enteredText) => {
        setFloor(enteredText);
        props.inspection.floor = enteredText;
    };
    const manufacturerHandler = (enteredText) => {
        setManufacturer(enteredText);
        props.inspection.manufacturer = enteredText;
    };
    const numLeafsHandler = (enteredText) => {
        setNumLeafs(enteredText);
        props.inspection.numLeafs = enteredText;
    };

    return (
        <EditInspectionPage label="Door Information" style={styles.screen}>
            <CustomInput
                label = "ID"
                onChangeText={idHandler}
                value={doorId}
                placeholder="Enter ID (TBD - scan this)..."
            />
            <CustomInput
                label = "Alternate ID"
                onChangeText={alternateIdHandler}
                value={doorAlternateId}
                placeholder="Alternate ID..."
            />
            <CustomInput
                label = "Floor"
                onChangeText={floorHandler}
                value={floor}
                placeholder="Floor..."
            />
            <CustomInput
                label = "Manufacturer"
                onChangeText={manufacturerHandler}
                value={manufacturer}
                placeholder="Manufacturer..."
            />
            <CustomInput
                label = "Number of Leafs"
                keyboardType = "number-pad"
                onChangeText = {numLeafsHandler}
                value = {numLeafs}
                placeholder="Number of Leafs..."
            />
            <Text style={styles.tmpItem}>TODO:  Pictures: front, back, location on print (TBD)</Text>
        </EditInspectionPage>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    tmpItem: {
        marginTop: 30,
        width: '100%'
    }
});

export default DoorInfo;