import React from 'react';
import { View } from 'react-native';
import { Text } from '../';
import styles from './styles';

const Event = ({ event }) => {
    const { containerStyles,
            timeContainerStyles,
            textContainerStyles,
            defaultStyles,
            noEventStyles
        } = styles;
    if (event) {
        const { startTime, endTime, text } = event;
        return (
            <View style={containerStyles}>
                <View style={[defaultStyles, timeContainerStyles]}>
                    <Text>{startTime} - {endTime}</Text>
                </View>
                <View style={[defaultStyles, textContainerStyles]}>
                    <Text>{text}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={noEventStyles}>
            <Text>No Events</Text>
        </View>
    )
};

export default Event;
