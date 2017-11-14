import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { ViewMore, Container, Img, List, Headers } from "../components/index";
import info from '../assets/pages/Security/readersAndBadges.en';

const ReadersAndBadges = ({ navigation }) => {
    return (
        <ScrollView stickyHeaderIndices={[0]}> 
            <Headers title="Building Access – ID Badges" navigation={navigation} />
            <Container>
                <Img src={info.image}/>
                <ViewMore mTop={12}>
                    <Text h3>{info.heading}</Text>
                </ViewMore>
                <ViewMore>
                    <List array={info.content} />
                </ViewMore>
            </Container>
        </ScrollView>
    );
};

ReadersAndBadges.navigationOptions = {
    drawerLabel: 'Building Access – ID Badges'
};

export default ReadersAndBadges;
