import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import { Card, CardSection, Spinner, Boton, Input } from '../reusables';
import firebase from '@firebase/app' //forma correcta de importar el firebase
// import firebase from '@firebase/app'; //forma correcta de importar el firebase
// const firebase = require("@firebase/auth");
require('@firebase/auth');

class Login extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        cargando: false,
        sesionIniciada: null
    }


    componentWillMount() {


    }


    enviarFormulario() {
        const { email, password } = this.state;
        console.log('aqui en el boton');
        this.setState({ error: '', cargando: true });

        if (email != '' & password != '') {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(this.loginExitoso())
                .catch(this.loginError.bind(this))
                ;
            return;
        }

        this.setState({ error: 'El correo o contraseña son vacios', cargando: false });
    }


    loginExitoso() {
        this.setState({ email: '', password: '', cargando: false, error: 'Se autentico satisfactoriamente' });
    }

    loginError() {
        this.setState({ error: 'Error de autenticación', cargando: false });
    }


    mostrarAccion() {
        if (this.state.cargando) {
            return <Spinner size={'small'} />
        } else {
            return (<Boton texto={'Enviar'}
                onPress={this.enviarFormulario.bind(this)}
            />
            )
        }
    }

    cerrarSesion() {

    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
                backgroundColor: 'white'
            }}>

                <Card>
                    <Text style={{ fontSize: 30, paddingBottom: 30, textAlign: 'center', color: 'black' }}>Resultados App</Text>

                    <CardSection>
                        <Input
                            texto={'Email'}
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            placeholder={'usuario@gmail.com'}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            texto={'Contraseña'}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeholder={'Contraseña'}
                            secureTextEntry={true}
                        />
                    </CardSection>
                    <Text style={styles.errorMsgStyle} >{this.state.error}</Text>
                    <CardSection>
                        {this.mostrarAccion()}

                    </CardSection>
                    {/* <CardSection>
                        <Boton texto={'cerrar sesion'}
                            onPress={()=> firebase.auth().signOut()}/>

                    </CardSection> */}
                </Card>
            </View>

        );
    }

}

const styles = {
    errorMsgStyle: {
        fontSize: 17,
        color: 'red',
        alignSelf: 'center',
        // display: 'none'
    }
}

export default Login;