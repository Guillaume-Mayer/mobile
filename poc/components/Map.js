import React, {Component} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: -33.4489,
            longitude: -70.6693,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
        />
        </View>     
    );
  }

}
