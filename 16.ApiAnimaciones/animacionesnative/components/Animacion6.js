import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native'

const Animacion6 = () => {

    //Se crea el estado inicial de la animacion
    const [ animacion1 ] = useState(new Animated.Value(0));
    const [ animacion2 ] = useState(new Animated.Value(-50));

    useEffect(() => {
        //Se determina la animacion a realizar
        //6. Todo lo que este dentro de Animated.loop() se ejecutara indefinidamente
        Animated.loop(
            //5. Las animaciones que este dentro de Animated.sequence se ejecutaran una tras otra
            Animated.sequence([
                Animated.timing(animacion2, {
                    toValue: -30,
                    duration: 0
                }),
                Animated.timing( animacion1, {
                    toValue: 60,
                    duration: 500
                }),
                Animated.timing(animacion2, {
                    toValue: 30,
                    duration: 500
                }),
                Animated.timing( animacion1, {
                    toValue: 0,
                    duration: 500
                }),
                Animated.timing(animacion2, {
                    toValue: -30,
                    duration: 500
                }),
            ])
        ).start();
    }, []);

    const estiloAnimacion = {
        transform: [
            { translateY : animacion1 },
            { translateX : animacion2 }
        ]
    }

    return ( 
        <View style={{ alignItems: 'center'}}>
            {/* Se utiliza la animacion en un componente agregandolo a style y agregando Animated al componente */}
            <Animated.View
                style={[
                    styles.caja,
                    estiloAnimacion
                ]}
            >

            </Animated.View>
        </View>
     );
}

const styles = StyleSheet.create({
    caja: {
        width: 10,
        height: 10,
        backgroundColor: 'cornflowerblue'
    }
})
 
export default Animacion6;