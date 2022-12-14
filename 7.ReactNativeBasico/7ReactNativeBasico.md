# React Native Basico

Primer comentario del proyecto en archivo App.js

## Crear un nuevo proyecto react

Se tiene dos formas de crear proyectos reactNative\
Con expo y con react-native de la comunidad\
Se recomienda trabajar con el de la comunidad

### Para expo
Hay que instlar expo globalmente, esto solo se la primera vez en la computadora

    sudo npm install -g expo-cli

Para crear un nuevo proyecto

    expo init (Nombre del proyecto)

Selecconamos la opcion blank

### Para el de la comunidad

    npx react-native init (nombreProyecto)

## Correr aplicacion
### En Expo
Se debe correr metro primero y dejarlo en una terminal aparte

    npm start

Despues para correr en android:

    npm run android

Para correr en ios:

    npm run ios

Para correr en web

    npm run web

### En el de la comunidad
Se debe correr metro primero y dejarlo en una terminal aparte

    npx react-native start

Despues para correr en android:

    npx react-native run-android

Para correr en ios:

    npx react-native run ios

## Principales etiquetas de ReactNative

En React Native no se pueden utilizar las etiquetas HTML por ello, reactNative creo componentes especiales que sustituyen estan\
Algunos de estos componentes son los siguientes, debajo de ellos se muestran sus propiedades que son diferentes a las comunes, junto a ejemplos de sus valores comunes

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
  - source:{ require('../img/grafico.jpg')}
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
- ***< TouchableHightlight >***: Es como un boton pero indica al usuario cuando se ha apretado, haciendo mas oscuro el boton al momento de apretarlo
- ***< ActivityInndicator >***: Renderiza un spinner que indica que algo esta cargando
  - size="large"
  - color="#fff"
- ***< TouchableWithoutFeedback >***: Es como un boton pero no le indica al usuario que se ha orpimido con una animacion o algo
- ***< StatusBar >***: Se utiliza par mostrar la barra de bateria, wifi etc del celular, se colcoa en el componente principal de la app envolviendo los componentes 

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

### TextInput
Algo curioso del **TextInput** es que a pesar de colocar como keyboardType='number-pad' por ejemplo\
Aun asi el textInput **estara esperando** que se le pase **un string**, si se le pasa un tipo numeric\
este mandara error\
asi que es mejor **transformar el value a toString**

    <TextInput 
        keyboardType='numeric'
        value={ presupuesto.toString() }
        onChangeText={setPresupuesto}
    />

Tambien el TextInput va a retornar un string como nuevo valor

### Image

Para establecer el **url de una imagen** en el componente Image se coloca la **propiedad source={}**\

    <Image  
        style={styles.imagen}
        source={require('../img/icono_ahorro.png')}
    />

Se puede **crear un objeto** en el que se **importaran las imagenes**, y de esta forma nos ahorramos tener que hacerlo en cada componente Image

    const diccionarioIconos = {
        ahorro: require('../img/icono_ahorro.png'),
        comida: require('../img/icono_comida.png'),
    }

    <Image  
        style={styles.imagen}
        source={diccionarioIconos[categoria]}
    />


## Imprimir variables

Asi como en react se utilizan las llaves para hacer referencia a una variable o una expresion javascript dentro del return

    <Text style={styles.titulo}>Administrador de Citas {''}

## Estilos en ReactNative - StyleSheet

***StyleSheet*** en reactNative es **muy similar a CSS** pero cambia un poco principalmente en los guines\
    En Css               En StyleSheet
Ej. background-color -> backgroundColor 

**StyleSheet utiliza flex** para ordenrar nuestos componentes, tomando flex-direction-column por default

Para **crear estilos en un compnente** se crea una constante que utilice el comonente StyleSheet

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#F3F4F6',
            flex: 1
        },
    })

Para **utilizar estilos en una etiqueta** se utiliza la propiedad style y se hace referencia a un estilo definido en la constante StyleSheet creada

    <Text style={styles.titulo}>

