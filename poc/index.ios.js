import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  TabBarIOS,
} from 'react-native';

import UserList from './components/UserList';
import Map from './components/Map';
import ChessView from './components/ChessView';

export default class poc extends Component {
  state = {
    selectedTab: 'map'
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 20}}/>
        <TabBarIOS>
          <TabBarIOS.Item
            title='Mapa'
            selected={this.state.selectedTab === 'map'}
            onPress={()=>{
              this.setState({selectedTab: 'map'});
            }}>
            <Map/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title='Usuarios'
            selected={this.state.selectedTab === 'users'}
            onPress={()=>{
              this.setState({selectedTab: 'users'});
            }}>
            <UserList/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title='Chess'
            selected={this.state.selectedTab === 'chess'}
            onPress={()=>{
              this.setState({selectedTab: 'chess'});
            }}>
            <ChessView/>
          </TabBarIOS.Item>
        </TabBarIOS>
     </View>
    );
  }
}

AppRegistry.registerComponent('poc', () => poc);
