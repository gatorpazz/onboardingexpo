import React from 'react';
import { TextInput } from 'react-native';
import { ViewMore, Text } from "../";
import styles from './styles';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle } = styles;
  return (
    <ViewMore>
      <Text h3>{label}</Text>
      <TextInput
        secureTextEntry={ secureTextEntry }
        placeholder={ placeholder }
        multiline={ true }
        numberOfLines={ 5 }
        style={ inputStyle }
        value={ value }
        onChangeText={ onChangeText }
      />
    </ViewMore>
  );
};

export default Input;
