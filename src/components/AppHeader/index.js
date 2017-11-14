import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';

const AppHeader = () => (
  <View style={ styles.header }>
    <Image style={ styles.imageStyles } source={ require('../../assets/images/accredocombo.png') } />
  </View>
);

export default AppHeader;
