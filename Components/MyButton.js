import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Styles from '../Styling';

export default function MyButton(props) {
  const {onPress,text,style} = props;
  return (
    <View style={[Styles.p2, Styles.w100]}>
    <TouchableOpacity style={[Styles.btn,style]} onPress={onPress}>
      <Text style={[Styles.textWhite, Styles.textCenter, Styles.fs4]}>
        {text}
      </Text>
    </TouchableOpacity>
  </View>
  );
}
