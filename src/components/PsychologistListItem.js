/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default class PsychologistListItem extends React.Component {
  render(){
    return (
      <TouchableOpacity>
        <View style={styles.listItem}>
          <View style={styles.leftView}>
            <Image resizeMode="cover" source={require('../../content/images/josefin.jpg')} style={styles.placeImage} />
            <Text style={styles.psychologistName}>{this.props.psychologist.name}</Text>
          </View>
          <Text>{this.props.psychologist.rating}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#e6ffe6',
    padding: 4,
    margin: 4,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  container: {
    flex: 1,
  },
  placeImage: {
      marginRight: 8,
      height: 40,
      width: 40,
      borderRadius: 20
  },
  psychologistName: {
    fontSize: 20
  }
});
