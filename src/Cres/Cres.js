import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from '../components';
import { ViewMore, Container, Img, Headers } from "../components/index";
import info from '../assets/pages/CRES/cres.en';

const Cres = ({ navigation }) => {
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <Headers title="Campus Security Tips" navigation={navigation} />
            <Container>
                <Img src={info.image} height={200} />
                <ViewMore>
                    <Text h3>{info.heading}</Text>
                </ViewMore>
                <ViewMore>
                    <Text>{info.content[0]}</Text>
                </ViewMore>
                <ViewMore>
                    <Text>{info.content[1]}</Text>
                </ViewMore>
            </Container>
        </ScrollView>
    );
};

Cres.navigationOptions = {
    drawerLabel: 'CRES'
};

export default Cres;
