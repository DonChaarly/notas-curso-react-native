
import { Alert, Button, Image, StyleSheet, View } from 'react-native';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { useState } from 'react';
import { Colors } from '../../constants/color';

 
 const ImagePicker = () => {

    const {pickedImage, setPickedImage} = useState();

    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

    /*1. La funcion verifyPermissions nos ayudara a verficar si el usuario ha dado permisos 
         a la camara */
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

    async function takeImageHandler(){

        //2. Recuperamos los permisos de la camara
        const hasPermission = await verifyPermissions();

        if (!hasPermission){
            return;
        }

        /*3. La funcion launchCameraAsync() abre la camara y espera a que el usuario tome un foto
             Esta funcion regresa una promesa
             Se pueden colocar configuraciones a la camara como el permitir editar la foto */
        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });
        
        setPickedImage(image.uri);

    }

    let imagePreview = <Text>No image taken yet.</Text>;

    if (pickedImage) {
        imagePreview = <Image source={{ uri: pickedImage }}/>
    }

   return (
     <View>
        <View>
            <Image source={{uri: pickedImage}}/>
        </View>
        <View>
            <Button title='Take Image' onPress={takeImageHandler}/>
        </View>
     </View>
   )
 }

 export default ImagePicker;
 
 const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
    },
    image: {
        width: '100%',
        height: '100%'
    }
  })