import React from 'react';
import {TextInput, View} from 'react-native';
import Styles from '../Styling';

export default function MyTextInput(props) {
  const {
    placeholder,
    onChangeText,
    style,
    editable,
    numberOfLines,
    secureTextEntry,
  } = props;
  return (
    <View style={[Styles.flexCenter]}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={[Styles.input, style]}
        editable={editable}
        numberOfLines={numberOfLines}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
