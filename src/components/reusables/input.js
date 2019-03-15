import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ texto, value, onChangeText, placeholder, secureTextEntry }) => {
    const { viewStyle, etiquetaStyle, inputStyle } = style;
    return (
        <View style={viewStyle}>
            {/* <Text style={etiquetaStyle}>{texto}</Text> */}
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
}

const style = {
    viewStyle: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
    },
    // etiquetaStyle: {
    //     fontSize: 19,
    //     paddingLeft: 15,
    //     flex: 1
    // },
    inputStyle: {
        color: '#000',
        width: 100,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 19,
        lineHeight: 24,
        flex: 2

    }
}

export { Input };