import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'


export default class Viewer extends React.Component {

  static navigationOptions = {
    title: 'Person Viewer',
    headerStyle: {
      backgroundColor: '#212121',
    },
    headerTitleStyle: {
      color: '#fff'
    }
  };

  constructor(props) {
    super(props)
    }

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'NO-NAME');
    //Check to make sure params were sent
    console.log(name)
    //Display the String that was passed to the route
    return (
      <View style={styles.container}>
        <Text style={styles.size}>{name}</Text>
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
    fontSize: 150
  }
});