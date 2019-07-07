import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import ListItem from './src/components/Listitem/Listitem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Esto va ser lo mejor del mundo,\n' +
    'Ya lo veran',
});

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
 

  render() {
    const placesOutput= this.state.places.map((place,i) => (
      // this is the way without components <Text key={i}>{place}</Text>
      <ListItem kew={i} placeName={place}></ListItem>
    ))
    return (
    
      <View style={styles.container}>
            <Text style={styles.welcome}>El Cateo</Text>
            <Text style={styles.instructions}>Donde cada fruta es como un hijo para nosotros</Text>
            <PlaceInput onPlaceAdded = {this.placeAddedHandler}/>
          <View style={styles.ListContainer}>{placesOutput}</View>
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
    //flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  
  ListContainer:{
    width:"100%"
  }
});
