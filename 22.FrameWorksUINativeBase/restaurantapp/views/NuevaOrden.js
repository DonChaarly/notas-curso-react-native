import React from 'react';
import { View, StyleSheet } from 'react-native';
/*1. Al igual que React native paper, Native Base tiene una serie de componentes que 
     agregan funcionalidad y diseno ya implemetado */
import { Container, Button, Text } from 'native-base';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';

const NuevaOrden = () => {

    const navigation = useNavigation();

    return ( 
        <Container style={globalStyles.contenedor}>
            <View style={[globalStyles.contenido, styles.contenido]}>
                {/* 2.  Algunas propiedades:
                         - rounded
                         - block
                         - style
                         - onPress*/}
                <Button
                    style={globalStyles.boton}
                    rounded
                    block
                    onPress={ () => navigation.navigate('Menu')  }
                >
                    <Text style={globalStyles.botonTexto}>Crear Nueva Orden</Text>
                </Button>
            </View>
        </Container>
     );
}

const styles = StyleSheet.create({
    contenido: {
        flexDirection: 'column',
        justifyContent: 'center'
    }
})
 
export default NuevaOrden;