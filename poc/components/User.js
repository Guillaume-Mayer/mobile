import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';

export default class User extends Component {

  getImageUri(name) {
    if (name === 'Guillaume') {
      return 'https://firebasestorage.googleapis.com/v0/b/reactnativearkhotest.appspot.com/o/guillaume.png?alt=media&token=d6cfc1c4-00ce-487b-a37f-77635fd74c3f';
    } else if (name === 'Andres') {
      return 'https://firebasestorage.googleapis.com/v0/b/reactnativearkhotest.appspot.com/o/andres.png?alt=media&token=a919f7b0-7c5a-466a-ae6c-4276ea508f76';
    } else if (name === 'Jimmy') {
      return 'https://firebasestorage.googleapis.com/v0/b/reactnativearkhotest.appspot.com/o/jimmy.png?alt=media&token=21abae5e-72aa-439a-af4e-b7e463709bf1';
    } else if (name === 'Hector') {
      return 'https://firebasestorage.googleapis.com/v0/b/reactnativearkhotest.appspot.com/o/hector.png?alt=media&token=77bcc614-b3c6-4adb-9df9-544895708c1e';
    } else if (name === 'Marcelo') {
      return 'https://firebasestorage.googleapis.com/v0/b/reactnativearkhotest.appspot.com/o/marcelo.png?alt=media&token=89a6eeda-d368-4c4a-a8f8-a0255cd415b2';
    } else {
      return 'https://firebasestorage.googleapis.com/v0/b/reactnativearkhotest.appspot.com/o/raul.png?alt=media&token=77c57ae9-8994-4be4-9f74-02acab1a1289';
    }
  }

  render() {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image style={{width: 30, height: 30}} source={{uri: this.getImageUri(this.props.name)}}></Image>
          <Text style={{fontSize: 20}}>{this.props.name}</Text>
        </View>
    );
  }

}
