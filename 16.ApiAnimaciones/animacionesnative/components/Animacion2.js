import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';

const Animacion2 = () => {
    
    //Se crea el estado inicial de la animacion
    const [ animacion ] = useState( new Animated.Value(0) );

    useEffect(() => {
        //Se determina la animacion a realizar

        Animated.timing(
            animacion, {
                toValue: 450,  // al valor al que llega
                duration: 1000 // cantidad de tiempo en llegar
            }
        ).start(); // iniciar la animación
    }, []);


    return ( 
        //Se utiliza la animacion en un componente agregandolo a style y agregando Animated al componente
        //2. Se puede indicar una misma aniamcion en mas de una propiedad Stylesheet -> Animacion4.js
        <Animated.View    
            style={[
                styles.caja,
                { 
                    width: animacion,
                    height: animacion
                }
            ]}
        ></Animated.View>
     );
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})
 
export default Animacion2;