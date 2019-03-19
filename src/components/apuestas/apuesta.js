import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';


class Apuesta extends Component {

    render() {

        return (
            <View style={{ flex: 10, flexDirection: 'row', backgroundColor: 'white' }}>
                <ScrollView>

                    <Text>Bienvenido a Apuestas render</Text>
                </ScrollView>
            </View>

        );
    }


}



export default Apuesta;