import React from 'react';
import { View } from 'react-native';
import defaults from './styles';

const Container = ({ children, styles }) => {
    return (
        <View style={{ ...defaults.container, ...styles }}>
            { children }
        </View>
    );
};

export default Container;
