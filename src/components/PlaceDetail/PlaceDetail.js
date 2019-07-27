import React from 'react';
import { Modal, View, Image, Text, Buttom } from 'react-native'
const placeDetail = props => (

    <Modal>
        <View>
            <Image source={props.selectedPlace.placeImage}/>
            <Text>{props.selectedPlace.placeName}</Text>
              <View>
                  <Buttom />
                  <Buttom />
              </View>
        </View>
    </Modal>
);

export default placeDetail;
