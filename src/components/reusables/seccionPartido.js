import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Flag from 'react-native-flags';


class SeccionPartidos extends Component {

    state = { datos: [] };

    /**
     * 
     * @param {} props array de datos
     * De esta manera se reciben los props desde el componente padre,
     * luego se envia al state para guardar los datos de manera global
     */
    componentWillReceiveProps(props) {
        // console.log("props",props.datos);
        this.setState({ datos: props.datos });
    }



    constructor(props) {
        super(props);
        // this.setState({ datos: props.datos });

    }

    render() {

        return (
            <View style={{ padding: 10 }}>

                {this.cargarPartidos()}

            </View>

        );
    }

    cargarPartidos() {

        return this.state.datos.map(pais =>

            <View key={pais.pais} style={{ marginBottom: 20 }}>
                <View style={styles.titulo}>
                    <Flag code={pais.icono} size={32} />
                    <Text style={styles.textTitle}>{pais.pais}</Text>
                </View>
                {this.imprimirPartidos(pais.partidos)}

            </View>);


    }

    imprimirPartidos(partidos) {
        const { fondo1, fondo2 } = styles;
        // console.log(partidos);
        return partidos.map((partido, index) =>

            <View key={index} style={(index == 0 || index % 2 == 0) ? fondo1 : fondo2} >
                <Text style={styles.textEquipo}>{partido.local}</Text>
                <Text style={styles.textResultado}>{partido.resultado}</Text>
                <Text style={styles.textEquipo}>{partido.visitante}</Text>
            </View>)
    }
}


const styles = StyleSheet.create({
    titulo: {
        flexDirection: 'row',
    },
    textTitle: {
        marginLeft: 5,
        alignSelf: 'center',
        fontSize: 20,
    },

    fondo1: {
        flexDirection: 'row',
        padding: 6,
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
    },

    textEquipo: {
        color: 'black',
        fontSize: 18,
        flex: 1,
        // justifyContent: 'space-between'
    },

    textResultado: {
        color: 'black',
        fontSize: 18,
        flex: .6,
        // borderBottomWidth: 1,
        // borderColor: '#154544',
    },

    fondo2: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: 'rgba(52, 52, 52, 0.1)',

    }


})


export default SeccionPartidos;