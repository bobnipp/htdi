import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

import ProjectInfo from '../components/inspection/ProjectInfo';
import DoorInfo from '../components/inspection/DoorInfo';
import InspectionPoint1 from '../components/inspection/InspectionPoint1';
import InspectionPoint2 from '../components/inspection/InspectionPoint2';
import InspectionPoint3 from '../components/inspection/InspectionPoint3';
import InspectionPoint4 from '../components/inspection/InspectionPoint4';
import InspectionPoint5 from '../components/inspection/InspectionPoint5';
import InspectionPoint6 from '../components/inspection/InspectionPoint6';
import InspectionPoint7 from '../components/inspection/InspectionPoint7';
import InspectionPoint8 from '../components/inspection/InspectionPoint8';
import InspectionPoint9 from '../components/inspection/InspectionPoint9';
import InspectionPoint10 from '../components/inspection/InspectionPoint10';
import InspectionPoint11 from '../components/inspection/InspectionPoint11';
import InspectionPoint12 from '../components/inspection/InspectionPoint12';
import InspectionPoint13 from '../components/inspection/InspectionPoint13';
import AdditionalInfo from '../components/inspection/AdditionalInfo';
import COLORS from '../constants/colors';

const checkInspection = (insp) => {
    let failed = insp.inspectionPoints.includes(false);
    if (failed) return false;
    else return true;
};

const EditInspectionsScreen = props => {

    const [inspectionsPageIndex, setInspectionsPageIndex] = useState(0);
    const [localInspection, setLocalInspection] = useState(props.inspection);

    const nextScreen = () => {
        if (inspectionsPageIndex < inspectionScreens.length - 1 ) {
            setInspectionsPageIndex(inspectionsPageIndex + 1);
        }
    };

    const prevScreen = () => {
        if (inspectionsPageIndex > 0) {
            setInspectionsPageIndex(inspectionsPageIndex - 1);
        }
    };

    const handleCompleteInspection = () => {
        if (checkInspection(localInspection)) {
            localInspection.state = 'passed';
        } else {
            localInspection.state = 'failed';
        }
        props.setMode('LIST');
    };

    const inspectionScreens = [
        <ProjectInfo inspection={localInspection} />,
        <DoorInfo inspection={localInspection} />,
        <InspectionPoint1 switchStyle={styles.inspectionPointSwitch} textStyle={styles.inspectionPointText} inspection={localInspection} nextScreen={nextScreen} />,
        <InspectionPoint2 switchStyle={styles.inspectionPointSwitch} textStyle={styles.inspectionPointText} inspection={localInspection} nextScreen={nextScreen} />,
        <InspectionPoint3 switchStyle={styles.inspectionPointSwitch} textStyle={styles.inspectionPointText} inspection={localInspection} nextScreen={nextScreen} />,
        <InspectionPoint4 switchStyle={styles.inspectionPointSwitch} textStyle={styles.inspectionPointText} inspection={localInspection} nextScreen={nextScreen} />,
        <InspectionPoint5 switchStyle={styles.inspectionPointSwitch} textStyle={styles.inspectionPointText} inspection={localInspection} nextScreen={nextScreen} />,
        <InspectionPoint6 switchStyle={styles.inspectionPointSwitch} textStyle={styles.inspectionPointText} inspection={localInspection} nextScreen={nextScreen} />,
        <InspectionPoint7 switchStyle={styles.inspectionPointSwitch} textStyle={styles.inspectionPointText} inspection={localInspection} nextScreen={nextScreen} />,
        <InspectionPoint8 switchStyle={styles.inspectionPointSwitch} textStyle={styles.inspectionPointText} inspection={localInspection} nextScreen={nextScreen} />,
        <InspectionPoint9 switchStyle={styles.inspectionPointSwitch} textStyle={styles.inspectionPointText} inspection={localInspection} nextScreen={nextScreen} />,
        <InspectionPoint10 switchStyle={styles.inspectionPointSwitch} textStyle={styles.inspectionPointText} inspection={localInspection} nextScreen={nextScreen} />,
        <InspectionPoint11 switchStyle={styles.inspectionPointSwitch} textStyle={styles.inspectionPointText} inspection={localInspection} nextScreen={nextScreen} />,
        <InspectionPoint12 switchStyle={styles.inspectionPointSwitch} textStyle={styles.inspectionPointText} inspection={localInspection} nextScreen={nextScreen} />,
        <InspectionPoint13 switchStyle={styles.inspectionPointSwitch} textStyle={styles.inspectionPointText} inspection={localInspection} nextScreen={nextScreen} />,
        <AdditionalInfo inspection={localInspection} />
    ];
    const inspectionScreen = inspectionScreens[inspectionsPageIndex];

    let leftButton, rightButton;
    if (inspectionsPageIndex > 0) {
        leftButton = <Button title="Previous" onPress={prevScreen}/>
    }
    if (inspectionsPageIndex < inspectionScreens.length - 1) {
        rightButton = <Button title="Next" onPress={nextScreen}/>
    } else {
        if (checkInspection(localInspection)) {
            rightButton = <Button title="Complete Inspection" color={COLORS.darkGreen} onPress={handleCompleteInspection}/>
        } else {
            rightButton = <Button title="Fail Inspection" color={COLORS.red} onPress={handleCompleteInspection}/>
        }
    }
    return (
        <View style={styles.screen}>
            <View style={styles.inspectionScreen}>
                {inspectionScreen}
            </View>
            <View style={styles.buttons}>
                {leftButton}
                {rightButton}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginBottom: 20
    },
    inspectionScreen: {
        height: '90%',
        padding: 10,
        margin: 10
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    inspectionPointSwitch: {
        marginTop: 40
    },
    inspectionPointText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default EditInspectionsScreen;