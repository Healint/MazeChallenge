import React, {Component} from 'react';
import {View, Image} from 'react-native';

import {CHOCOLATE, CAFFEINE, AGED_CHEESE} from '../images';

const Booster = ({x, y, name}) => {
  const image = getImage(name);
  const points = getPoints(name);

  return (
    <View>
      <Image
        source={getImage(name)}
        style={{
          position: 'absolute',
          left: x,
          top: y,
        }}
      />
    </View>
  );
};

function getImage(name) {
  switch (name) {
    case 'caffeine':
      return CAFFEINE;
    case 'chocolate':
      return CHOCOLATE;
    case 'agedCheese':
      return AGED_CHEESE;
  }
}

function getPoints(name) {
  switch (name) {
    case 'caffeine':
      return 5;
    case 'chocolate':
      return 3;
    case 'agedCheese':
      return 1;
  }
}

export default Booster;
