import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import BarraInferior from '../reusables/barrainferior';
import CardMenuItems from '../reusables/cardmenuitems';
import { Actions } from 'react-native-router-flux';
import Futbol from '../futbol/futbol'
import Baloncesto from '../baloncesto/baloncesto'
import Apuesta from '../apuestas/apuesta'

class Home extends Component {

    state = { seccion: 'home' };

    //metodo que cambia la seccion dependiendo la opcion seleccionada
    //tanto en el menu principal, como en la barra inferior
    cambiarSeccion() {
        let params = this.state.seccion;
        let vista = <Text>{this.state.seccion}</Text>;
        // console.log('aquin entro');

        switch (params) {
            case 'futbol':
                vista =
                    // <View style={{ flex: 10, flexDirection: 'row' }}>
                        // <ScrollView>
                            <Futbol />
                        // </ScrollView>
                    // </View>
                    ;
                break;

            case 'baloncesto':
                vista =
                    <Baloncesto />
                    ;
                break;
            case 'apuestas':
                vista =
                    <Apuesta />
                    ;
                break;
            case 'home': //vista principal o "home"

                vista =
                    <View style={stylesScreen.content}>
                        <ScrollView  >
                            <View style={{ flex: 9, flexDirection: 'row', }}>

                                <View style={{ flex: 10 }}>

                                    <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>


                                        <CardMenuItems
                                            icono='soccer'
                                            color='red'
                                            texto='Fútbol'
                                            onPress={this.cambiarEstado.bind(this, { state: 'futbol', title: 'Fútbol' })}
                                        />
                                        <CardMenuItems
                                            icono='cash'
                                            color='green'
                                            texto='Apuestas'
                                            onPress={this.cambiarEstado.bind(this, { state: 'apuestas', title: 'Apuesta' })}

                                        />
                                    </View>
                                </View>

                                <View style={{ flex: 10 }}>
                                    <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>


                                        <CardMenuItems
                                            icono='basketball'
                                            color='blue'
                                            texto='Baloncesto'
                                            onPress={this.cambiarEstado.bind(this, { state: 'baloncesto', title: 'Baloncesto' })}

                                        />

                                        <CardMenuItems
                                            icono='account'
                                            color='yellow'
                                            texto='Perfil'
                                            onPress={this.cambiarEstado.bind(this, { state: 'home', title: 'Resultados App' })}
                                        />
                                    </View>
                                </View>

                            </View>
                        </ScrollView>
                    </View>

                    ;
                break;
        }
        return vista;
        // Actions.Futbol();
    }

    /**
     * 
     * @param {*} param objeto que viene con el titulo y el identificador de la seccion a llamar
     */
    cambiarEstado(param) {
        Actions.refresh({ title: param.title }); //cambiar el titulo del toolbar
        this.setState({ seccion: param.state }); //cambiar el estado de la seccion para luego renderizar.
    }

    obtenerInfo(data) {
        console.log(data);
    }


    render() {

        return (
            <View style={stylesScreen.container}>
                {/* LLamar a la seccion y validar el menu que selecciono */}
                {this.cambiarSeccion()}


                <View style={stylesScreen.footer}>
                    <BarraInferior
                        primero="home"
                        segundo="soccer"
                        tercero="basketball"
                        cuarto="cash"
                        onPress={data => this.cambiarEstado(data)}
                    />
                </View>

            </View>
        );
    }



}

const stylesScreen = {
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    content: {
        flex: 10,
        // backgroundColor: 'blue',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'white'
    },
    footer: {
        flex: 1.3
    }

}

export default Home;
