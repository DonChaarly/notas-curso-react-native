import React  from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
//3. Para utilizar los estilos se tiene que importar el objeto de StyleSheet creado
import globalStyles from '../styles'

const NuevoPresupuesto = ({ 
    presupuesto, 
    setPresupuesto, 
    handleNuevoPresupuesto 
}) => {

    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>Definir Presupuesto</Text>
            {/* 1. Algo curioso del TextInput es que a pesar de colocar como keyboardType='number-pad' por ejemplo -> styles/index.js
                   Aun asi el textInput estara esperando que se le pase un string, si se le pasa un tipo numeric
                   este mandara error
                   asi que es mejor transformar el value a toString */}
            <TextInput  
                keyboardType='numeric'
                placeholder='Agrega tu presupuesto: Ej. 300'
                style={styles.input}
                value={ presupuesto.toString() }
                onChangeText={setPresupuesto}
            />

            <Pressable 
                style={styles.boton}
                onPress={() => handleNuevoPresupuesto(presupuesto)}
            >
                <Text style={styles.botonTexto}>Agregar Presupuesto</Text>
            </Pressable>
            
        </View>
    )
}

const styles = StyleSheet.create({
    //4. Dentro del StyleSheet del archivo se tienen que crear una copia con spred de los estilos globales para poder utilizarlos en el archivo - Gasto.js
    contenedor: {
        ...globalStyles.contenedor
    },
    label: {
        textAlign: 'center',
        fontSize: 24,
        color: '#3B82F6'
    },
    input: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 30,
    },
    boton: {
        marginTop: 30,
        backgroundColor: '#1048A4',
        padding: 10,
        borderRadius: 10
    },
    botonTexto: {
        color: '#FFF',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})


export default NuevoPresupuesto
