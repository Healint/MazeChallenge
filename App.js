/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Svg, {Circle, Line, Rect} from 'react-native-svg';
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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MazeHelper from './src/Helper/MazeHelper';
import Cell from './src/Helper/Cell';
import {maximumDepthError} from 'react-native/Libraries/Utilities/ReactNativeTestTools';

const maze = new MazeHelper();

class App extends Component {
  renderTopWall = cell => {
    return cell.topWall ? (
      <Line
        x1={cell.topLeft().x}
        y1={cell.topLeft().y}
        x2={cell.topRight().x}
        y2={cell.topRight().y}
        stroke="red"
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
        stroke="red"
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
        stroke="red"
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
        stroke="red"
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
      <View>
        <Svg height={maze.deviceHeight} width={maze.deviceWidth}>
          {maze.cells.map(cell => this.renderCell(cell))}
          {this.renderAgent(this.state ? this.state.cell : maze.cells[0])}
          {this.renderTarget(maze.target)}
        </Svg>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: (maze.deviceWidth - 240) / 2,
          }}>
          <AxisPad
            resetOnRelease={true}
            autoCenter={true}
            step={1 / 10}
            size={240}
            handlerSize={120}
            handlerStyle={{color: 'red'}}
            onValue={({x, y}) => {
              // values are between -1 and 1
              if (x !== this.x) {
                if (x < 0) {
                  this.onPressLeft();
                } else if (x > 0) {
                  this.onPressRight();
                }
              }
              this.x = x;

              if (y !== this.y) {
                if (y < 0) {
                  this.onPressTop();
                } else if (y > 0) {
                  this.onPressBottom();
                }
              }
              this.y = y;
            }}
          />
        </View>
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
});

export default App;
