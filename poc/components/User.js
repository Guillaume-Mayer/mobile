import React, {Component} from 'react';
import {Text} from 'react-native';

export default class User extends Component {

  render() {
    return (
        <Text>{this.props.name}</Text>
    );
  }

}
