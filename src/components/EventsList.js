import React, { Component } from 'react';
import { View } from 'react-native';
import Event from './Event';

class EventsList extends Component {
    renderList(events) {
        return events.map(event =>
            <Event key={event.text} event={event} />
        );
    }
    render() {
        const { date } = this.props;
        if (date && date.events.length) {
            return (
                <View>
                    {this.renderList(date.events)}
                </View>
            );
        } else {
            return <Event />
        }
    }
}

export default EventsList;
