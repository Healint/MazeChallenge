import React, {Component} from 'react';
import {View, Image} from 'react-native';

import {
  PERSON_ANH,
  PERSON_JENNY,
  PERSON_NICOLAS,
  PERSON_YIKUN,
  PERSON_ZEESHAN,
} from '../images';

import {PASS, NOT_PASS, REVERSE_DIRECTIONS, TELEPORT} from './Effects';

export default class Person extends Component {
  render() {
    const {x, y, name} = this.props;

    return (
      <View>
        <Image source={getImage(name)} />
      </View>
    );
  }
}

function getImage(name) {
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

function getEffect(name) {
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
