import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import firebase from '@firebase/app' //forma correcta de importar el firebase
import { Card, CardSection, Spinner, Boton, Input } from '../reusables';


require('@firebase/firestore');


class futbol extends Component {

    state = { datos: null };

    constructor() {
        super();
    }

    // datos;

    componentWillMount() {

        let datos = []

        firebase.firestore().collection('partidos-futbol').get().then(
            (res) => {
                res.forEach((doc) => {
                    doc.ref.collection('partidos').get().then(
                        res => {
                            let partidos = [];
                            res.forEach((doc2) => {


                                partidos.push(doc2.data());
                                // console.log(doc.data().pais);
                                // console.log(doc2.id, " => ", doc2.data());
                            })
                            let pais = {
                                pais: doc.data().pais,
                                icono: doc.data().icono,
                                partidos: partidos
                            }
                            datos.push(pais);
                            //  console.log(datos);
                        }
                    )

                    // console.log(doc.id, " => ", doc.data());
                });
            }
        );
        this.setState({ datos: datos });

    }


    render() {

        return (
            <View style={{ flex: 10, flexDirection: 'row', backgroundColor:'white' }}>
                <ScrollView>
                    <Text> Bienvenido a la seccion de futbol</Text >
                    <Boton texto={'Boton'} onPress={this.presionarBoton.bind(this)} />
                </ScrollView>
            </View>

        );
    }


    presionarBoton() {
        console.log(this.state.datos);
    }


}




export default futbol;