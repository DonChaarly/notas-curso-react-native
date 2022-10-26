import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native'

/*7. Todos los componentes indicados en el Stack.Navigator dentro de sus props tienen una propiedad llamada 
     navigation la cual tiene varios metodos que nos sirven para navegar hacia otros componentes */
const Inicio = ({navigation}) => {

    const informacion = { 
        clienteId: 5000,
        totalpagar: 500
    }

    /*8. Para navegar hacia otro componente dentro de una funcion se utiliza navigation.navigate() -> Nosotros.js
         y se indica el path del componente a navegar
         En los metodo del navigate como segundo parametro se pueden indicar parametros que se van a mandar 
    */
    const visitarNosotros = () => {
        navigation.navigate('Nosotros', informacion)
    }

    return ( 
        <View style={styles.contenedor}>
            <Text>Inicio</Text>
            <Button
                title="Ir a Nosotros"
                onPress={ () => visitarNosotros() }
            />
        </View>
       
     );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
 
export default Inicio;