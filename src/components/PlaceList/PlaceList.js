import React from 'react'
import { View, StyleSheet } from 'react-native';
import ListItem from '../Listitem/Listitem'

// using function
const placeList = props => {
    const placesOutput= props.places.map((place,i) => (
        // this is the way without components <Text key={i}>{place}</Text>
        <ListItem 
            key={i} 
            placeName={place} 
            onItemPressed={() => props.onItemDeleted(i)}
            //onItemPressed={() => alert('Item pressed - ID: ' + i)} 
        />
      ))
    return(
         <View style={styles.ListContainer}>{placesOutput}</View>
    );
}

const styles = StyleSheet.create({
    ListContainer:{
        width:"75%"
      }
});

export default placeList;