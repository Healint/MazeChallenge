import React, {Component} from 'react';
import {View} from 'react-native';
import Svg, {Image} from 'react-native-svg';

import {
  IC_ANH,
  IC_JENNY,
  IC_NICOLAS,
  IC_YIKUN,
  IC_ZEESHAN,
} from '../images';

export default class Person extends Component {
  constructor(props) {
    super(props);
  }

  getImage(name) {
    switch (name) {
      case 'zeeshan':
        return IC_ZEESHAN;
      case 'nicolas':
        return IC_NICOLAS;
      case 'jenny':
        return IC_JENNY;
      case 'yikun':
        return IC_YIKUN;
      case 'anh':
        return IC_ANH;
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
