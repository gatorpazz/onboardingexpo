import React from 'react';
import { ScrollView } from 'react-native';
import { ViewMore, Container, Img, List, Headers, Text } from "../components";
import info from '../assets/pages/Security/readersAndBadges.en';

const ReadersAndBadges = ({ navigation }) => {
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <Headers title="Building Access – ID Badges" navigation={ navigation } />
            <Container>
                <Img src={ info.image }/>
                <ViewMore mTop={ 12 }>
                    <Text h2>{ info.heading }</Text>
                </ViewMore>
                <ViewMore>
                    <List array={ info.content } />
                </ViewMore>
            </Container>
        </ScrollView>
    );
};

ReadersAndBadges.navigationOptions = {
    drawerLabel: 'Building Access – ID Badges'
};

export default ReadersAndBadges;
