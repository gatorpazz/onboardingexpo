import React from 'react';
import { ScrollView, View } from 'react-native';
import {
    List,
    Schedule,
    Container,
    ViewMore,
    Headers,
    Text
} from '../components';
import info from '../assets/pages/Amenities/buildingAccess.en';

const BuildingAccess = ({ navigation }) => {
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <Headers title="Building Access" navigation={navigation} />
            <Container>
                <ViewMore>
                    <Text h2>
                        {info.section1.heading}
                    </Text>
                </ViewMore>
                <List array={info.section1.content} style={styles.marginBot} />
                <ViewMore>
                    <Text h2>
                        {info.section2.heading}
                    </Text>
                </ViewMore>
                <ViewMore>
                    <Text style={styles.subHeading}>
                        {info.section2.subHeading}
                    </Text>
                </ViewMore>
                <Schedule schedule={info.section2.content} />
            </Container>
        </ScrollView>
    )
};

BuildingAccess.navigationOptions = {
    drawerLabel: 'Building Access'
};

const styles = {
    marginBot: {
        marginBottom: 18
    },
    subHeading: {
        fontWeight: 'bold',
        marginBottom: 18
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row'
    },
    day: {
        flex: 1,
        fontWeight: 'bold'
    },
    times: {
        flex: 3,
        fontWeight: 'bold'
    }
};

export default BuildingAccess;
