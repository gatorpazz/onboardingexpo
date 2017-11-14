import React from 'react';
import { View } from 'react-native';
import { Text } from '../';
import styles from './styles';

const Li = ({ text, hideBullets, bulletCode='\u2022', margin=18 }) => {
    const bullet = !hideBullets &&
        (<Text style={styles.bullet}>
            {`${bulletCode} `}
        </Text>);

    return (
        <View style={{
            ...styles.listItem,
            marginBottom: margin
        }}
        >
            { bullet }
            <Text style={styles.li}>
                { text }
            </Text>
        </View>
    );
};

export default Li;
