import React, { useState } from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import EditInspectionPage from "./EditInspectionPage";
import INSPECTION_POINTS from "../../assets/InspectionPoints";
import COLORS from "../../constants/colors";

const InspectionPoint1 = props => {
    const title = 'Inspection Point 1';

    const [inspectionResult, setInspectionResult] = useState(props.inspection.inspectionPoints[0]);

    const handleSwitch = (val) => {
        setInspectionResult(val);
        props.inspection.inspectionPoints[0] = val;
        if (val) {
            props.nextScreen();
        }
    }

    return (
        <EditInspectionPage label={title} styles={props.styles} >
            <Text style={props.textStyle}>{INSPECTION_POINTS[0].content}</Text>
            <Switch style={props.switchStyle} onValueChange={(val) => handleSwitch(val)} value={inspectionResult}/>
        </EditInspectionPage>
    );
};

const styles = StyleSheet.create({
});

export default InspectionPoint1;