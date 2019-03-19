import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { Card, CardSection, Spinner, Boton, Input } from '../reusables';
import firebase from '@firebase/app' //forma correcta de importar el firebase
import SeccionPartidos from '../reusables/seccionPartido';

require('@firebase/firestore');


class Baloncesto extends Component {
    state = { datos: null, cargo: false };

    constructor() {
        super();
    }

    componentWillMount() {

        let datos = []

        firebase.firestore().collection('partidos-baloncesto').get().then(
            (res) => {
                res.forEach((doc) => {
                    doc.ref.collection('partidos').get().then( //entrar a la coleccion 2 del primer documento
                        res => {
                            let partidos = [];
                            res.forEach((doc2) => {
                                partidos.push(doc2.data());
                            })
                            let pais = {
                                pais: doc.data().pais,
                                icono: doc.data().icono,
                                partidos: partidos
                            }
                            datos.push(pais);
                            // console.log(datos);
                            //el estado "cargo" permite que una vez consultados los datos de firebase, llame al metodo y
                            //renderice la "SeccionPartidos" de lo contrario el arreglo llegaria vacio y no mostraria nada.
                            this.setState({ cargo: true });
                            this.setState({ datos: datos });
                        }
                    )

                    // console.log(doc.id, " => ", doc.data());
                });
            }
        );

    }


    render() {

        return (
            <View style={{ flex: 10, flexDirection: 'row', backgroundColor: 'white' }}>
                <ScrollView>
                    {/* <Text> Bienvenido a la seccion de futbolete 22</Text > */}
                    {this.validarMostrar()}
                    {/* <Boton texto={'Boton'} onPress={this.presionarBoton.bind(this)} /> */}
                </ScrollView>
            </View>

        );

    }


    validarMostrar() {
        if (this.state.cargo) {
            return <SeccionPartidos datos={this.state.datos} />;
        } else {
            return (
                <View style={{marginTop:20}}>
                    <Text style={{alignSelf:'center'}}>Cargando Partidos</Text>
                    <Spinner size={'large'} />
                </View>

            );
        }
    }


}



export default Baloncesto;