Para agregar estilos directamente en el compnente se colocan doble {}

    <Text style={{ backgroudnColor: '#F3F4F6' }}>Administrador de Citas {''}

### Lista de estilos StyleSheet

https://reactnative.dev/docs/image-style-props

### Sombras en ReactNative
Para colocar sombras es un poco mas complicado,\ 
se puede utilizar esta web https://ethercreative.github.io/react-native-shadow-generator/

    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,

###  Principales diferencias entre CSS y Stylesheet
Algunas diferencias entre Css y StyleSheet:
- En margin y padding no se puede abrebiar el top, left, etc, se tiene que colocar las propiedades en especifico
  - Ej. (Css)margin: 10 20 10 20;,  (StyleSheet)marginTop: 10, marginLeft: 20, ....
  - Todos los componentes utilizan flex por default con direccion en columna
  - El transform es diferente, las propiedades que tenga se deben colocar entre [{}]\
        transform: [{ translateY: 50  }]
  - No se utilizan medidas como px o rem, simplemente se coloca el numero
        Ej. marginTop: 10


## Eventos en ReactNative

En reactNative los **eventos son muy similares** a como lo trabaja Javascript de forma nativa\
Los **eventos son camelCase** por ejemplo onClick

| ReactNative | Javascript |
| :---------- | :--------- |
| onPress     | onClick    |


Si se quiere utilizar un boton se puede utilizar ya sea el componente < Button > o el < Pressable >\
Sin embargo **Pressable soporta mas eventos**

**< Pressable >** soporta los eventos: onPress, onPressIn, onPressOut, onLongPress


## Modals

En ReactNative se tiene el compnente Modal el cual es muy util para mostrar ventanas emergentes\
Sus principales propiedades son:
- animationType: se especifica el tipo de animacion. valores: (slide, fade)
- visible: Para indicar la visibilidad por defecto
    
        < Modal visible={modalPaciente} animationType='slide' >\
            Desde el Modal\
        </ Modal >

## Componentes de terceros

A parte de las etiquetas componentes que tiene react-native se pueden utilizar componentes desarrollados por terceros\
Estos se pueden encontrar en https://reactnative.directory/
Es mejor utilizar los que dicen react-native-....

Algunos ejemplos de componentes externos el el date-picker

### Instalar un compnente de tercero
En la documentacion del componente vendra el comando para instalarlo pero normalmente es el siguiente

    npm install (nombreLibrerira)

El siguiente paso es necesrio para ios, se deben registrar las nuevas dependencias con los siguientes comandos:

    cd ios
    pod install

Si lo anterior manda un error se debe colocar el siguente comando (esto se muestra en el propio error)

    LANG=en_US.UTF-8 pod install

## Forumularios en ReactNative

En ReactNative no se tiene una etiqueta Form como en HTML asi que para validar los campos,\
esto se tiene que hacer de forma manual con la funcion submit que se utilice\
Ejemplo:

    const handleCita = () => {
        // Validar
        if([paciente, propietario, email, fecha, sintomas].includes('') ) {
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios'
            )
            return
        }
        ...
    }

## Alertas para el usuario

En ReactNative se tiene la **clase Alert** la cual nos\ 
sirve para **mandar mensajes de alerta** el usuario\
Este metodo toma **tres argumentos**, el primero sera el **titulo** de la alerta\
el segundo es la **descripcion** de la alerta y el tercero es un \
arreglo de botones que tendra la alerta,\
Los botones tambien tiene la propiedad onPress que ejecuta codigo cuando el boton es presionado\
Si no se pasa el argumetno de **botones** se muestra un boton por defecto

    Alert.alert(
        'Error',
        'Todos los campos son obligatorios',
        [
            {text: "Cancelar", style: 'cancel'}, 
            {text: "Ok", onPress: 
                ()=>{console.log("Eliminando")}
            }
        ] 
    )



    