import React from 'react';
import { View,Text } from 'react-native';

const Card = (props) => {
    const {viewStyle} = styles;
    // console.log(props);
    return(
        <View style={viewStyle}>
           {/* <Text>Hola mundo</Text> */}
           {props.children}
        </View>
   )
}

const styles = {
    viewStyle: {
        borderWidth: 1,
        borderRadius: 3, 
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}

export {Card};