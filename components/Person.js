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
