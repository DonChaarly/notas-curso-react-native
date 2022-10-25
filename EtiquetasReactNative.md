
# Etiquetas React Native

- ***< View >*** : Es como un div
- ***< SafeAreaView >*** : Esta etiqueta se coloca en el App.js es para que en ios las ventanas no ocupen el area del notch de los iphons
- ***< Text >*** : Sirve para mostrar texto como un < p >
- ***< TextInput >*** : Es como un input
  - placeholder='Placeholder del input'
  - placeholderTextColor={'#666'}
  - keyboardType='number-pad'
  - onChangeText={funcion}
  - multiline={true}
  - numberOfLines={4}
  - maxLength={10}
- ***< Button >*** : Boton
- ***< Image >*** : Imagenes
- ***< StyleSheet >*** : Para establecer estilos
- ***< Alert >*** : Manda un mensaje como un alert
- ***< Pressable >*** : Para indicar que lo que esta dentro se puede clickear
- ***< ScrollView >*** : Para establecer un scroll ya sea en x o en y
- ***< FlatList >*** : Es **como un map**, pero tiene **mejor rendimiento** porque renderiza solo los componentes que se ven en la pantalla
  - data: se coloca el arreglo a iterar
  - keyExtractor: es como el key
  - renderItem: se coloca lo que se va a renderizar
- ***< Modal >*** : Para mostrar ventan emergente
  - visible={modalPaciente} 
  - animationType='slide'

### FlatList
Es **como un map**, pero tiene **mejor rendimiento** porque renderiza\
solo los componentes que se ven en la pantalla, en **data** se coloca el arreglo a iterar,\
en **keyExtractor** es como el key, y **renderItem** se coloca lo que se va a renderizar:\
el objeto que este iterando se tiene que llama item a fuerza, y si se le manda a otro componente tambien se tiene que llamar item

    < FlatList
        style={styles.listado}
        data={pacientes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
            return(
                < Paciente item={item}/>
            )
        }}
    />