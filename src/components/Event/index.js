import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Event = ({event}) => {
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
                    <Text>{event.startTime} - {event.endTime}</Text>
                </View>
                <View style={[defaultStyles, textContainerStyles]}>
                    <Text>{event.text}</Text>
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
