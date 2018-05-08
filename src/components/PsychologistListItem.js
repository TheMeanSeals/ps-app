/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

const PsychologistListItem = (props) => (
  <TouchableOpacity>
    <View style={styles.listItem}>
      <Text>{props.psychologist}</Text>
    </View>
  </TouchableOpacity>
);

export default PsychologistListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeImage: {
      marginRight: 8,
      height: 40,
      width: 40,
      borderRadius: 20
  }
});
