
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardMenuItems = (props) => {
    const { contenedor, item } = styles;

    return (

        // <View style={contenedor}>
        <View style={contenedor}>
            <TouchableOpacity style={item} onPress={props.onPress}>
                <Icon name={props.icono} size={70} color={props.color}></Icon>
            </TouchableOpacity>
            <Text style={{alignSelf:'center'}}>{props.texto}</Text>
        </View>

    );
}

const styles = {
    contenedor: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        height: 100,
        width: 100,
        margin: 20
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
    }

}

export default CardMenuItems;