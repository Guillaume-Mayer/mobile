import React, {Component} from 'react';
import {View, WebView, Button} from 'react-native';

export default class ChessView extends Component {

  render() {
    return (
        <View style={{flex: 1}}>
          <WebView
            source={{uri: 'http://gm77.alwaysdata.net/chess/'}}
            style={{marginBottom: 50}}
          />
        </View>
    );
  }

}
