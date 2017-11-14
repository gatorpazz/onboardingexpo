import React from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Hamburger from '../Hamburger';
import styles from './styles';

const PageHeader = ({ openDrawer, title, navigation }) => (
    <View style={styles.containerStyle}>
        <Hamburger onPress={() => navigation.navigate('DrawerOpen')} />
        <Text style={styles.titleStyle}>{title}</Text>
    </View>
);

export default PageHeader;
