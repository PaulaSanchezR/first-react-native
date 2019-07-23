import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView,View} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList'

//type Props = {};<Props> 
export default class App extends Component{
  state ={
     places:[]
  }
//method to handel change properti asign a error function
// this will refer to the class
//if I use a regular function placeNameChangeHandler { this } 
    placeNameChangeHandler=(event)=> {
      //alert(event); // out put event
      this.setState({
        placeName: event
      })
    } 

    placeAddedHandler= placeName => {
       // update the state
          this.setState(prevState => {
            return {
              places: prevState.places.concat(placeName)
            }
          })
    }

    placeDeletedHandler = index => {
      // setState run Asincronit
      this.setState(prevState => {
        return{
          // array that match the filter criteria
          // return a new array with all the elements for the filter
          // criteria 
          places: prevState.places.filter( (place, i) => {
            // return true of false
            // true are the desire item on the array 
            // false is not part of the new array
            return i !== index;  // we return true
              // we should return false for the id we get 
          })
        }
      })
    }
 render() {
    return (
      
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.welcome}>El Cateo</Text>
            <Text style={styles.instructions}>Donde cada fruta es como un hijo para nosotros</Text>
            <PlaceInput onPlaceAdded = {this.placeAddedHandler}/>
            <PlaceList 
             places={this.state.places} 
             onItemDeleted = {this.placeDeletedHandler}/>
         </View>    
      </ScrollView>
      
    );
  }
}
      //flow the images
      //flexbox main axis cross axis 
      // Flesdirection:'column',
      //flex:1,  how much the elemnt show strech out
      //justifyContent:'flex-start', space-between === distribute the availabe space
      //alignItems:'center'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  } 
});
