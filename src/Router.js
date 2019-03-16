import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import Login from './components/login/login';
import Home from './components/home/home'
import Futbol from './components/futbol/futbol'
import Baloncesto from './components/baloncesto/baloncesto'
import Apuesta from './components/apuestas/apuesta'
import firebase from '@firebase/app' //forma correcta de importar el firebase


const RouterComponent = () => {
    return (
        <Router>
            {/* <Stack key="root"> */}
            <Scene key="root" hideNavBar>

                <Scene key="loginMain" hideNavBar>

                    <Scene
                        key="login"
                        component={Login}
                        initial
                    />
                </Scene>
                <Scene key="principal">

                    <Scene
                        key="Home"
                        component={Home}
                        title="Resultados App"
                        rightTitle="Cerrar sesión"
                        onRight={() => logOut()}
                    />
                    {/* <Scene
                        key="Futbol"
                        component={Futbol}
                        title="Fútbol"
                        rightTitle="Cerrar sesión"
                        onRight={() => logOut()}
                    />


                    <Scene
                        key="Baloncesto"
                        component={Baloncesto}
                        title="Baloncesto"
                        rightTitle="Cerrar sesión"
                        onRight={() => logOut()}
                    />
                    <Scene
                        key="Apuesta"
                        component={Apuesta}
                        title="Apuestas"
                        rightTitle="Cerrar sesión"
                        onRight={() => logOut()}
                    /> */}

                </Scene>
            </Scene>

            {/* </Stack> */}

        </Router>
    );
}

logOut = () => {
    firebase.auth().signOut()
    console.log("cerrorrrr");
}

export default RouterComponent;