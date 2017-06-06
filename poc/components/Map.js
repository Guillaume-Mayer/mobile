import React, {Component} from 'react';
import {Platform, View, Button, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends Component {

  state = {
    markers: [
      {
        key: 1,
        latlng:{latitude: -33.4489,longitude: -70.6693},
        title: 'Santiago',
        description: 'Donde Arkhotech'
      },
      {
        key: 2,
        latlng:{latitude: -33.3990,longitude: -70.5573},
        title: 'Las Condes',
        description: 'Donde Guillaume'
      },
      {
        key: 3,
        latlng:{latitude: -33.5209,longitude: -70.7631},
        title: 'Maipú',
        description: 'Donde Javier'
      },
      {
        key: 4,
        latlng:{latitude: -33.4719,longitude: -70.5628},
        title: 'Peñalolén',
        description: 'Donde Raúl'
      },
      ]
  };

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
        >
        {this.state.markers.map(marker => (
          <MapView.Marker
            key={marker.key}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))}
        </MapView>
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