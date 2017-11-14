import React from 'react';
import { Text as RNText } from 'react-native';

const Text = ({ children, size = 16, h1, h2, h3, style }) => {
    if(h1) size = 32;
    if(h2) size = 26;
    if(h3) size = 23;
    return (
        <RNText style={{ "fontSize": size, ...style }}>
            { children }
        </RNText>
    )
};

export default Text;
