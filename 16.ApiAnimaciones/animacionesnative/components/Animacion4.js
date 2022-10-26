import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated, View  } from 'react-native';

const Animacion3 = () => {

    //Se crea el estado inicial de la animacion
    const [ animacion ] = useState( new Animated.Value(0) );

    useEffect(() => {
        //Se determina la animacion a realizar
        Animated.timing(
            animacion, {
                toValue: 360,  // al valor al que llega
                duration: 500 // cantidad de tiempo en llegar
            }
        ).start(); // iniciar la animación
    }, []);

    /*3. La interpolacion nos sirve para generar una serie de salidas dependiendo de un rango de valores indicados -> Animacion5.js
         de nuestro estado animacion obtenemos el objeto inerpolate el cual utilizaremos en nuestras propiedades StyleSheet
    */
    const interpolacion = animacion.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    });
    const estiloAnimacion = {
        transform: [{ rotate: interpolacion }]
    }


    return ( 
        <View>
            {/* Se utiliza la animacion en un componente agregandolo a style y agregando Animated al componente */}
            <Animated.View 
                style={[styles.caja, estiloAnimacion ]}
            ></Animated.View>
        </View>
     );
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})
 
export default Animacion3;