import React from 'react';
import {
    TouchableWithoutFeedback,
    View
} from 'react-native';
import styles from './styles';

const Hamburger = ({ onPress }) => (
    <TouchableWithoutFeedback
        onPress={onPress}
    >
        <View style={styles.containerStyle}>
            <View style={styles.barStyle} />
            <View style={styles.barStyle} />
            <View style={styles.barStyle} />
        </View>
    </TouchableWithoutFeedback>
);

export default Hamburger;
