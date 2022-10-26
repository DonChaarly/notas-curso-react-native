import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Animated } from 'react-native';

const Animacion5 = () => {

    //Se crea el estado inicial de la animacion
    const [ animacion ] = useState( new Animated.Value(1));

    const presionarBtn = () => {
        //Se determina la animacion a realizar
        Animated.spring( animacion, {
            toValue: .8
        } ).start();
    }

    const soltarBtn = () => {
        //Se determina la animacion a realizar
        /*4. Spring se encarga de determinar el tiempo de animacion dejando la animacion mas realista - Animacion6.js
             Argumentos:
                - Estado de animacion
                - Objeto de propiedades
                - toValue: hacia que valor finaliza
                - friction: crea un efecto de rebote
                - tension: hace que la animacion se haga mas lenta o rapida
        */
        Animated.spring( animacion, {
            toValue: 1,
            friction: 4, // mas bajo, mayor rebote
            tension: 10
        }).start();
    }

    const estiloAnimacion = {
        transform: [{ scale: animacion }]
    }

    return ( 
        <View style={styles.contenedor}>
            <TouchableWithoutFeedback
                onPressIn={ () => presionarBtn() }
                onPressOut={ () => soltarBtn() }
            >
                {/* Se utiliza la animacion en un componente agregandolo a style y agregando Animated al componente */}
                <Animated.View style={[styles.btn, estiloAnimacion]}>
                    <Text style={styles.texto} >Iniciar Sesión</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
     );
}

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'cornflowerblue',
        width: 280,
        height:80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 28
    }
})
 
export default Animacion5;