import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';


const RouterComponent = () => {
    return (
        <Router >
            {/* <Stack key="root"> */}
            <Scene key="root" hideNavBar>

                <Scene key="login" hideNavBar>

                    <Scene
                        key="login"
                        component={Home}
                        initial
                    />
                </Scene>
                <Scene key="configuraciones">

                    <Scene
                        key="ListaCiudades"
                        component={ListaCiudades}
                        title="Ciudades"
                        rightTitle="Perfil"
                        onRight={() => Actions.Perfil()}
                    />
                    <Scene
                        key="Perfil"
                        component={Perfil}
                        title="Perfil"
                    />
                </Scene>
            </Scene>

            {/* </Stack> */}

        </Router>
    );
}

export default RouterComponent;