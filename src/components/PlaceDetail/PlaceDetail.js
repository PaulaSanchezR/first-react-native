import React from 'react';
import { Modal, View, Image, Text, Buttom } from 'react-native'


const placeDetail = props => {
    // let modalContent  = null;
    // if(props.selectedPlace){
    //     modalContent = (
    //     <View>
    //         <Image source={props.selectedPlace.placeImage}/>
    //         <Text>{props.selectedPlace.placeName}</Text>
    //     </View>    
    //    )
    // }
return(
    <Modal>
          <View>
                 {/* {modalContent} */}
                   <View>
                       <Buttom   />
                       <Buttom  />
                   </View>
             </View>
         </Modal>
)
}
 
export default placeDetail;