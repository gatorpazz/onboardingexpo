import React from 'react';
import { ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { ViewMore, Container, Headers, List, Text } from "../components";
import info from '../assets/pages/Security/securityPolicies.en';

const SecurityPolicies = ({ navigation }) => {
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <Headers title="Security Policies" navigation={ navigation } />
            <Container>
                <ViewMore mTop={ 18 }>
                    <Icon type='font-awesome'
                          name='exclamation-triangle'
                          size={ 40 }
                          color='#666' />
                </ViewMore>
                <ViewMore>
                    <Text h2>{ info.heading }</Text>
                </ViewMore>
                <ViewMore>
                    <List array={ info.content } />
                </ViewMore>
            </Container>
        </ScrollView>

    );
};

SecurityPolicies.navigationOptions = {
    drawerLabel: 'Security Policies'
};

export default SecurityPolicies;
