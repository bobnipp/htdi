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
                style={styles.item}
                onChangeText = {idHandler}
                value = {doorId}
                placeholder="ID..."
                placeholderTextColor='#FFF'/>
            <CustomInput
                label = "Alternate ID"
                style={styles.item}
                onChangeText = {alternateIdHandler}
                value = {doorAlternateId}
                placeholder="Alternate ID..."
                placeholderTextColor='#FFF'/>
            <CustomInput
                label = "Floor"
                style={styles.item}
                onChangeText = {floorHandler}
                value = {floor}
                placeholder="Floor..."
                placeholderTextColor='#FFF'/>
            <CustomInput
                label = "Manufacturer"
                style={styles.item}
                onChangeText = {manufacturerHandler}
                value = {manufacturer}
                placeholder="Manufacturer..."
                placeholderTextColor='#FFF'/>
            <CustomInput
                label = "Number of Leafs"
                keyboardType = "number-pad"
                style={styles.item}
                onChangeText = {numLeafsHandler}
                value = {numLeafs}
                placeholder="Number of Leafs..."
                placeholderTextColor='#FFF'/>
            <Text style={styles.item}>Pictures: front, back, location on print (TBD)</Text>
        </EditInspectionPage>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    item: {
        justifyContent: 'space-around',
        width: '100%'
    }
});

export default DoorInfo;