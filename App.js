import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, AppRegistry } from 'react-native';
import {createStackNavigator} from 'react-navigation'

import Viewer from './components/Viewer'

class App extends React.Component {

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
    backgroundColor: '#212121',
    },
    headerTitleStyle: {
    color: '#fff'
    }
    };

  constructor(props) {
    super(props)
    this.state = {
      data: [{ name: 'Dave' }, { name: 'Bob' }],
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.state.data[1])
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.data}
          keyExtractor={item => item.name}
          renderItem={({ item }) => 
            <View>
              <TouchableOpacity onPress={() => navigate('Viewer', {name: item.name })} >
                <Text style={styles.size}>{item.name}</Text>
              </TouchableOpacity>
            </View> }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  size: {
    fontSize: 60
  }
});

const myscreens= createStackNavigator(
  {
    Home: { screen: App },
    Viewer: { screen: Viewer },
  },
  {
    initialRouteName: 'Home',
  }
);

  export default myscreens;