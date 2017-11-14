import React from 'react';
import { View } from 'react-native';
import { Text } from '../';
import Hamburger from '../Hamburger';
import styles from './styles';

const PageHeader = ({ openDrawer, title, navigation }) => (
    <View style={styles.containerStyle}>
        <Hamburger onPress={() => navigation.navigate('DrawerOpen')} />
        <Text style={styles.titleStyle}>
            { title }
        </Text>
    </View>
);

export default PageHeader;
