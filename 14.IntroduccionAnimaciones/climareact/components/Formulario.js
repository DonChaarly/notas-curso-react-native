import React, { useState }  from 'react'
/*1. Para crear animaciones primero se tiene que importar tanto useState como el componente Animated */
import { Text, TextInput, View, StyleSheet, TouchableWithoutFeedback, Animated, Alert } from 'react-native';
import { Picker } from '@react-native-community/picker';

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {

    const {pais, ciudad} = busqueda;

    /*2. Se tiene que crear una nueva instancia de Animated como un estado como sigue */
    const [ animacionboton ] = useState(new Animated.Value(1));

    const consultarClima = () => {
        if(pais.trim() === '' || ciudad.trim() === '') {
            mostrarAlerta();
            return;
        }

        // consultar la api
        guardarConsultar(true)
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Agrega una ciudad y país para la búsqueda',
            [{ text: 'Entendido '}]
        )
    }

    /*3. Se crean funciones en las que se indicaran los detalles de la animacion */
    /*4. Dentro se utiliza la clase Animated seguido del tipo de animacion\
         Como argumetno se coloca el estado Animaed que definimos\
         Como segundo argumento se coloca un objeto con los detalles de la animacion
         - toValue: indica el valor final de la propiedad StyleSheet que tendra al terminar la animacion
         Se coloca .start() para iniciar la animacion */
    const animacionEntrada = () => {
        Animated.spring( animacionboton, { 
            toValue: .75
        }).start();
    }

    const animacionSalida = () => {
        Animated.spring( animacionboton, { 
            toValue: 1, 
            friction: 4,
            tension: 30
        }).start();
    }

    /*6. Se crea un objeto como si fuera un nuevo StyleSheet en donde se indicara prpiedades 
         y sus valores tomaran el valor del estado animacion que creamos */
    const estiloAnimacion = {
        transform: [{ scale: animacionboton  }]
    }

    return ( 
        <>
            <View style={styles.formulario}>
                <View>
                    <TextInput 
                        value={ciudad}
                        style={styles.input}
                        onChangeText={ ciudad => guardarBusqueda({ ...busqueda, ciudad }) }
                        placeholder="Ciudad"
                        placeholderTextColor="#666"
                    />
                </View>
                <View>
                    <Picker
                        selectedValue={pais}
                        itemStyle={{ height: 120, backgroundColor: '#FFF' }}
                        onValueChange={ pais => guardarBusqueda({ ...busqueda, pais}) }
                    >
                        <Picker.Item label="-- Seleccione un país --" value="" />
                        <Picker.Item label="Estados Unidos" value="US" />
                        <Picker.Item label="México" value="MX" />
                        <Picker.Item label="Argentina" value="AR" />
                        <Picker.Item label="Colombia" value="CO" />
                        <Picker.Item label="Costa Rica" value="CR" />
                        <Picker.Item label="España" value="ES" />
                        <Picker.Item label="Perú" value="PE" />
                    </Picker>
                </View>

                {/* 5. Esta funcion se coloca en un componente para indicar por ejemplo que cuando 
                       se presione en un componente se inicie una animacion y cuando se suelte se inicie otra */}
                <TouchableWithoutFeedback
                    onPressIn={ () => animacionEntrada() }
                    onPressOut={ () => animacionSalida()  }
                    onPress={ () => consultarClima() }
                >
                    {/* 7. A los elementos que queramos que se aplique la animacion les colocamos dentro de sus style el 
                           objeto anterior que creamos, tambien se tiene que indicar Animated. antes del nombre del componente */}
                    <Animated.View
                        style={[ styles.btnBuscar, estiloAnimacion] }
                    >
                        <Text style={styles.textoBuscar } >Buscar Clima</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View> 
        </>
     );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 50,
        backgroundColor: '#FFF',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    btnBuscar: {
        marginTop: 50,
        backgroundColor: '#000',
        padding: 10,
        justifyContent: 'center'
    },
    textoBuscar: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18
    }
})
 
export default Formulario;