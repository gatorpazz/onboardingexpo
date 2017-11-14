import React from 'react';
import { ScrollView } from 'react-native';
import Autolink from 'react-native-autolink';
import { ViewMore, Container, List, Headers, Text } from "../components";
import info from '../assets/pages/Security/securityContactInfoAndAdditionalResources.en';

const SecurityContactInfoAndAdditionalResources = ({ navigation }) => {
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <Headers title="Contact and Additional Resources" navigation={navigation} />
            <Container>
                <ViewMore>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{info.section1.heading}</Text>
                </ViewMore>
                <ViewMore>
                    {info.section1.content.map((li, i) =>(
                        <ViewMore mbot={6} key={i}>
                            <Autolink style={{fontWeight: 'bold'}} text={li} truncate={-1}/>
                        </ViewMore>
                    ))}
                </ViewMore>
                <ViewMore>
                    <Text h3>{info.section2.heading}</Text>
                </ViewMore>
                <ViewMore>
                    <List array={info.section2.content} />
                </ViewMore>
            </Container>
        </ScrollView>
    );
};

SecurityContactInfoAndAdditionalResources.navigationOptions = {
    drawerLabel: 'Security Contact Info'
};

export default SecurityContactInfoAndAdditionalResources;
