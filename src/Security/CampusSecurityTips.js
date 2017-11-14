import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { ViewMore, Container, Img, List, Headers } from "../components/index";
import info from '../assets/pages/Security/campusSecurityTips.en';

const CampusSecurityTips = ({ navigation }) => {
    return (
        <ScrollView stickyHeaderIndices={[0]}>  
            <Headers title="Campus Security Tips" navigation={navigation} />
            <Container>
                <Img src={info.image} height={220} />
                <ViewMore>
                    <Text h3>{info.heading}</Text>
                </ViewMore>
                <ViewMore>
                    <List array={info.content} />
                </ViewMore>
            </Container>
        </ScrollView>
    );
};

CampusSecurityTips.navigationOptions = {
    drawerLabel: 'Campus Security Tips'
};

export default CampusSecurityTips;
