import React, {Component} from 'react';
import {View, WebView, Button} from 'react-native';

export default class ArkhoView extends Component {

  render() {
    return (
        <View style={{flex: 1}}>
          <WebView
            source={{uri: 'https://arkho.tech/'}}
            
          />
        </View>
    );
  }

}
