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
  constructor(props) {
    super(props);
  }

  onPressLeft = () => {
    this.props.onPressLeft?.();
  };

  onPressRight = () => {
    this.props.onPressRight?.();
  };

  onPressTop = () => {
    this.props.onPressTop?.();
  };

  onPressBottom = () => {
    this.props.onPressBottom?.();
  };

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={this.onPressTop}>
          <Image source={BTN_UP} style={{width: 48, height: 24}} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={this.onPressLeft}>
            <Image source={BTN_LEFT} style={{width: 24, height: 48}} />
          </TouchableOpacity>
          <View style={{width: 48, height: 24}} />
          <TouchableOpacity onPress={this.onPressRight}>
            <Image source={BTN_RIGHT} style={{width: 24, height: 48}} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={this.onPressBottom}>
          <Image source={BTN_DOWN} style={{width: 48, height: 24}} />
        </TouchableOpacity>
      </View>
    );
  }
}
