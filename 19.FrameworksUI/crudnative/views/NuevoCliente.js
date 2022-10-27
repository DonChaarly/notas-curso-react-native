import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
/*4. React Native Paper tiene componentes propios ya personalzados\
     Estos se tiene que importar de react-native-paper
 */
import { TextInput, Headline, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import globalStyles from '../styles/global';
import axios from 'axios';

const NuevoCliente = ({navigation, route}) => {

    const { guardarConsultarAPI } = route.params;

    // campos formulario
    const [ nombre, guardarNombre] = useState('');
    const [ telefono, guardarTelefono] = useState('');
    const [ correo, guardarCorreo] = useState('');
    const [ empresa, guardarEmpresa] = useState('');
    const [ alerta, guardarAlerta] = useState(false);

    // detectar si estamos editando o no
    useEffect(() => {
        if(route.params.cliente) {
            const { nombre, telefono, correo, empresa } = route.params.cliente;

            guardarNombre(nombre);
            guardarTelefono(telefono);
            guardarCorreo(correo);
            guardarEmpresa(empresa);
        } 
    }, []);

    // almacena el cliente en la BD
    const guardarCliente = async () => {
        // validar
        if(nombre === '' || telefono === '' || correo === '' || empresa === '' ) {
            guardarAlerta(true)
            return;
        }
    
        // generar el cliente
        const cliente = { nombre, telefono, empresa, correo };
        console.log(cliente);

        // Si estamos editando o creando un nuevo cliente
        if(route.params.cliente) {

            const { id } = route.params.cliente;
            cliente.id = id;
            const url = `http://localhost:3000/clientes/${id}`;

            try {
                await axios.put(url, cliente);
            } catch (error) {
                console.log(error);
            }

        } else {
            // guardar el cliente en la API
            try {
                if(Platform.OS === 'ios') {
                    await axios.post('http://localhost:3000/clientes', cliente)
                } else {
                    await axios.post('http://10.0.2.2:3000/clientes', cliente);
                }
            } catch (error) {
                console.log(error);
            }
        }

        // redireccionar
        navigation.navigate('Inicio');

        // limpiar el form (opcional)
        guardarNombre('');
        guardarTelefono('');
        guardarCorreo('');
        guardarEmpresa('');

        // cambiar a true para traernos el nuevo cliente
        guardarConsultarAPI(true);
    }

    return ( 
        <View style={globalStyles.contenedor}>

            <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>

            {/* 6. el textInput tiene las propiedades label y placeholder que muestran etiquetas en el input muy estilisadas */}
            <TextInput
                label="Nombre"
                placeholder="Juan"
                onChangeText={ texto => guardarNombre(texto) }
                value={nombre}
                style={styles.input}
            />
            {/* 7. Se puede modifica un poco la apariencia tambien con el style={} */}
            <TextInput
                label="Teléfono"
                placeholder="13131414"
                onChangeText={ texto => guardarTelefono(texto) }
                value={telefono}
                style={styles.input}
            />
            <TextInput
                label="Correo"
                placeholder="correo@correo.com"
                onChangeText={ texto => guardarCorreo(texto) }
                value={correo}
                style={styles.input}
            />
            <TextInput
                label="Empresa"
                placeholder="Nombre Empresa"
                onChangeText={ texto => guardarEmpresa(texto) }
                value={empresa}
                style={styles.input}
            />
            {/* 5.  Los componentes de react-native-paper se utilizan como cualquier otro componente\
                    para modificar un poco sus estilos, estos tiene ciertas props que se les puede mandar\
                    como el color
                    Se pueden colocar iconos a los componentes con la propiedad icon*/}
            <Button icon="pencil-circle" mode="contained" onPress={() => guardarCliente() }>
                Guardar Cliente
            </Button>

            {/* 8. Para agregar modales con react-native-paper se utilizan los siguientes componentes */}
            <Portal>
                {/* 9. El componente de Dialog tiene la propiedad de visible que maneja el ocultar o mostrar el modal 
                       Tambien se tiene la propiedad onDismiss que es como un onPress*/}
                <Dialog
                    visible={alerta}
                    onDismiss={ () => guardarAlerta(false) }
                 >
                    {/* 10. El componente de Dialog.Title es para el titulo del modal */}
                   <Dialog.Title>Error</Dialog.Title>
                   {/* 11. El Dialog.Content es el contenido del modal */}
                   <Dialog.Content>
                        <Paragraph>Todos los campos son obligatorios</Paragraph>
                   </Dialog.Content>
                   {/* 12. En el Dialog.Actions se colocan los botones del modal -> Inicio.js */}
                   <Dialog.Actions>
                       <Button onPress={ () => guardarAlerta(false) }>OK</Button>
                   </Dialog.Actions>
                </Dialog>
            </Portal>
             
        </View>
     );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        backgroundColor: 'transparent'
    }
})
 
export default NuevoCliente;