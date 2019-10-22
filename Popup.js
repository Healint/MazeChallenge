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
  }

  getIcon() {
    if (this.props && this.props.modalName === 'zeeshan') {
      return POPUP_ZEESHAN;
    } else if (this.props && this.props.modalName === 'jenny') {
      return POPUP_JENNY;
    } else if (this.props && this.props.modalName === 'anh') {
      return POPUP_ANH;
    } else if (this.props && this.props.modalName === 'nicolas') {
      return POPUP_NICOLAS;
    } else if (this.props && this.props.modalName === 'yikun') {
      return POPUP_YIKUN;
    } else if (this.props && this.props.modalName === 'gameover') {
      return POPUP_GAMEOVER;
    } else if (this.props && this.props.modalName === 'winner') {
      return POPUP_WINNER;
    } else if (this.props && this.props.modalName === 'aged_cheese') {
      return POPUP_AGED_CHEESE;
    } else if (this.props && this.props.modalName === 'chocolate') {
      return POPUP_CHOCOLATE;
    } else if (this.props && this.props.modalName === 'caffeine') {
      return POPUP_CAFFEINE;
    }
  }

  getDesc() {
    if (this.props && this.props.modalName === 'zeeshan') {
      return 'Your PR (Pass Request) is declined. Game over.';
    } else if (this.props && this.props.modalName === 'jenny') {
      return 'Here is Your Pass of the Day!';
    } else if (this.props && this.props.modalName === 'anh') {
      return 'Let me set you a new policy. Your controls are reversed.';
    } else if (this.props && this.props.modalName === 'nicolas') {
      return 'Hello, my dear friend and valued colleague!';
    } else if (this.props && this.props.modalName === 'yikun') {
      return 'Please walk a clean path. Let me bring you somewhere you can start afresh.';
    } else if (this.props && this.props.modalName === 'gameover') {
      return 'Better luck next time!';
    } else if (this.props && this.props.modalName === 'winner') {
      return 'You made it!';
    } else if (this.props && this.props.modalName === 'aged_cheese') {
      return 'You get 1 point!.';
    } else if (this.props && this.props.modalName === 'chocolate') {
      return 'Your get 3 points!';
    } else if (this.props && this.props.modalName === 'caffeine') {
      return 'Your get 5 points!';
    }
  }

  getTitle() {
    if (this.props && this.props.modalName === 'zeeshan') {
      return 'Zeeshan says...';
    } else if (this.props && this.props.modalName === 'jenny') {
      return 'Jenny says...';
    } else if (this.props && this.props.modalName === 'anh') {
      return 'Anh says...';
    } else if (this.props && this.props.modalName === 'nicolas') {
      return 'Nicolas says...';
    } else if (this.props && this.props.modalName === 'yikun') {
      return 'Yikun says...';
    } else if (this.props && this.props.modalName === 'gameover') {
      return 'Game Over!';
    } else if (this.props && this.props.modalName === 'winner') {
      return 'You made it!';
    } else if (this.props && this.props.modalName === 'aged_cheese') {
      return 'You picked up aged cheese!';
    } else if (this.props && this.props.modalName === 'chocolate') {
      return 'You picked up chocolate!';
    } else if (this.props && this.props.modalName === 'caffeine') {
      return 'You picked up caffeine!';
    }
  }

  closePopup = () => {
    this.props.closePopup?.();
  };

  render() {
    if (this.props && this.props.modalVisible) {
      return (
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.modalVisible}>
          <View style={styles.popup}>
            <TouchableHighlight onPress={this.closePopup}>
              <Text style={styles.close}>Close</Text>
            </TouchableHighlight>
            <Image source={this.getIcon(this.props.modalName)} />
            <Text style={styles.title}>
              {this.getTitle(this.props.modalName)}
            </Text>
            <Text style={styles.description}>
              {this.getDesc(this.props.modalName)}
            </Text>
          </View>
        </Modal>
      );
    } else {
      return <View />;
    }
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
