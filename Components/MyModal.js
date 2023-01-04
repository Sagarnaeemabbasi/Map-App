import Styles from '../Styling';
import React from 'react';
import {
  Modal,
  Text,
  Pressable,
  View,
} from 'react-native';

const MyModal = props => {
  const {
    visible,
    mainText,
    buttonText,
    onRequestClose,
    onPress,
    transparent = true,
    animationType = 'slide',
  } = props;
  return (
    <View style={[Styles.centeredView]}>
      <Modal
        animationType={animationType}
        transparent={transparent}
        visible={visible}
        onRequestClose={onRequestClose}>
        <View
          style={[
            Styles.centeredView,
            Styles.bgTransparent,
            ,
            Styles.h100,
            {marginTop: 0},
          ]}>
          <View style={[{backgroundColor: '#FBFAF5'}, Styles.modalView]}>
            <Text style={Styles.modalText}>{mainText}</Text>
            <View style={[Styles.my2, Styles.w100]}>
              <Pressable style={[Styles.btn]} onPress={onPress}>
                <Text style={[Styles.textStyleWhite]}>{buttonText}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};



export default MyModal;
