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
import DPad from './components/DPad';
import GameTitle from './GameTitle';
import Booster from './components/Booster';
import Person from './components/Person';

import {PLAYER, END, BTN_DOWN, BTN_UP, BTN_LEFT, BTN_RIGHT} from './images';
import {REVERSE_DIRECTIONS} from './Effects';

const maze = new MazeHelper();
const booster = new Booster();
const obstacle = new Person();
// const popUp = new PopUp();

class App extends Component {
  state = {
    cell: maze.cells[0],
    caffeine: true,
    chocolate: true,
    agedCheese: true,
    anh: true,
    jenny: true,
    nicolas: true,
    zeeshan: true,
    yikun: true,
    person: null,
    moves: 80,
    points: 0,
  };

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
      <Image
        x={agent.topLeft().x + 8}
        y={agent.topLeft().y + 8}
        preserveAspectRatio="xMidYMid slice"
        href={PLAYER}
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
      <Image
        x={target.topLeft().x + 3}
        y={target.topLeft().y + 3}
        preserveAspectRatio="xMidYMid slice"
        href={END}
      />
    );
  };

  renderBooster = booster => {
    return (
      <Booster
        x={booster.topLeft().x + 8}
        y={booster.topLeft().y + 8}
        name={booster.booster}
      />
    );
  };

  renderObstacle = obstacle => {
    return (
      <Person
        x={obstacle.topLeft().x + 4}
        y={obstacle.topLeft().y + 4}
        size={maze.cellSize}
        name={obstacle.person}
      />
    );
  };

  onPressLeft = () => {
    if (this.state && this.state.person === 'anh') {
      if (this.state.cell.rightNeighbour) {
        this.setState({
          cell: this.state.cell.rightNeighbour,
        });
        this.subtractMoves(1);
      }
    } else {
      if (this.state.cell.leftNeighbour) {
        this.setState({
          cell: this.state.cell.leftNeighbour,
        });
        this.subtractMoves(1);
      }
    }
  };

  onPressRight = () => {
    if (this.state && this.state.person === 'anh') {
      if (this.state.cell.leftNeighbour) {
        this.setState({
          cell: this.state.cell.leftNeighbour,
        });
        this.subtractMoves(1);
      }
    } else {
      if (this.state.cell.rightNeighbour) {
        this.setState({
          cell: this.state.cell.rightNeighbour,
        });
        this.subtractMoves(1);
      }
    }
  };

  onPressTop = () => {
    if (this.state && this.state.person === 'anh') {
      if (this.state.cell.bottomNeighbour) {
        this.setState({
          cell: this.state.cell.bottomNeighbour,
        });
        this.subtractMoves(1);
      }
    } else {
      if (this.state.cell.topNeighbour) {
        this.setState({
          cell: this.state.cell.topNeighbour,
        });
        this.subtractMoves(1);
      }
    }
  };

  onPressBottom = () => {
    if (this.state && this.state.person === 'anh') {
      if (this.state.cell.topNeighbour) {
        this.setState({
          cell: this.state.cell.topNeighbour,
        });
        this.subtractMoves(1);
      }
    } else {
      if (this.state.cell.bottomNeighbour) {
        this.setState({
          cell: this.state.cell.bottomNeighbour,
        });
        this.subtractMoves(1);
      }
    }
  };

  subtractMoves = num => {
    if (this.state) {
      this.setState({
        moves: this.state.moves - num,
      });
    }
  };

  resetGame() {
    alert('Finish');
    this.setState({
      cell: maze.cells[0],
      caffeine: true,
      chocolate: true,
      agedCheese: true,
      anh: true,
      jenny: true,
      nicolas: true,
      zeeshan: true,
      yikun: true,
      person: null,
      moves: 80,
      points: 0,
    });
  }

  render() {
    if (this.state && this.state.cell.target) {
      this.resetGame();
    }
    if (this.state && this.state.moves === 0) {
      this.resetGame();
    }
    if (
      this.state &&
      this.state.caffeine &&
      this.state.cell.booster === 'caffeine'
    ) {
      this.setState({
        caffeine: false,
      });
      let pts = booster.getPoints(this.state.cell.booster);
      alert(pts);
      this.setState({
        points: this.state.points + pts,
      });
    }
    if (
      this.state &&
      this.state.chocolate &&
      this.state.cell.booster === 'chocolate'
    ) {
      this.setState({
        chocolate: false,
      });
      let pts = booster.getPoints(this.state.cell.booster);
      alert(pts);
      this.setState({
        points: this.state.points + pts,
      });
    }
    if (
      this.state &&
      this.state.agedCheese &&
      this.state.cell.booster === 'agedCheese'
    ) {
      this.setState({
        agedCheese: false,
      });
      let pts = booster.getPoints(this.state.cell.booster);
      alert(pts);
      this.setState({
        points: this.state.points + pts,
      });
    }
    if (this.state && this.state.anh && this.state.cell.person === 'anh') {
      alert(this.state.cell.person);
      this.setState({
        person: 'anh',
        anh: false,
      });
      // popUp.showPopup(this.state.cell.person);
    }
    if (this.state && this.state.yikun && this.state.cell.person === 'yikun') {
      alert(this.state.cell.person);
      this.setState({
        person: 'yikun',
        yikun: false,
        cell: maze.cells[Math.floor(Math.random() * 99) + 1],
      });
    }
    if (this.state && this.state.jenny && this.state.cell.person === 'jenny') {
      alert(this.state.cell.person);
      this.setState({
        person: 'jenny',
        jenny: false,
      });
    }
    if (
      this.state &&
      this.state.nicolas &&
      this.state.cell.person === 'nicolas'
    ) {
      alert(this.state.cell.person);
      this.setState({
        person: 'nicolas',
        nicolas: false,
      });
    }
    if (
      this.state &&
      this.state.zeeshan &&
      this.state.cell.person === 'zeeshan'
    ) {
      alert(this.state.cell.person);
      this.setState({
        person: 'zeeshan',
        zeeshan: false,
      });
    }
    return (
      <View style={styles.body}>
        <View style={{marginTop: 16}}>
          <View style={styles.row}>
            <Text style={styles.nameValue}>Moves left: {this.state.moves}</Text>
            <Text style={styles.nameValue}>
              Current points: {this.state.points}
            </Text>
          </View>
        </View>
        <Svg height={maze.deviceHeight} width={maze.deviceWidth}>
          {maze.cells.map(cell => this.renderCell(cell))}
          {this.renderAgent(this.state ? this.state.cell : maze.cells[0])}
          {this.renderTarget(maze.target)}
          {this.renderBooster(maze.caffeine)}
          {this.renderBooster(maze.chocolate)}
          {this.renderBooster(maze.agedCheese)}
          {this.renderObstacle(maze.obs1)}
          {this.renderObstacle(maze.obs2)}
          {this.renderObstacle(maze.obs3)}
          {this.renderObstacle(maze.obs4)}
          {this.renderObstacle(maze.obs5)}
        </Svg>
        <View style={styles.bottomBar} width={maze.deviceWidth}>
          <GameTitle />
          <DPad
            onPressLeft={this.onPressLeft}
            onPressRight={this.onPressRight}
            onPressTop={this.onPressTop}
            onPressBottom={this.onPressBottom}
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
  maze: {
    marginStart: 24,
    marginEnd: 24,
    height: 286,
    backgroundColor: Colors.white,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  body: {
    flexDirection: 'column',
    backgroundColor: Colors.turquoise,
  },
  row: {
    marginStart: 24,
    marginEnd: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameValue: {
    fontFamily: 'Asap-Regular',
    fontSize: 16,
    color: Colors.white,
  },
});

export default App;
