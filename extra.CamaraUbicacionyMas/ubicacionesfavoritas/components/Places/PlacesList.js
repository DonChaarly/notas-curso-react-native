import { FlatList } from "react-native";
import PlaceItem from "./PlaceItem";

const PlacesList = ({ places }) => {
  return (
    <FlatList
        data={places} 
        keyExtractor={(item) => item.id }
        renderItem={
            <PlaceItem place={item}/>
        }/>
  );
}

export default PlacesList;

