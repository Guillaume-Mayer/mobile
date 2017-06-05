import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { Constants, MapView } from 'expo';

export default class MapScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  state = {
    mapRegion: { latitude: 42.3845, longitude: 2.6129, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
        />
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will run slightly slower but
          you have access to useful development tools. {learnMoreButton}.
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    Linking.openURL(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    Linking.openURL(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  map:{
    flex:1
  },
});