import React, { useState } from 'react'
import {
  SafeAreaView,
  View, 
  Text,
  StyleSheet,
  Pressable,
  Modal,
  FlatList,
  Alert
} from 'react-native'
import Formulario from './src/components/Formulario'
import Paciente from './src/components/Paciente';
import InformacionPaciente from './src/components/InformacionPaciente';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  const [modalPaciente, setModalPaciente] = useState(false)

  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id )
    setPaciente(pacienteEditar[0])
  }

  const pacienteEliminar = id => {
      Alert.alert(
        '¿Deseas eliminar este paciente?',
        'Un paciente eliminado no se puede recuperar',
        [
          { text: 'Cancelar' },
          { text: 'Si, Eliminar', onPress: () => {
              const pacientesActualizados = pacientes.filter( pacientesState => pacientesState.id !== id )
              setPacientes(pacientesActualizados)
          }}
        ]
      )
  }

  const cerrarModal = () => {
    setModalVisible(false)
  }

  return (
    //1. El componente SafeAreaView es para ios y hace que los componentes no se muestren en el notch de los iphons
    <SafeAreaView style={styles.container}>
      {/* 2. La etiqueta text se utiliza para mostar texto
             Asi como en react se utilizan las llaves para hacer referencia a una variable o una expresion javascript dentro del return */}
      {/* 4. Para utilizar estilos en una etiqueta se utiliza la propiedad style y se hace referencia a un estilo definido en la constante StyleSheet creada */}
      <Text style={styles.titulo}>Administrador de Citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

        
      {/* 5. La etiqueta Pressable es como el button pero mejor, soporta mas eventos y puede rodear otras etiquetas para volverlas presionables */}
      <Pressable
        style={styles.btnNuevaCita}
        // 6. En reactNative los **eventos son muy similares** a como lo trabaja Javascript de forma nativa -> Formulario.js
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text
          style={styles.btnTextoNuevaCita}
        >Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? 
          <Text style={styles.noPacientes}>No hay pacientes aún</Text> :
          /*9. Es **como un map**, pero tiene **mejor rendimiento** porque renderiza solo los componentes 
               que se ven en la pantalla, en **data** se coloca el arreglo a iterar, en **keyExtractor** 
               es como el key, y **renderItem** se coloca lo que se va a renderizar */
          <FlatList
            style={styles.listado}
            data={pacientes}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return(
                  <Paciente 
                    item={item}
                    setModalVisible={setModalVisible}
                    setPaciente={setPaciente}
                    pacienteEditar={pacienteEditar}
                    pacienteEliminar={pacienteEliminar}
                    setModalPaciente={setModalPaciente}
                  />
              )
            }}
          />
      }

  
      {modalVisible && (
          <Formulario 
            cerrarModal={cerrarModal}
              pacientes={pacientes}
              setPacientes={setPacientes}
              paciente={paciente}
              setPaciente={setPaciente}
          />
      )}
 
      <Modal
        visible={modalPaciente}
        animationType='slide'
      >
        <InformacionPaciente 
          paciente={paciente}
          setPaciente={setPaciente}
          setModalPaciente={setModalPaciente}
        />
      </Modal>

    </SafeAreaView>
  );
};

/* 3. En ReactNative no se utiliza Css sino StyleSheet que es muy parecido a Css
      Para especificar estilos se debe crear una constante fuera del functionalCompnent con ayuda de StyleSheet.create
*/
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  titulo: {
      textAlign: 'center',
      fontSize: 30,
      color: '#374151',
      fontWeight: '600'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30
  }
})

export default App;