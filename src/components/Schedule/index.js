import React from 'react';
import { View } from 'react-native';
import { Text } from '../';
import styles from './styles';

const Schedule = ({ schedule }) => {
    return (
        <View>
            {schedule.map(li => {
                return (
                    <View style={styles.listItem}
                          key={li.day}>
                        <Text style={styles.day}>
                            {li.day}
                        </Text>
                        <Text style={styles.times}>
                            {li.times}
                        </Text>
                    </View>
                );
            })}

        </View>
    );
};

export default Schedule;
