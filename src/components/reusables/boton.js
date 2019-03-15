import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Boton = ({ texto, onPress }) => {
    const { contendorStyle, textStyles } = styles;
    return (
        <TouchableOpacity style={contendorStyle} onPress={onPress}>
            <Text style={textStyles}>{texto}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    contendorStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#acacac',
        marginRight: 5,
        padding: 5
    },
    textStyles: {
        alignSelf: 'center',
        color: '#0022d1',
        fontSize: 15,
        fontWeight: '400'
    }
}

export { Boton };