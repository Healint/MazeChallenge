import React, {Component} from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';
import {Colors} from './assets/Colors';
import {
  POPUP_BG,
  POPUP_AGED_CHEESE,
  POPUP_ANH,
  POPUP_CAFFEINE,
  POPUP_CHOCOLATE,
  POPUP_GAMEOVER,
  POPUP_JENNY,
  POPUP_NICOLAS,
  POPUP_WINNER,
  POPUP_YIKUN,
  POPUP_ZEESHAN,
} from './images';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.setStates();
  }

  state = {
    modalVisible: false,
    icon: null,
    title: '',
    description: '',
  };

  setStates() {
    this.setState({modalVisible: true});
    switch (this.props.modalName) {
      case 'zeeshan':
        this.setState({
          icon: POPUP_ZEESHAN,
          title: 'Zeeshan says...',
          description: 'Your PR (Pass Request) is declined. Game over.',
        });
        break;
      case 'jenny':
        this.setState({
          icon: POPUP_JENNY,
          title: 'Jenny says...',
          description: 'Here is Your Pass of the Day!',
        });
        break;
      case 'anh':
        this.setState({
          icon: POPUP_ANH,
          title: 'Anh says...',
          description:
            'Let me set you a new policy. Your controls are reversed.',
        });
        break;
      case 'nicolas':
        this.setState({
          icon: POPUP_NICOLAS,
          title: 'Nicolas says...',
          description: 'Hello, my dear friend and valued colleague!',
        });
        break;
      case 'yikun':
        this.setState({
          icon: POPUP_YIKUN,
          title: 'Yikun says...',
          description:
            'Please walk a clean path. Let me bring you somewhere you can start afresh.',
        });
        break;
      case 'gameover':
        this.setState({
          icon: POPUP_GAMEOVER,
          title: 'Game over!.',
          description: 'Better luck next time!',
        });
        break;
      case 'winner':
        this.setState({
          icon: POPUP_WINNER,
          title: 'Great job!',
          description: 'You made it!',
        });
        break;
      case 'aged_cheese':
        this.setState({
          icon: POPUP_AGED_CHEESE,
          title: 'You picked up aged cheese!',
          description: 'You get 1 point!.',
        });
        break;
      case 'chocolate':
        this.setState({
          icon: POPUP_CHOCOLATE,
          title: 'You picked up chocolate!',
          description: 'Your get 3 points!',
        });
        break;
      case 'caffeine':
        this.setState({
          icon: POPUP_CAFFEINE,
          title: 'You picked up caffeine!',
          description: 'You get 5 points!',
        });
        break;
    }
  };

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.modalVisible}>
        <View style={styles.popup}>
          <TouchableHighlight
            onPress={() => {
              this.setState({modalVisible: false});
            }}>
            <Text style={styles.close}>Close</Text>
          </TouchableHighlight>
          <Image source={this.state.icon} />
          <Text style={styles.title}>{this.state.title}</Text>
          <Text style={styles.description}>{this.state.description}</Text>
        </View>
      </Modal>
    );
  }
}
export default Popup;

const styles = StyleSheet.create({
  popup: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    marginTop: 120,
    width: 300,
    height: 500,
    backgroundColor: Colors.grey,
  },
  icon: {
    width: 136,
    height: 136,
  },
  title: {
    marginTop: 16,
    fontFamily: 'Asap-BoldItalic',
    fontSize: 32,
    color: Colors.dark_blue,
  },
  description: {
    marginBottom: 16,
    fontFamily: 'Asap-BoldItalic',
    fontSize: 16,
    color: Colors.dark_blue,
  },
  close: {
    left: 0,
    alignSelf: 'flex-end',
    marginTop: 16,
    marginEnd: 16,
    fontFamily: 'Asap-Bold',
    fontSize: 16,
    color: Colors.turquoise,
  },
});
