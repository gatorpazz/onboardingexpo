import React from 'react';
import { View } from 'react-native';
import Li from './Li';

const List = (props) => {
    return (
        <View>
            {
                props.array.map((li, i) => (
                    <Li key={i} text={li} {...props} />
                ))
            }
        </View>
    );
};

export default List;
