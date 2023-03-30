
# Camara Ubicacion y Mas cosas en ReactNative

Esto lo trabajaremos con un proyecto generado por expo el que se hace con
    
    expo init (nombre proyecto)

Se utilizara expo camera, la documentacion esta en

    https://docs.expo.dev/versions/v46.0.0/sdk

## Instalacion y configuracion

Para instalar el expo camera

    expo install expo-image-picker

Se tiene que agregar que pida permisos, hay diferentes permisos, como para tomar fotos, para acceder a las fotos, etc, esto se ve en la documentacion en imagePicker

en el archivo app.json se coloca lo siguiente debajo de "web"\
Se puede modificar el mensaje que se le muestra al usuario

    "plugins": [
      [
        "expo-image-picker",
        {
          "photosPermission": "La aplicacion necesita acceder a tu camara para poder tomar fotos"
        }
      ]
    ]

## Agregar la camara a nuestro proyecto

documentacion: https://docs.expo.dev/versions/v46.0.0/sdk/imagepicker/#imagepickerlaunchcameraasyncoptions\
Se importa la siguiente instancia\

    import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';

se crea el siguiente objeto para los permisos

    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

La funcion verifyPermissions nos ayudara a verficar si el usuario ha dado permisos 
a la camara

    async function verifyPermissions() {
        if(cameraPermissionInformation.status === PermissionStatus.UNDETERMINED){
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }
        if(cameraPermissionInformation.status === PermissionStatus.DENIED){
            Alert.alert(
                'No ha dado permisos a la camara!', 
                'Necesitas darle permisos a la camara para utilizar la app'
            );
            return false;
        }
        return true;
    }


La funcion launchCameraAsync() abre la camara y espera a que el usuario tome un foto\
Esta funcion regresa una promesa\
Se pueden colocar configuraciones a la camara como el permitir editar la foto\
Tenemos que verificar primero los permisos de la camara 

    async function takeImageHandler(){
        const hasPermission = await verifyPermissions();

        if (!hasPermission){
            return;
        }
        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });
        console.log( JSON.stringify(image))

    }

