import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { Text, Button, Divider } from 'react-native-elements';
import { ViewMore, Container, Img, Headers, Input } from "../components";
import info from '../assets/pages/Feedback/feedback.en';
import axios from 'axios';

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: ''
        }
        this.submitFeedback = this.submitFeedback.bind(this);
    }
    submitFeedback(feedback) {
        axios.post('http://wolves.wlvs.tv/feedback', {
            "msg": feedback
        }).then((response) => {
            this.setState({ feedback: '' });
            alert('Thanks for the feedback!');
        }).catch((error) => console.log(error));
    }
    render() {
        return (
            <ScrollView stickyHeaderIndices={ [0] }>
                <Headers title="Feedback" navigation={ this.props.navigation } />
                <KeyboardAvoidingView behavior="position">
                    <Container>
                        <Img src={ info.image } height={ 250 } />
                        <Input
                            label={ info.heading }
                            value={ this.state.value }
                            onChangeText={ feedback => this.setState({  feedback  }) }
                            placeholder="Enter your feedback"
                        />
                        <ViewMore>
                            <Divider style={{ backgroundColor: 'grey', marginBottom: 20 }}/>
                            <Button
                                backgroundColor="#387EF5"
                                raised
                                title="Submit"
                                onPress={ () => this.submitFeedback(this.state.feedback) }
                            />
                            <Divider style={{ backgroundColor: 'grey', marginTop: 20 }}/>
                        </ViewMore>
                    </Container>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

Feedback.navigationOptions = {
    drawerLabel: 'Feedback'
};

export default Feedback;
