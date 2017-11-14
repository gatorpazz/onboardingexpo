import React from 'react';
import { ScrollView } from 'react-native';
import {
    Headers,
    Img,
    Schedule,
    ViewMore,
    Container,
    Text
} from '../components';
import info from '../assets/pages/Amenities/fitnessCenter.en';

const FitnessCenter = ({ navigation }) => {
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <Headers title="Fitness Center" navigation={navigation} />
            <Img src={info.image} height={160}/>
            <Container>
                <ViewMore>
                    <Text h2>
                        {info.section1.heading}
                    </Text>
                </ViewMore>
                <ViewMore>
                    <Text>
                        {info.section1.location}
                    </Text>
                </ViewMore>
                <ViewMore>
                    <Text style={styles.bold}>
                        {info.section1.waiver}
                    </Text>
                </ViewMore>
                <Schedule schedule={info.section2.content} />
            </Container>
        </ScrollView>
    )
};

FitnessCenter.navigationOptions = {
    drawerLabel: 'Fitness Center'
};

const styles = {
    bold: {
        fontWeight: 'bold'
    }
};

export default FitnessCenter;
