import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon2 from 'react-native-vector-icons/MaterialIcons';

const BarraInferior = (props) => {
    const { contenedor, item } = styles;

    return (
        <View style={contenedor}>
            <TouchableOpacity style={item} onPress={props.onPress.bind(this,{ state: 'home', title: 'Resultados App' })}>
                <Icon name={props.primero} size={35} color='#fff'></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={item} onPress={props.onPress.bind(this,{ state: 'futbol', title: 'Fútbol' })}>
                <Icon name={props.segundo} size={35} color='#fff' />
            </TouchableOpacity>
            <TouchableOpacity style={item} onPress={props.onPress.bind(this,{ state: 'baloncesto', title: 'Baloncesto' })}>
                <Icon name={props.tercero} size={35} color='#fff' />
            </TouchableOpacity>
            <TouchableOpacity style={item} onPress={props.onPress.bind(this,{ state: 'apuestas', title: 'Apuestas' })}>
                <Icon name={props.cuarto} size={35} color='#fff' />
            </TouchableOpacity>
        </View>

    );
}

/**
 * Objeto para manejar los estilos del componente de la barra inferior,
 * todos los elementos se deben ubicar como una file, es decir alineados
 * horizontalmente
 */
const styles = {
    contenedor: {
        height: 67,
        backgroundColor: '#000',
        flexDirection: 'row'
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#fff'
    }

}

export default BarraInferior;