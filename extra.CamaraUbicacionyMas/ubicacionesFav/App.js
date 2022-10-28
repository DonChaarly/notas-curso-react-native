import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/Ui/IconButton';
import { Colors } from './constants/color';

const Stack = createStackNavigator();

const App = () => {


  return (
    <>
    <StatusBar style="dark"/>
    <NavigationContainer
      initialRouteName="AllPlaces">
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {backgroundColor: Colors.primary500},
          headerTintColor: Colors.gray700,
          cardStyle: {backgroundColor: Colors.gray700}
    }}>
        <Stack.Screen 
          name="AllPlaces" 
          component={AllPlaces}
          options={({navigation}) => ({
            title: 'Your Favorite', 
            headerRight: ({tintColor}) => (
              <IconButton 
                icon={"add"} 
                size={24} 
                color={tintColor} 
                onPress={() =>  navigation.navigate('AddPlace')}/>
            ),
          })}
          />
        <Stack.Screen name="AddPlace" component={AddPlace}/>
      </Stack.Navigator>
      
    </NavigationContainer>
    
    </>
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
