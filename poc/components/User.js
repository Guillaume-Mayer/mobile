import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';

export default class User extends Component {

  render() {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image style={{width: 30, height: 30}} source={require('../resources/images/Guillaume.png')}></Image>
          <Text style={{fontSize: 20}}>{this.props.name}</Text>
        </View>
    );
  }

}
