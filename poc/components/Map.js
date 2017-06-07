import React, {Component} from 'react';
import {Platform, View, Button, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import firebaseApp from '../firebase'

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.markersRef = firebaseApp.database().ref('markers');
    this.state = {
      markers: []
    };
  }

  listenForMarkers(markersRef) {
    markersRef.on('value', (snap) => {
      var markers = [];
      snap.forEach((child) => {
        markers.push({
          key: child.key,
          title: child.val().title,
          description: child.val().description,
          latlng: {
            latitude: child.child('coords').val().latitude,
            longitude: child.child('coords').val().longitude
          }
        });
      });
      this.setState({markers: markers});
    });
  }

  componentDidMount() {
    this.listenForMarkers(this.markersRef);
  }

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