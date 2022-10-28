import { Image, Pressable, StyleSheet, View } from 'react-native';

const PlaceItem = ( { place } ) => {

  return (
    <Pressable onPress={onSelect}>
        <Image source={{uri: place.imageUri }}/>
        <View>
            <Text>{place.title}</Text>
            <Text>{place.address} </Text>
        </View>
    </Pressable>
  )
}

export default PlaceItem;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fallbackText: {
    fontSize: 16,

  }
})