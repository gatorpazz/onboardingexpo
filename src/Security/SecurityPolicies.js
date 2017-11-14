import React from 'react';
import { ScrollView, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { ViewMore, Container, Headers } from "../components/index";
import info from '../assets/pages/Security/securityPolicies.en';

const SecurityPolicies = ({ navigation }) => {
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <Headers title="Security Policies" navigation={navigation} />
            <Container>
                <ViewMore mTop={18}>
                    <Icon type='font-awesome'
                          name='exclamation-triangle'
                          size={40}
                          color='#666' />
                </ViewMore>
                <ViewMore>
                    <Text h4>{info.heading}</Text>
                </ViewMore>
                <ViewMore>
                    {
                        info.content.map((item, i) => {
                            return (
                                <View style={styles.listItem} key={i}>
                                    <View style={styles.bullet}>
                                        <Icon type={item.type || 'ionicon'} name={item.icon} />
                                    </View>
                                    <ViewMore mLeft={8} mBot={0} styles={styles.li}>
                                        <Text style={styles.liText}>
                                            {item.text}
                                        </Text>
                                    </ViewMore>

                                </View>
                            );
                        })
                    }
                </ViewMore>
            </Container>
        </ScrollView>

    );
};

SecurityPolicies.navigationOptions = {
    drawerLabel: 'Security Policies'
};

const styles = {
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'center'
    },
    bullet: {
        flex: 2
    },
    li: {
        flex: 20
    },
    liText: {
        fontSize: 18
    }
};

export default SecurityPolicies;
