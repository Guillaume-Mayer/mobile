import React, { Component } from 'react';
import {
  AppRegistry,
  DrawerLayoutAndroid,
  View,
  Text,
} from 'react-native';

import UserList from './components/UserList';
import Map from './components/Map';

export default class poc extends Component {
  constructor(props) {
    super(props);
    this.showMenu = this.showMenu.bind(this);
  }

  state = {
    selectedMenu: 'users'
  };

  showMenu = () => {
    this.menu.openDrawer();
  }

  render() {
    const navigationView = () => {
      return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Text 
            style={{margin: 10, fontSize: 15, textAlign: 'left', color: this.state.selectedMenu === 'users' ? 'red' : 'gray'}}
            onPress={() => {
              this.setState({selectedMenu: 'users'});
              this.menu.closeDrawer();
            }}>
            Usuarios
          </Text>
          <Text 
            style={{margin: 10, fontSize: 15, textAlign: 'left', color: this.state.selectedMenu === 'map' ? 'red' : 'gray'}}
            onPress={() => {
              this.setState({selectedMenu: 'map'});
              this.menu.closeDrawer();
            }}>
            Mapa
          </Text>
        </View>
      );
    };
    return (
      <DrawerLayoutAndroid
        ref={(menu) => { this.menu = menu; }}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView()}>
        {this.state.selectedMenu === 'users' ? <UserList/> : <Map onButtonPress={this.showMenu}/>}
      </DrawerLayoutAndroid>
    );
  }
}

AppRegistry.registerComponent('poc', () => poc);
