import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from './assets/Colors';

export default class GameTitle extends Component {
  render() {
    return (
      <View style={styles.column}>
        <Text style={styles.title}>The Haze</Text>
        <Text style={styles.subtitle}>(The Healint Maze)</Text>
        <Text style={styles.tagline}>Get home safely!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Asap-Bold',
    fontSize: 24,
    color: Colors.white,
  },
  subtitle: {
    fontFamily: 'Asap-Regular',
    fontSize: 14,
    color: Colors.white,
  },
  tagline: {
    marginTop: 12,
    fontFamily: 'Asap-MediumItalic',
    fontSize: 16,
    color: Colors.dark_yellow,
  },
});
