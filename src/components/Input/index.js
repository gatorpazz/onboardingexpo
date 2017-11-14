import React from 'react';
import { Text } from 'react-native-elements';
import { TextInput } from 'react-native';
import { ViewMore } from "../";
import styles from './styles';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <ViewMore>
      <Text style={labelStyle} h3>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        multiline={true}
        numberOfLines={5}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </ViewMore>
  );
};

export default Input;
