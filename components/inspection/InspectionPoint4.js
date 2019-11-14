import React, { useState } from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import EditInspectionPage from "./EditInspectionPage";
import INSPECTION_POINTS from "../../assets/InspectionPoints";

const InspectionPoint4 = props => {
    const title = 'Inspection Point 4';

    const [inspectionResult, setInspectionResult] = useState(props.inspection.inspectionPoints[3]);

    const handleSwitch = (val) => {
        setInspectionResult(val);
        props.inspection.inspectionPoints[3] = val;
        if (val) {
            props.nextScreen();
        }
    };

    return (
        <EditInspectionPage label={title}>
            <Text style={props.textStyle}>{INSPECTION_POINTS[3].content}</Text>
            <Switch style={props.switchStyle} onValueChange={(val) => handleSwitch(val)} value={inspectionResult}/>
        </EditInspectionPage>
    );
};

const styles = StyleSheet.create({
});

export default InspectionPoint4;