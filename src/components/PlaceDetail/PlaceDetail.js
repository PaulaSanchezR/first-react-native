import React from 'react';
import { Modal, View, Image, Text, Buttom } from 'react-native'

class PlaceDetail extends Component {
    render(){
        // let modalContent  = null;
        // if(props.selectedPlace){
        //     modalContent = (
        //     <View>
        //         <Image source={props.selectedPlace.placeImage}/>
        //         <Text>{props.selectedPlace.placeName}</Text>
        //     </View>    
        //    )
        // }
    return (
     <Modal>
        <View>
           {/* {modalContent} */}
              <View>
                  <Buttom title="Delete"  />
                  <Buttom title="Close" />
              </View>
        </View>
    </Modal>
    )
    }
        
    
}
// const placeDetail = props => {
//     let modalContent  = null;
//         if(props.selectedPlace){
//             modalContent = (
//             <View>
//                 <Image source={props.selectedPlace.placeImage}/>
//                 <Text>{props.selectedPlace.placeName}</Text>
//             </View>    
//            )
//         }
//     return (
//      <Modal>
//         <View>
//            {modalContent}
//               <View>
//                   <Buttom title="Delete"  />
//                   <Buttom title="Close" />
//               </View>
//         </View>
//     </Modal>
//     )
  
};

export default placeDetail;
