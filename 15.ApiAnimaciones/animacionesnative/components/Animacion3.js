import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated, View  } from 'react-native';

const Animacion3 = () => {

    //Se crea el estado inicial de la animacion
    const [ animacion ] = useState( new Animated.Value(14) );

    useEffect(() => {
        //Se determina la animacion a realizar
        Animated.timing(
            animacion, {
                toValue: 40,  // al valor al que llega
                duration: 500 // cantidad de tiempo en llegar
            }
        ).start(); // iniciar la animación
    }, []);


    return ( 
        <View>
            {/* Se utiliza la animacion en un componente agregandolo a style y agregando Animated al componente */}
            <Animated.Text 
                style={[styles.texto, { fontSize: animacion }]}
            >Animacion 1</Animated.Text>
        </View>
     );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
})
 
export default Animacion3;