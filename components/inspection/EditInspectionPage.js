import React from 'react';
import { StyleSheet, Text,  View } from 'react-native';
import Colors from "../../constants/colors";

const EditInspectionPage = props => {
    return (
        <View style={{...props.style, ...styles.screen}}>
            <Text style={styles.title}>{props.label}</Text>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        height: "90%",
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        fontWeight: 'bold',
        color: Colors.light,
        marginBottom: 40
    }
});

export default EditInspectionPage;