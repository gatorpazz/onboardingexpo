import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const Img = ({ src, height=350 }) => {
    return (
        <View style={{ height }}>
            <Image
                style={styles.imageStyles}
                source={src}
                resizeMode="contain"
            />
        </View>
    );
};

export default Img;
