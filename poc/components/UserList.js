import React, {Component} from 'react';
import {View, ListView, Text} from 'react-native';

export default class UserList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      users: ds.cloneWithRows([
        'Guillaume', 'Raul', 'Andres', 'Hector', 'Marcelo', 'Jimmy'
      ])
    };
  }

  render() {
    return (
        <View style={{flex: 1}}>
          <ListView
            dataSource={this.state.users}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
        </View>
    );
  }

}
