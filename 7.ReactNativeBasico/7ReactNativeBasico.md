# React Native Basico

## Crear un nuevo proyecto react

    npx react-native init (nombreProyecto)



## Principales etiquetas de ReactNative

En React Native no se pueden utilizar las etiquetas HTML por ello, reactNative creo componentes especiales que sustituyen estan

- ***< View >*** : Es como un div
- ***< SafeAreaView >*** : Esta etiqueta se coloca en el App.js es para que en ios las ventanas no ocupen el area del notch de los iphons
- ***< Text >*** : Sirve para mostrar texto como un < p >
- ***< Button >*** : Boton
- ***< Image >*** : Imagenes
- ***< StyleSheet >*** : Para establecer estilos
- ***< Alert >*** : Manda un mensaje como un alert
- ***< Pressable >*** : Para indicar que lo que esta dentro se puede clickear
- ***< ScrollView >*** : Para establecer un scroll ya sea en x o en y
- ***< FlatList >*** : 
- ***< Modal >*** :

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

        < Modal visible={modalPaciente} animationType='slide' >
            Desde el Modal\
        </ Modal >


    