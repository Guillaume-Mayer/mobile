import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  TabBarIOS,
} from 'react-native';

import UserList from './components/UserList';
import Map from './components/Map';

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA_8o8GD_QUrHfsvpkTlgEWDoOwWQshanE",
    authDomain: "reactnativearkhotest.firebaseapp.com",
    databaseURL: "https://reactnativearkhotest.firebaseio.com",
    projectId: "reactnativearkhotest",
    storageBucket: "reactnativearkhotest.appspot.com",
    messagingSenderId: "503266762160"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class poc extends Component {
  state = {
    selectedTab: 'users'
  };
  render() {
    var fbase = firebaseApp.database();
    fbase.ref('users/gmayer').once('value').then((item) =>{
      console.log("FIREBASE: " + item.val().name);
      console.log("FIREBASE: " + item.val().age);
    });
    return (
      <View style={{flex: 1}}>
        <View style={{height: 20}}/>
        <TabBarIOS>
          <TabBarIOS.Item
            title='Usuarios'
            selected={this.state.selectedTab === 'users'}
            onPress={()=>{
              this.setState({selectedTab: 'users'});
            }}>
            <UserList/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title='Mapa'
            selected={this.state.selectedTab === 'map'}
            onPress={()=>{
              this.setState({selectedTab: 'map'});
            }}>
            <Map/>
          </TabBarIOS.Item>
        </TabBarIOS>
     </View>
    );
  }
}

AppRegistry.registerComponent('poc', () => poc);
