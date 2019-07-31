import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList'
import placeImage from './src/assest/avocado.jpeg'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
//type Props = {};<Props> 
export default class App extends Component{
  state ={
     places:[],
     selectedPlace: null
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
              places: prevState.places.concat({
                key: Math.random(),
                name: placeName,
                image: placeImage})
            }
          })
    }

    placeSelectedHandler = key => {
      this.setState(prevState =>{
        return {
          selectedPlace: prevState.places.find(place => {
            return place.key === key
          })
        };
      })
      // setState run Asincronit
      // this.setState(prevState => {
      //   return{
      //       places: prevState.places.filter(place => {
      //       return place.key !== key;  
      //     })
      //   }
      // })
    }
 render() {
    return (
          <View style={styles.container}>
            <Text style={styles.welcome}>El Cateo</Text>
            <Text style={styles.instructions}>Donde cada fruta es como un hijo para nosotros</Text>
            {/* in order for placeDetail to show something in need to pass 
            placeImage and placeName */}
            <PlaceDetail />
            <PlaceInput onPlaceAdded = {this.placeAddedHandler}/>
            <PlaceList 
             places={this.state.places} 
             onItemSelected = {this.placeSelectedHandler}/>
         </View>    
        
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
