import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button} from "react-native"

class PlaceInput extends Component {
    state ={
        placeName:''
      }

   placeNameChangeHandler=(event)=> {
        //alert(event); // out put event
        this.setState({
          placeName: event
        })
    } 

    //this is the method that lifted the state
    placeSubmitHandler=()=>{
        if(this.state.placeName.trim() === ""){
            return;
          }
        // send the state to the father
            this.props.onPlaceAdded(this.state.placeName);
    }
    render() {
        return(
            <View style={styles.inputContainter}>
              <TextInput 
            // style={{width:300, borderColor:"black", borderWidth:1}}
                style={styles.placeInput}
                placeholder= "Password"
                value={this.state.placeName} 
                onChangeText={this.placeNameChangeHandler}/>
             <Button 
                style={styles.placeButton}
                title="Add"
                // pass the information to the father component
                //Option 1.
                //inline error function to lift the state
                //onPress={ () => this.onPlaceAdded(this.state.placeName)}
                //Option 2. more elegant
                 onPress={this.placeSubmitHandler}/>
          </View>
        )
    }

}

const styles = StyleSheet.create({
     inputContainter:{
        // flex:1,
         flexDirection:"row",
         justifyContent:"space-between"
     
       },
       placeInput:{
         width:"70%",
        //  borderColor:"black", 
        //  borderWidth:1
       },
       placeButton:{
         width:"30%"
       },
})
   


export default PlaceInput