import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'react-native-firebase';



export default class App extends React.Component {

/*
    writeToDb(){
        firebase.database().ref('testContainer/').set({
            data: 'tjoho'
        });
    }*/


    render() {
    return (
      <View style={styles.container}>
        <Text>Det här är sndfgdfart  bästa terapiapp!</Text>
        {/*<Button onPress={() => this.writeToDb()} title={"TRYCK"}/>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
