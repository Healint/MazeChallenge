import React, {Component} from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {Colors} from './assets/Colors';
import {POPUP_BG} from './images';

export default class Popup extends Component {
  state = {
    modalVisible: false,
  };

  toggleModal(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.popup}>
            <ImageBackground source={POPUP_BG}>
              <TouchableHighlight
                onPress={() => {
                  this.toggleModal(!this.state.modalVisible);
                }}>
                <Text style={styles.close}>Close</Text>
              </TouchableHighlight>
              <Text>Hello World!</Text>
            </ImageBackground>
          </View>
        </Modal>

        {/*        have the insides of this block in App/game controller
<TouchableHighlight
          onPress={() => {
            this.toggleModal(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  popup: {
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
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
    alignSelf: 'flex-end',
    marginTop: 16,
    marginEnd: 16,
    fontFamily: 'Asap-Bold',
    fontSize: 16,
    color: Colors.turquoise,
  },
});
