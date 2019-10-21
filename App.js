/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Svg, {Circle, Line, Rect, Image} from 'react-native-svg';
import AxisPad from 'react-native-axis-pad';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {Colors} from './assets/Colors';

import MazeHelper from './src/Helper/MazeHelper';
import Cell from './src/Helper/Cell';
import {maximumDepthError} from 'react-native/Libraries/Utilities/ReactNativeTestTools';
import GameInfo from './GameInfo';
import DPad from './components/DPad';
import GameTitle from './GameTitle';

import {PLAYER} from './components/Player';

const maze = new MazeHelper();

class App extends Component {
  renderTopWall = cell => {
    return cell.topWall ? (
      <Line
        x1={cell.topLeft().x}
        y1={cell.topLeft().y}
        x2={cell.topRight().x}
        y2={cell.topRight().y}
        stroke="white"
        strokeWidth="2"
      />
    ) : null;
  };

  renderLeftWall = cell => {
    return cell.leftWall ? (
      <Line
        x1={cell.topLeft().x}
        y1={cell.topLeft().y}
        x2={cell.bottomLeft().x}
        y2={cell.bottomLeft().y}
        stroke="white"
        strokeWidth="2"
      />
    ) : null;
  };

  renderBottomWall = cell => {
    return cell.bottomWall ? (
      <Line
        x1={cell.bottomLeft().x}
        y1={cell.bottomLeft().y}
        x2={cell.bottomRight().x}
        y2={cell.bottomRight().y}
        stroke="white"
        strokeWidth="2"
      />
    ) : null;
  };

  renderRightWall = cell => {
    return cell.rightWall ? (
      <Line
        x1={cell.topRight().x}
        y1={cell.topRight().y}
        x2={cell.bottomRight().x}
        y2={cell.bottomRight().y}
        stroke="white"
        strokeWidth="2"
      />
    ) : null;
  };

  renderAgent = agent => {
    return (
      <Rect
        x={agent.topLeft().x}
        y={agent.topLeft().y}
        width={maze.cellSize}
        height={maze.cellSize}
        fill="rgb(0,0,255)"
      />
    );
  };

  renderCell(cell) {
    return [
      this.renderTopWall(cell),
      this.renderBottomWall(cell),
      this.renderLeftWall(cell),
      this.renderRightWall(cell),
    ];
  }

  renderTarget = target => {
    return (
      <Rect
        x={target.topLeft().x}
        y={target.topLeft().y}
        width={maze.cellSize}
        height={maze.cellSize}
        fill="rgb(0,255,0)"
      />
    );
  };

  state = {
    cell: maze.cells[0],
    rightIndex: 1,
    topIndex: 0,
    leftIndex: 0,
    bottomIndex: maze.cols,
  };

  onPressLeft() {
    if (this.state.cell.leftNeighbour) {
      this.setState({
        cell: this.state.cell.leftNeighbour,
      });
    }
  }

  onPressRight() {
    if (this.state.cell.rightNeighbour) {
      this.setState({
        cell: this.state.cell.rightNeighbour,
      });
    }
  }

  onPressTop() {
    if (this.state.cell.topNeighbour) {
      this.setState({
        cell: this.state.cell.topNeighbour,
      });
    }
  }

  onPressBottom() {
    if (this.state.cell.bottomNeighbour) {
      this.setState({
        cell: this.state.cell.bottomNeighbour,
      });
    }
  }

  render() {
    if (this.state && this.state.cell.target) {
      alert('Finish');
    }
    return (
      <View style={styles.body}>
        <Svg height={maze.deviceHeight} width={maze.deviceWidth}>
          <GameInfo />
          {maze.cells.map(cell => this.renderCell(cell))}
          {this.renderAgent(this.state ? this.state.cell : maze.cells[0])}
          {this.renderTarget(maze.target)}
          <View style={styles.bottomBar}>
            <GameTitle />
            <DPad />
          </View>
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  leftButtonStyle: {
    position: 'absolute',
    height: '100',
    width: '50',
    left: 0,
    bottom: 0,
  },
  maze: {
    marginStart: 24,
    marginEnd: 24,
    height: 286,
    backgroundColor: Colors.white,
  },
  bottomBar: {
    top: maze.deviceHeight / 1.75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  body: {
    flexDirection: 'column',
    backgroundColor: Colors.turquoise,
  },
});

export default App;
