import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const CustomInput = props => {
    let label;

    if (props.label) {
        label = <Text style={styles.label}>{props.label}</Text>
    }

    return (
        <View style={{...styles.screen, ...props.style}}>
            {label}
            <TextInput
                {...props}
                style={{...styles.input, ...props.textInputStyle}}
                placeholderTextColor = {(props.placeholderTextColor ? props.placeholderTextColor : 'gray')}
                autoCorrect={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        height: 30,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
        flex: 2
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        flex: 3,
    }
});

export default CustomInput;