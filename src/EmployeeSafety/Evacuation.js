import React from 'react';
import { ScrollView } from 'react-native';
import { ViewMore, Container, List, Headers, Text } from "../components";
import info from '../assets/pages/EmployeeSafety/evacuation.en';

const Evacuation = ({ navigation }) => {
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <Headers title="Evacuation Procedures" navigation={navigation} />
            <Container>
                <ViewMore>
                    <Text h2>{ info.heading}</Text>
                </ViewMore>
                <ViewMore>
                    <List array={ info.section1.content} />
                </ViewMore>
                <ViewMore>
                    <List array={ info.section2.content} hideBullets />
                </ViewMore>
            </Container>
        </ScrollView>
    );
};

Evacuation.navigationOptions = {
    drawerLabel: 'Evacuation Procedures'
};

export default Evacuation;
