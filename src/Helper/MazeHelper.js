import React from 'react';
import {Dimensions} from 'react-native';
import Cell from './Cell';
import MazeGenerator from './MazeGenerator';
import Booster from '../../components/Booster';

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
    this.populateBoostersAndObstacles();
  }

  populateBoostersAndObstacles() {
    let caffeineIndex = this.generateRandomBoosterAt(1, 95, 0, 0);
    this.caffeine = this.cells[caffeineIndex];
    this.caffeine.booster = 'caffeine';

    let chocolateIndex = this.generateRandomBoosterAt(1, 95, caffeineIndex, 0);
    this.chocolate = this.cells[chocolateIndex];
    this.chocolate.booster = 'chocolate';

    let agedCheeseIndex = this.generateRandomBoosterAt(1, 95, caffeineIndex, chocolateIndex);
    this.agedCheese = this.cells[agedCheeseIndex];
    this.agedCheese.booster = 'agedCheese';

    let obs1Index = this.generateRandomBoosterAt(1, 95, caffeineIndex, chocolateIndex, agedCheeseIndex);
    this.obs1 = this.cells[obs1Index];
    this.obs1.person = 'anh';

    let obs2Index = this.generateRandomBoosterAt(1, 95, caffeineIndex, chocolateIndex, agedCheeseIndex, obs1Index);
    this.obs2 = this.cells[obs2Index];
    this.obs2.person = 'yikun';

    let obs3Index = this.generateRandomBoosterAt(1, 95, caffeineIndex, chocolateIndex, agedCheeseIndex, obs1Index, obs2Index);
    this.obs3 = this.cells[obs3Index];
    this.obs3.person = 'jenny';

    let obs4Index = this.generateRandomBoosterAt(1, 95, caffeineIndex, chocolateIndex, agedCheeseIndex, obs1Index, obs2Index, obs3Index);
    this.obs4 = this.cells[obs4Index];
    this.obs4.person = 'nicolas';

    let obs5Index = this.generateRandomBoosterAt(1, 95, caffeineIndex, chocolateIndex, agedCheeseIndex, obs1Index, obs2Index, obs3Index, obs4Index);
    this.obs5 = this.cells[obs5Index];
    this.obs5.person = 'zeeshan';

  }

  generateRandomBoosterAt(min, max, exclude1, exclude2, exclude3, exclude4, exclude5, exclude6, exclude7) {
    let num = Math.floor(Math.random() * max) + min;
    return num === exclude1 ||
      num === exclude2 ||
      num === exclude3 ||
      num === exclude4 ||
      num === exclude5 ||
      num === exclude6 ||
      num === exclude7
      ? this.generateRandomBoosterAt(min, max)
      : num;
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
        this.cells[count].vMargin = this.vMargin / 4;
        count++;
      }
    }
  }
}
