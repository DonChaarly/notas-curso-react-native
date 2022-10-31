import React, { useEffect, useState } from 'react'
import { Animated, Image } from 'react-native';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import globalStyles from '../../styles/globalStyles';
import iconLogin from '../../assets/image/contrasena.png'

const Login = ({navigation}) => {

  const [ animacionLogin ] = useState(new Animated.Value(0));

  const [username, setUsername] = useState('');
  const [password, setPassowrd] = useState('');


  useEffect(() => {
    console.log(navigation)
      Animated.timing( animacionLogin, {
          toValue: 1,
          duration: 2000
      }).start();
  }, [])


  const login = () =>{
    if( username == 'admin' && password == 'admin'){
      navigation.navigate("Menu")
    }
  }

  return (
    <>
    <Animated.View style={ [{transform: [{scale: animacionLogin}]},globalStyles.containerCenter ]}>
        <View style={{ alignItems: 'center'}}>
          <Image 
              source={iconLogin} 
              style={{width: 100, height: 100, alignItems: 'center'}}/>
        </View>
        
        <View>
          <Text style={ globalStyles.label}>Username: </Text>
          <TextInput
            style={globalStyles.input}
            placeholder='Usuario'
            onChangeText={setUsername}
            value={username}
          />
        </View>
        <View>
          <Text style={ globalStyles.label}>Password: </Text>
          <TextInput
            style={globalStyles.input}
            placeholder='Password'
            onChangeText={setPassowrd}
            textContentType="password"
            secureTextEntry
            value={password}
          />
        </View>
        <Pressable title='Boton' style={ globalStyles.button}
                onPress={() => login() }>
          <Text style={ globalStyles.textButton }>Login</Text>
        </Pressable>
    </Animated.View>
    
  </>
  )
}

export default Login;

const style = StyleSheet.create({
  button: {
    backgroundColor: '#fa3',
    margin: 3
  }
})
