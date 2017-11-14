import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-elements';
import Autolink from 'react-native-autolink';
import { ViewMore, Container, Img, List, Headers } from "../components/index";
import info from '../assets/pages/EmployeeSafety/severeWeather.en';

const SevereWeather = ({ navigation }) => {
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <Headers title="Severe Weather" navigation={navigation} />
            <Img src={info.image} height={220} />
            <Container>
                <Text h3>{info.heading}</Text>
                <ViewMore mTop={16}>
                    <List array={info.content} />
                </ViewMore>
                <ViewMore>
                    <Autolink text={info.content2} truncate={-1}/>
                </ViewMore>
            </Container>
        </ScrollView>
    )
};

SevereWeather.navigationOptions = {
    drawerLabel: 'Severe Weather'
};

export default SevereWeather;
