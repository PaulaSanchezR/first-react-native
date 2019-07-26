import React from 'react'
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../Listitem/Listitem'

// using function
const placeList = props => {
   
        // this is the way without components <Text key={i}>{place}</Text>
       
      return(
         <FlatList 
           style={styles.ListContainer}
           data= {props.places} 
           renderItem = {(info) => (
                <ListItem 
                 placeName={info.item.name} 
                 placeImage={info.item.image}
                 onItemPressed={() => props.onItemDeleted(info.item.key)}
                //onItemPressed={() => alert('Item pressed - ID: ' + i)} 
                />
           )}
         />
    );
}

const styles = StyleSheet.create({
    ListContainer:{
        width:"75%"
      }
});

export default placeList;