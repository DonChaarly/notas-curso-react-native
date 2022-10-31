
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login/Login';
import MenuPrincipal from './src/components/MenuPrincipal/MenuPrincipal';


const Stack = createStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
              backgroundColor: '#001253',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              fontWeight: 'bold'
          },
          cardStyle: {backgroundColor: "#FD841F"}
          }}
        >
      
        <Stack.Screen
            name="Login"
            component={Login}
            options={ ({navigation, route}) => ({
            hideNavigationBar: true,
            title: "",
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: '#FD841F'}
            }) }
        />
        <Stack.Screen
            name="Menu"
            component={MenuPrincipal}
            options={ ({navigation, route}) => ({
              title: 'Menu',
              headerLeft: () =>(
                null
              )
            }) }
        />
        
      
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
});

export default App;
