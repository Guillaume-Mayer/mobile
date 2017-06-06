import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  TabBarIOS,
} from 'react-native';
import UserList from './components/UserList';
import Map from './components/Map';

export default class poc extends Component {
  state = {
    selectedTab: 'users'
  };
  render() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('poc', () => poc);
