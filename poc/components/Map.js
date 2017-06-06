import React, {Component} from 'react';
import {Platform, View, Button, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends Component {

  render() {
    return (
      <View style={styles.container}> 
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -33.4489,
            longitude: -70.6693,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
        />
        {Platform.OS === 'android' ?
        <Button
          title='Menu'
          color='green'
          onPress={this.props.onButtonPress}/> : null
        }
      </View>     
    );
  }

}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'flex-start',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});