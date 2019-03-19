import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import firebase from '@firebase/app' //forma correcta de importar el firebase
import { Card, CardSection, Spinner, Boton, Input } from '../reusables';
import SeccionApuesta from './seccionApuesta';

require('@firebase/firestore');


class Apuesta extends Component {

    state = { datos: [], cargo: false };

    constructor() {
        super();
    }

    // datos;

    componentWillMount() {

        let datos = []

        firebase.firestore().collection('partidos-proximos').get().then(
            (res) => {

                res.forEach((doc) => {
                    datos.push(doc.data());
                    // console.log(doc.id, " => ", doc.data());
                });
                this.setState({ cargo: true });
                this.setState({ datos: datos });
                console.log(datos);
            }

        );

    }



    render() {

        return (
            <View style={{ flex: 10, flexDirection: 'row', backgroundColor: 'white' }}>
                <ScrollView>
                    <Text>Próximos partidos</Text>
                    {this.validarMostrar()}
                </ScrollView>
            </View>

        );
    }

    validarMostrar() {
        if (this.state.cargo) {
            return <SeccionApuesta datos={this.state.datos} />;
        } else {
            return (
                <View style={{ marginTop: 20 }}>
                    <Text style={{ alignSelf: 'center' }}>Cargando Partidos</Text>
                    <Spinner size={'large'} />
                </View>

            );
        }
    }


}



export default Apuesta;