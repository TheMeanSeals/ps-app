import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import firebase from 'react-native-firebase';
import PsychologistList from './src/components/PsychologistList';

var root = firebase.database().ref();
var dataRef = root.child('psychologists');

export default class App extends React.Component {
    constructor(){
      super();
      this.state = {text: '', psychologists: []};
    }

    componentDidMount(){
      let self = this;
      dataRef.on('value', function(snapshot){
        var newValuesInDb = [];
        snapshot.forEach(item => {
          newValuesInDb.push(item.val());
        });
        self.setState({text: "", psychologists: newValuesInDb});
      });


    }

    writeToDb(){
        firebase.database().ref('pontusTestContainer/').push({
            text: this.state.text
        });
        let newState = this.state;
        newState.text = "";
        this.setState(newState);
    }


    render() {
    return (
      <View style={styles.container}>
        <PsychologistList psychologists={this.state.psychologists}/>
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
