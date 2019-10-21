import React, {Component} from 'react';
import {View, Image} from 'react-native';

import {PLAYER} from '../images';

const Player = ({x, y}) => {
  return (
    <View>
      <Image source={PLAYER} />
    </View>
  );
};

export default Player;
