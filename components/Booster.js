import React, {Component} from 'react';
import {View} from 'react-native';

import {CHOCOLATE, CAFFEINE, AGED_CHEESE, PLAYER} from '../images';
import Svg, {Image} from 'react-native-svg';

class Booster extends Component {
  constructor(props) {
    super(props);
  }

  getPoints(name) {
    switch (name) {
      case 'caffeine':
        return 5;
      case 'chocolate':
        return 3;
      case 'agedCheese':
        return 1;
    }
  }

  getImage(name) {
    switch (name) {
      case 'caffeine':
        return CAFFEINE;
      case 'chocolate':
        return CHOCOLATE;
      case 'agedCheese':
        return AGED_CHEESE;
    }
  }

  render() {
    return (
      <View>
        <Image
          href={this.getImage(this.props.name)}
          x={this.props.x}
          y={this.props.y}
          preserveAspectRatio="xMidYMid slice"
        />
      </View>
    );
  }
}

export default Booster;
