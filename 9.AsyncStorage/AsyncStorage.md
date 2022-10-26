
# Async Storage

Sistema de almacenamiento de tipo llave-valor que existe y puede ser accedida de forma golbal en la aplicacion, muy similar al LocalStorage

En ios utiliza diccionarios o arcihvos, mientras que en Android utiliza SQLite o RocksDB

## Metodos del AsyncStorage

- .setItem(): Almacenar elementos
- .getItem(): Obtener elementos
- .removeItem(): Eliminar un Elemento
- .clear(): limpia el contenido


## Instalar Async Storage

Hay que ir a react native directory y buscar una libreria para async Storage\
La mas popular es la de @react-native-async-storage/async-storage\
se instala con el siguiente comando:

    npm install @react-native-async-storage/async-storage

## Buscar y guardar valores

Para guardar un valor:

    await AsyncStorage.setItem('llave', valor)

Para recuperar un elemento

    await AsyncStorage.getItem('llave')

Puede haber un error al utilizar el AsyncStorage asi que hay que rodear con un tryCatch

    try {
      const presupuestoStorage = await AsyncStorage.getItem('planificador_presupuesto') ?? 0
    } catch (error) {
        console.log(error)
      }
    }

## Eliminar elementos del asyncStorage

Para eliminar un valor:

    await AsyncStorage.removeItem('llave')

Para eliminar todos los elementos del asyncStorage

    await AsyncStorage.clear()

## Cuidados con el AsyncStorage

Solo se pueden almacenar string en el asyncStorage, asi que si se quiere almacenar por ejemplo un objeto, se tiene que pasar por el JSON.stringify()

    await AsyncStorage.setItem('planificador_gastos', JSON.stringify(gastos))

Al recuperar un objeto que paso por el stringify se tiene que hacer un parse

    const gastosStorage = await AsyncStorage.getItem('planificador_gastos') 
    const gastosParse = JSON.parse(gastosStorage)


