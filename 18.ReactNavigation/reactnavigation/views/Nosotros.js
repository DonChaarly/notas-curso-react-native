import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native'

/*10. Para leer la informacion mandada en el otro componente lo hacemos mediante las props con la propiedad route */
const Nosotros = (  {navigation, route}) => {
    
    const { clienteId } = route.params;

    /*9. Para regresar a una pagina anterior se utiliza la funcion navigation.goBack() o push() */
    const volver = () => {
        //  navigation.navigate('Inicio')
        //  navigation.goBack();
         navigation.push('Inicio')
    }

    return ( 
        <View style={styles.contenedor}>
            <Text> {clienteId} </Text>
            <Button
                title="Volver"
                onPress={ () => volver() }
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
 
export default Nosotros;