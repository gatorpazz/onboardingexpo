import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from '../components';
import { ViewMore, List, Headers, Container } from "../components/index";
import info from '../assets/pages/EmployeeSafety/medicalEmergencies.en';

const MedicalEmergencies = ({ navigation }) => {
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <Headers title="Medical Emergencies" navigation={ navigation } />
            <Container>
                <ViewMore>
                    <Text h2>{info.heading}</Text>
                </ViewMore>
                <ViewMore>
                    <List array={info.content} />
                </ViewMore>
            </Container>
        </ScrollView>
    );
};

MedicalEmergencies.navigationOptions = {
    drawerLabel: 'Medical Emergencies'
};

export default MedicalEmergencies;
