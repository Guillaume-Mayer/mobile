import React, {Component} from 'react';
import {Platform, View, Button, StyleSheet, Alert} from 'react-native';
import MapView from 'react-native-maps';
import firebaseApp from '../firebase'

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: -33.4489,
        longitude: -70.6693,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      },
      markers: []
    };
    this.markersRef = firebaseApp.database().ref('markers');
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
      this.setState({region: this.state.region, markers: markers});
    });
  }

  componentWillMount() {
    console.log("COMPONENT WILL MOUNT");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("POSITION OK: " + JSON.stringify(position));
        /*this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          },
          markers: this.state.markers
        });*/
      },
      (error) => {
        console.log("POSITION ERROR: " + JSON.stringify(error));
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.listenForMarkers(this.markersRef);
  }

  componentDidMount() {
    console.log("COMPONENT DID MOUNT");
  }

  addMarker(markersRef, title, desc, lat, lng) {
    var newMarkerRef = markersRef.push();
    newMarkerRef.set({
      title: title,
      description: desc,
      coords: {
        latitude: lat,
        longitude: lng
      }
    });
  }

  addMarkers(markersRef) {
    for (var i = 0; i < 10; i++) {
      this.addMarker(
        markersRef, 
        'test' + i, 
        'This is test ' + i, 
        this.state.region.latitude + (Math.random()*this.state.region.latitudeDelta) - (this.state.region.latitudeDelta/2), 
        this.state.region.longitude + (Math.random()*this.state.region.longitudeDelta) - (this.state.region.longitudeDelta/2)
        );
    }
  }

  onRegionChangeComplete(region) {
    console.log("REGION CHANGE COMPLETE: " + region.latitude + ";" + region.longitude);
  };

  render() {
    console.log("RENDER");
    return (
      <View style={styles.container}> 
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={region => this.setState({region: region, markers: this.state.markers})}
          onRegionChangeComplete={this.onRegionChangeComplete}
          onPress={e => this.addMarker(this.markersRef, 'test', 'tap test', e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude)}
          showsUserLocation={true}
          showsTraffic={true}
          showsMyLocationButton={true}
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
        <Button
          title='Add 10 Markers'
          color='red'
          onPress={() => this.addMarkers(this.markersRef)}/>
      </View>     
    );
  }

}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});