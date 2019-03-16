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
    cambiarSeccion() {
        let params = this.state.seccion;
        let vista = <Text>{this.state.seccion}</Text>;
        console.log('aquin entro');

        switch (params) {
            case 'futbol':
                vista =
                    <Futbol />
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
            case 'home':

                vista =
                    <View style={{ flex: 9, flexDirection: 'row' }}>

                        <View style={{ flex: 10 }}>

                            <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>


                                <CardMenuItems
                                    icono='soccer'
                                    color='red'
                                    texto='Fútbol'
                                    onPress={this.cambiarEstado.bind(this, {state:'futbol',title:'Fútbol'})}
                                />
                                <CardMenuItems
                                    icono='cash'
                                    color='green'
                                    texto='Apuestas'
                                    onPress={this.cambiarEstado.bind(this, {state:'apuestas',title:'Apuesta'})}

                                />
                            </View>
                        </View>

                        <View style={{ flex: 10 }}>
                            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>


                                <CardMenuItems
                                    icono='basketball'
                                    color='blue'
                                    texto='Baloncesto'
                                    onPress={this.cambiarEstado.bind(this, {state:'baloncesto',title:'Baloncesto'})}

                                />

                                <CardMenuItems
                                    icono='account'
                                    color='yellow'
                                    texto='Perfil'
                                    onPress={this.cambiarEstado.bind(this, {state:'home',title:'Resultados App'})}
                                />
                            </View>
                        </View>

                    </View>

                    ;
                break;
        }
        return vista;
        // Actions.Futbol();
    }

    cambiarEstado(param) {
        Actions.refresh({ title: param.title })
        this.setState({ seccion: param.state })
    }


    render() {

        return (
            <View style={stylesScreen.container}>
                <View style={stylesScreen.content}>
                    <ScrollView  >
                        {this.cambiarSeccion()}

                    </ScrollView>
                </View>

                <View style={stylesScreen.footer}>
                    <BarraInferior
                        primero="home"
                        segundo="soccer"
                        tercero="basketball"
                        cuarto="cash"
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
    },
    footer: {
        flex: 1.3
    }

}

export default Home;
