import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Calendar } from 'react-native-calendars';
import { Headers, EventsList } from '../components';
import calendarDates from '../assets/pages/Calendar/calendar.en';

class CalendarView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState: calendarDates,
            markedDates: null,
            selectedDate: null
        };
        this.onDayPress = this.onDayPress.bind(this);
    }
    componentWillMount() {
        this.setState({
            markedDates: this.state.initialState
        })
    }
    onDayPress(day) {
        this.setState({
            markedDates: {
                ...this.state.initialState,
                [day.dateString]: {selected: true, marked: true},
            },
            selected: this.state.initialState[day.dateString]
        });
    }
    render() {
        return (
            <ScrollView stickyHeaderIndices={[0]}>
                <Headers title="Calendar" navigation={this.props.navigation} />
                <Calendar
                    onDayPress={this.onDayPress}
                    markedDates={this.state.markedDates}
                />
                <EventsList date={this.state.selected} />
            </ScrollView>
        );
    }
}

Calendar.navigationOptions = {
    drawerLabel: 'Calendar'
};

export default CalendarView;
