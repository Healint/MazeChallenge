import React, {Component} from 'react';
import {View} from 'react-native';
import Svg, {Image} from 'react-native-svg';

import {
  PERSON_ANH,
  PERSON_JENNY,
  PERSON_NICOLAS,
  PERSON_YIKUN,
  PERSON_ZEESHAN,
} from '../images';

import {PASS, NOT_PASS, REVERSE_DIRECTIONS, TELEPORT} from '../Effects';

export default class Person extends Component {
  constructor(props) {
    super(props);
  }

  getImage(name) {
    switch (name) {
      case 'zeeshan':
        return PERSON_ZEESHAN;
      case 'nicolas':
        return PERSON_NICOLAS;
      case 'jenny':
        return PERSON_JENNY;
      case 'yikun':
        return PERSON_YIKUN;
      case 'anh':
        return PERSON_ANH;
    }
  }

  getEffect(name) {
    switch (name) {
      case 'zeeshan':
        return NOT_PASS;
      case 'nicolas':
        return PASS;
      case 'jenny':
        return PASS;
      case 'yikun':
        return TELEPORT;
      case 'anh':
        return REVERSE_DIRECTIONS;
    }
  }

  render() {
    return (
      <View>
        <Image
          href={this.getImage(this.props.name)}
          width="25"
          height="25"
          x={this.props.x}
          y={this.props.y}
          preserveAspectRatio="xMidYMid slice"
        />
      </View>
    );
  }
}
