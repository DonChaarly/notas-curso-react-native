import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';

const Animacion1 = () => {

    //Se crea el estado inicial de la animacion
    const [ animacion ] = useState( new Animated.Value(0) );

    useEffect(() => {
        //Se determina la animacion a realizar
        /*1. Animacion basada en tiempo, se indica un tiempo en el que se realizara la animacion -> Animacion2.js
             Argumentos:
             - Estado de animacion
             - Objeto de propiedades
                - toValue: hacia que valor finaliza
                - duration: Duracion que tardar en hacer la animacion
        */
        Animated.timing(
            animacion, {
                toValue: 1,  // al valor al que llega
                duration: 500 // cantidad de tiempo en llegar
            }
        ).start(); // iniciar la animación
    }, []);


    return ( 
        //Se utiliza la animacion en un componente agregandolo a style y agregando Animated al componente
        <Animated.View
            style={{
                opacity: animacion
            }}
        >
            <Text style={styles.texto}>Animacion 1</Text>
        </Animated.View>
     );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
})
 
export default Animacion1;