import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import Inicio from './views/Inicio';
import NuevoCliente from './views/NuevoCliente';
import DetallesCliente from './views/DetallesCliente';

//1. React native paper es un framework dedicado al UI como lo seria bootstrap
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Definir el tema
/*2. se define un tema con ayuda del DefaultTheme
     Dentro de este objeto theme se pueden definir nuestros colores personalizados para el tema,
     siempre se tiene que hacer una copia del DefaultTheme.colors
*/
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774F2',
    accent: '#0655BF'
  }
}



const App  = () => {
  return (
    <>
    {/* 3.  Todo los functionalComponents que tengan estos componentes deben tener rodeando la etiqueta PaperProvider, 
            es mejor colocar esta etiqueta en el App.js*/}
    <PaperProvider>
        <NavigationContainer>
          {/* 3. Para usar las propiedades del objeto theme, estas se colocan como valores de propiedades StyleSheet -> NuevoCliente.js */}
            <Stack.Navigator
              initialRouteName="Inicio"
              screenOptions={{
                headerStyle: {
                  backgroundColor: theme.colors.primary
                },
                headerTintColor: theme.colors.surface, 
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}
            >
                <Stack.Screen
                  name="Inicio"
                  component={Inicio}
                />
                <Stack.Screen
                  name="NuevoCliente"
                  component={NuevoCliente}
                  options={{
                    title: "Nuevo Cliente"
                  }}
                />
                <Stack.Screen
                  name="DetallesCliente"
                  component={DetallesCliente}
                  options={{
                    title: "Detalles Cliente"
                  }}
                />
            </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({
  
  
});

export default App;
