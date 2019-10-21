import React from 'react';
import Booster from '../../components/Booster';

export default class Cell {
  topWall = true;
  leftWall = true;
  rightWall = true;
  bottomWall = true;
  col = -1;
  row = -1;
  size;
  hMargin;
  vMargin;
  topNeighbour;
  bottomNeighbour;
  leftNeighbour;
  rightNeighbour;
  target = false;
  booster;
  person;

  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  topLeft() {
    return {
      x: this.row * this.size + this.hMargin,
      y: this.col * this.size + this.vMargin,
    };
  }

  bottomLeft() {
    return {
      x: this.row * this.size + this.hMargin,
      y: (this.col + 1) * this.size + this.vMargin,
    };
  }

  topRight() {
    return {
      x: (this.row + 1) * this.size + this.hMargin,
      y: this.col * this.size + this.vMargin,
    };
  }

  bottomRight() {
    return {
      x: (this.row + 1) * this.size + this.hMargin,
      y: (this.col + 1) * this.size + this.vMargin,
    };
  }
}
