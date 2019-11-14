import React from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import COLORS from "../constants/colors";

const InspectionList = props => {

    const checkFilter = (insp, filter) => {
        if (filter && filter.length > 0) {
            if (insp.state && insp.state.toUpperCase().includes(props.filter.toUpperCase())) return true;
            if (insp.date && insp.date.toUpperCase().includes(props.filter.toUpperCase())) return true;
            if (insp.project && insp.project.toUpperCase().includes(props.filter.toUpperCase())) return true;
            if (insp.doorId && insp.doorId.toUpperCase().includes(props.filter.toUpperCase())) return true;
            if (insp.doorAlternateId && insp.doorAlternateId.toUpperCase().includes(props.filter.toUpperCase())) return true;
            if (insp.floor && insp.floor.toUpperCase().includes(props.filter.toUpperCase())) return true;
        } else {
            return true;
        }
        return false;
    };

    return (
        <View style={{...props.style, ...styles.body}}>
            <ScrollView>
                { props.inspections
                    .filter((insp) => {
                        return !insp.archived && checkFilter(insp, props.filter);
                    })
                    .map((insp) => {
                        let styleStatus;
                        if (insp.state === 'passed') styleStatus = styles.passedInspection;
                        else if (insp.state === 'failed') styleStatus = styles.failedInspection;
                        else if (insp.state === 'incomplete') styleStatus = styles.incompleteInspection;
                        const id = (insp.doorId && insp.doorId.length > 0 ? insp.doorId : insp.doorAlternateId);

                        return <TouchableOpacity key={insp.id}
                                              onPress={() => {
                                                  props.editInspection(insp)
                                              }}
                                              onLongPress={() => {
                                                  props.archiveInspection(insp)
                                              }}>
                                <View style={styles.listItem}>
                                    <View style={styles.listItemRow}>
                                        <Text style={styles.inspectionHeader}>{insp.date}</Text>
                                        <Text style={styles.inspectionHeader}>Project: {insp.project}</Text>
                                    </View>
                                    <View style={styles.listItemRow}>
                                        <Text style={styles.inspectionText}>ID: {id}</Text>
                                        <Text style={styles.inspectionText}>Floor: {insp.floor}</Text>
                                    </View>
                                    <View style={styles.listItemRowCentered}>
                                        <Text style={{...styles.inspectionText, ...styleStatus}}>{insp.state}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                    )
                }
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    listItem: {
        marginVertical: 3,
        padding: 5,
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 5
    },
    listItemRow: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    listItemRowCentered: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    inspectionHeader: {
        fontWeight: 'bold',
        color: COLORS.blue
    },
    inspectionText: {},
    passedInspection: {
        color: COLORS.green
    },
    incompleteInspection: {
        color: 'black'
    },
    failedInspection: {
        color: COLORS.red
    }
});

export default InspectionList;