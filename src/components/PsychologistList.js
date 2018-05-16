import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PsychologistListItem from './PsychologistListItem';

export default class PsychologistList extends React.Component {


    render() {
      const psychologistsOutput = this.props.psychologists.map((psychologist, index) => (
        <PsychologistListItem
          psychologist={psychologist}
          key={index}
         />
      ))
      return (
        <ScrollView style={styles.container}>
          {psychologistsOutput}
        </ScrollView>

      );
    }
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
});
