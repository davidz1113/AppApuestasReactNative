import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Card, CardSection, Spinner, Boton, Input } from '../reusables';
import firebase from '@firebase/app' //forma correcta de importar el firebase
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

require('@firebase/firestore');


class SeccionApuesta extends Component {

    state = { datos: [], show: [] };

    /**
     * 
     * @param {} props array de datos
     * De esta manera se reciben los props desde el componente padre,
     * luego se envia al state para guardar los datos de manera global
     */
    componentWillReceiveProps(props) {
        // console.log("props",props.datos);
        this.setState({ datos: props.datos });
        this.asignarBanderas(props.datos);

    }

    asignarBanderas(datos) {
        let banderas = [];
        datos.map((dato, index) => {

            banderas.push({
                id: dato.id,
                index,
                show: false,
                gol_local: dato.data.gol_local,
                gol_visitante: dato.data.gol_visitante,
                apostado: dato.data.apostado
            })
        })
        this.setState({ show: banderas });
    }


    constructor(props) {
        super(props);
        // this.setState({ datos: props.datos });

    }

    render() {

        return (
            <View style={{ padding: 10 }} >

                {this.cargarPartidos()}

            </View>

        );
    }


    cargarPartidos() {
        const { fondo1, fondo2 } = styles;

        return this.state.datos.map((dato, index) =>

            <TouchableOpacity key={index} style={(index == 0 || index % 2 == 0) ? fondo1 : fondo2} onPress={this.cambiarShow.bind(this, index)}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.textEquipo}>{dato.data.local}</Text>
                    <Text style={styles.textVs}>{this.state.show[index].show ? 'VS' : '-'}</Text>
                    <Text style={styles.textEquipo}>{dato.data.visitante}</Text>
                </View>
                {this.mostrarSeccionMarcador(index)}
            </TouchableOpacity>);

    }

    cambiarShow(index) {
        let estado = this.state.show[index];
        estado.show = !estado.show;
        this.setState({ show: this.state.show })
    }

    mostrarSeccionMarcador(index) {
        if (this.state.show[index].show) {
            return (
                <View style={{ marginTop: 20 }}>
                    <Text style={{ alignSelf: 'center' }}>Introduce el marcador final del partido</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, margin: 20 }}>

                            <Input
                                texto={''}
                                value={this.state.show[index].gol_local}
                                onChangeText={gol => this.CambiarGol(gol, 'local', index)}
                            />
                        </View>
                        <View style={{ flex: 1, margin: 20 }}>

                            <Input
                                texto={''}
                                value={this.state.show[index].gol_visitante}
                                onChangeText={gol => this.CambiarGol(gol, 'visit', index)}
                            />
                        </View>
                    </View>
                    <View>
                        {this.state.show[index].apostado?<Icon style={{alignSelf:'center'}} name={'check-circle'} size={50} color={'green'}></Icon>:<Boton texto={'Apostar'} onPress={this.actualizarMarcador.bind(this, this.state.show[index])} /> }

                    </View>
                </View>

            )
        }
    }


    // validarBoton(index) {
    //     let apostado = this.state.show[index].apostado;
    //     if (apostado) {
    //         console.log('aqui');
    //         return <Boton texto={'Apostar'} onPress={this.actualizarMarcador.bind(this, this.state.show[index])} />
    //     } else {
    //         return <Icon style={{alignSelf:'center'}} name={'check-circle'} size={70} color={'green'}></Icon>
    //     }
    // }

    actualizarMarcador(estado) {
        console.log(estado);
        firebase.firestore().collection('partidos-proximos').doc(estado.id).update({
            "gol_local": estado.gol_local,
            "gol_visitante": estado.gol_visitante,
            "apostado": true
        }).then(() => {
            estado.apostado = true;
            this.setState({ show: this.state.show })
            console.log("se actualizo correctamente");
        });
    }


    CambiarGol(gol, tipo, index) {
        let estado = this.state.show[index];
        if (tipo == 'local') {
            estado.gol_local = gol;
        } else {
            estado.gol_visitante = gol;
        }
        this.setState({ show: this.state.show })
    }

}

const styles = StyleSheet.create({

    textTitle: {
        marginLeft: 5,
        alignSelf: 'center',
        fontSize: 20,
    },

    fondo1: {
        flexDirection: 'column',
        padding: 6,
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
    },

    textEquipo: {
        color: 'black',
        fontSize: 18,
        flex: 1,
        // justifyContent: 'space-between'
    },

    textVs: {
        color: 'black',
        fontSize: 18,
        flex: .6,
        // borderBottomWidth: 1,
        // borderColor: '#154544',
    },

    fondo2: {
        flexDirection: 'column',
        padding: 5,
        backgroundColor: 'rgba(52, 52, 52, 0.1)',

    }


})



export default SeccionApuesta;