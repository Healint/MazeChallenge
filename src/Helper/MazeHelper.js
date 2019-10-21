import React from 'react';
import {Dimensions} from 'react-native';
import Cell from './Cell';
import MazeGenerator from './MazeGenerator';

export default class MazeHelper {
  rows = 10;
  cols = 10;
  cells = [];
  cellMaze = [[]];
  cellSize;
  hMargin;
  vMargin;
  deviceHeight;
  deviceWidth;

  constructor() {
    this.create2DArray();
    this.initValues();
    this.configCells();
    this.target = this.cells[this.cells.length - 1];
    this.target.target = true;
  }

  create2DArray() {
    for (let i = 0; i < this.cols; i++) {
      this.cellMaze[i] = [];
      for (let j = 0; j < this.rows; j++) {
        const cell = new Cell(i, j);
        this.cells.push(cell);
        this.cellMaze[i].push(cell);
      }
    }
  }

  initValues() {
    this.deviceHeight = Dimensions.get('window').height;
    this.deviceWidth = Dimensions.get('window').width;

    if (this.deviceWidth / this.deviceHeight < this.cols / this.rows) {
      this.cellSize = this.deviceWidth / (this.cols + 1);
    } else {
      this.cellSize = this.deviceHeight / (this.rows + 1);
    }
    this.hMargin = (this.deviceWidth - this.cols * this.cellSize) / 2;
    this.vMargin = (this.deviceHeight - this.rows * this.cellSize) / 2;
  }

  configCells() {
    let mazeGenerator = new MazeGenerator();
    let maze = mazeGenerator.createMaze(this.rows, this.cols);
    let count = 0;
    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[i].length; j++) {
        this.cells[count].topWall = maze[i][j][0] === 0;
        if (!this.cells[count].topWall) {
          this.cells[count].topNeighbour = this.cellMaze[i - 1][j];
        }
        this.cells[count].rightWall = maze[i][j][1] === 0;
        if (!this.cells[count].rightWall) {
          this.cells[count].rightNeighbour = this.cellMaze[i][j + 1];
        }
        this.cells[count].bottomWall = maze[i][j][2] === 0;
        if (!this.cells[count].bottomWall) {
          this.cells[count].bottomNeighbour = this.cellMaze[i + 1][j];
        }
        this.cells[count].leftWall = maze[i][j][3] === 0;
        if (!this.cells[count].leftWall) {
          this.cells[count].leftNeighbour = this.cellMaze[i][j - 1];
        }
        this.cells[count].size = this.cellSize;
        this.cells[count].hMargin = this.hMargin;
        this.cells[count].vMargin = this.vMargin / 2;
        count++;
      }
    }
  }
}
