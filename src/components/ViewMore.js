import React from 'react';
import { View } from 'react-native';

const ViewMore = ({ children, mBot=18, mTop=0, mLeft=0, mRight=0, styles }) => {
    return (
        <View style={{
            marginBottom: mBot,
            marginTop: mTop,
            marginLeft: mLeft,
            marginRight: mRight,
            ...styles
        }}>
            { children }
        </View>
    );
};

export default ViewMore;
