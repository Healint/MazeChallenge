import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from './assets/Colors';

export default class GameInfo extends Component {
  render() {
    return (
      <View style={{marginTop: 16}}>
        <View style={styles.row}>
          <Text style={styles.nameValue}>Moves left: 12</Text>
          <Text style={styles.nameValue}>Current points: 10</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    marginStart: 24,
    marginEnd: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameValue: {
    fontFamily: 'Asap-Regular',
    fontSize: 16,
    color: Colors.white,
  },
});
