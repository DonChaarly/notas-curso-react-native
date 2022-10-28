import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../../constants/color';
import ImagePicker from './ImagePicker';

const PlaceForm = () => {

  const [enteredTitle, setEnteredTitle] = useState('');

  function changeTitleHandler(enteredText){
    setEnteredTitle(enteredText);
  }

  return (
    <ScrollView style={style.form}>
      <View>
        <Text style={style.label}>Title</Text>
        <TextInput 
          style={style.input}
          onChangeText={changeTitleHandler} 
          value={enteredTitle}
        />

      </View>
      <ImagePicker/>
    </ScrollView>
  )
}

export default PlaceForm;

const style = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4, 
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100
  }

})
