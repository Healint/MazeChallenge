import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {BTN_DOWN, BTN_UP, BTN_LEFT, BTN_RIGHT} from '../images';

export default class DPad extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <View>
          <Image source={BTN_UP} style={{width: 48, height: 24}} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image source={BTN_LEFT} style={{width: 24, height: 48}} />
          </View>
          <View style={{width: 48, height: 24}} />
          <View>
            <Image source={BTN_RIGHT} style={{width: 24, height: 48}} />
          </View>
        </View>
        <View>
          <Image source={BTN_DOWN} style={{width: 48, height: 24}} />
        </View>
      </View>
    );
  }
}
