import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';


const Baloncesto = () => {

    return (
        <View style={{ flex: 10, flexDirection: 'row', backgroundColor: 'white' }}>
            <ScrollView>

                <Text>Bienvenido a baloncesto</Text>
            </ScrollView>
        </View>

    );


}



export default Baloncesto;