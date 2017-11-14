import React from 'react';
import { ScrollView, TouchableOpacity, Platform, Linking } from 'react-native';
import {
    Headers,
    Img,
    ViewMore,
    Container,
    Text
} from '../components';
import info from '../assets/pages/Amenities/campusOverview.en';

const CampusOverview = ({ navigation }) => {
    // TODO: add error catching and canOpenURL methods for map
    const mapLink = Platform.OS === 'ios'
        ? `http://maps.apple.com/?ll=${info.mapSettings.lat},${info.mapSettings.long}`
        : `geo:${info.mapSettings.lat},${info.mapSettings.long}`;
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <Headers title="Campus Overview" navigation={navigation} />
                <Img src={info.image} height={245} />
            <Container styles={{paddingTop: 0}}>
                <ViewMore>
                    <Text h1>{info.heading}</Text>
                </ViewMore>
                <ViewMore>
                    <Text h3>{info.subHeading}</Text>
                </ViewMore>
                <ViewMore>
                    <TouchableOpacity onPress={() => Linking.openURL(mapLink)}>
                        <Text>{info.address.address1}</Text>
                        <Text>{info.address.address2}</Text>
                        <Text>{`${info.address.city}, ${info.address.state} ${info.address.zip}`}</Text>
                    </TouchableOpacity>
                </ViewMore>
                <ViewMore>
                    <Text h3>{info.contact.title}</Text>
                </ViewMore>
                <Text>{info.contact.number }</Text>
            </Container>
        </ScrollView>
    );
};

export default CampusOverview;
