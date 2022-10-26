//1. Se coloca la importacion de gesture-handle hasta arriba de todo en la pagina principal
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';

// React Navigation
//2. Se colocan las siguientes importaciones
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

//3. Se crea un objeto con la funcion createStackNavigator()
const Stack = createStackNavigator();

const App  = () => {
  return (
    <>
    {/* 4. todo lo que se quiera que este dentro del navegador se coloca dentro del NavigatorContainer y Stack.Navigator*/}
      <NavigationContainer>
        {/* 5. Se puede indicar una configuracion inicial al Stack.Navigator  */}
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            headerTitleAlign: 'right',
            headerStyle: {
              backgroundColor: '#F4511E',
            
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        >
          
          <Stack.Screen
              name="Inicio"
              component={Inicio}
          />
          {/* 6. Para definir una pantalla se utiliza la etiqueta Stack.Screen y se indica el name y el componente que va a cargar - views/Inicio.js 
                 Se pueden indicar opciones adicionales al screen como el titulo que tendra la pantalla
                 options tambien recibe props del componente, asi que de aqui podemos sacar route que tendra los valores mandados*/}
          <Stack.Screen
              name="Nosotros"
              component={Nosotros}
              options={ ({route}) => ({
                title: route.params.clienteId
              }) }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
