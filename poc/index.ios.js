import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import UserList from './components/UserList';

export default class poc extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 20}}/>
        <UserList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('poc', () => poc);
