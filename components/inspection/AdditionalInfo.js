import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EditInspectionPage from "./EditInspectionPage";
import CustomInput from "../CustomInput";
import RNPickerSelect from "react-native-picker-select";

const AdditionalInfo = props => {

    // Comments
    // Pictures
    // Inspected by
    // Inspector Signature

    [comments, setComments] = useState(props.inspection.comments);
    [inspectedBy, setInspectedBy] = useState(props.inspection.inspectedBy);
    [inspectorSignature, setInspectorSignature] = useState(props.inspection.inspectorSignature);

    const commentHandler = (enteredText) => {
        setComments(enteredText);
        props.inspection.comments = enteredText;
    };
    const inspectedByHandler = (enteredText) => {
        setInspectedBy(enteredText);
        props.inspection.inspectedBy = enteredText;
    };
    const inspectorSignatureHandler = (enteredText) => {
        setInspectorSignature(enteredText);
        props.inspection.inspectorSignature = enteredText;
    };

    return (
        <EditInspectionPage label="Additional Information" style={styles.screen}>
            <CustomInput
                label = "Comments"
                style={styles.item}
                onChangeText = {commentHandler}
                value = {comments}
                placeholder="Comments..."
                placeholderTextColor='#FFF'/>
            <CustomInput
                label = "Inspected By"
                style={styles.item}
                onChangeText = {inspectedByHandler}
                value = {inspectedBy}
                placeholder="Inspected By..."
                placeholderTextColor='#FFF'/>
            <CustomInput
                label = "Inspector Signature"
                style={styles.item}
                onChangeText = {inspectorSignatureHandler}
                value = {inspectorSignature}
                placeholder="Inspector Signature..."
                placeholderTextColor='#FFF'/>
        </EditInspectionPage>
    );
};

const styles = StyleSheet.create({
    screen: {
    },
    item: {
        justifyContent: 'space-around',
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%'
    }
});

export default AdditionalInfo;