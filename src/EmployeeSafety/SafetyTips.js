import React from 'react';
import { ScrollView, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { ViewMore, Container, Headers, Text } from "../components";
import info from '../assets/pages/EmployeeSafety/safetyTips.en';

const SafetyTips = ({ navigation }) => {
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <Headers title="Campus Safety Tips" navigation={ navigation } />
            <Container>
                <ViewMore>
                    <Icon type='font-awesome'
                          name='exclamation-triangle'
                          size={50}
                          color='#666' />
                </ViewMore>
                <ViewMore>
                    <Text h2>{info.heading}</Text>
                </ViewMore>
                <ViewMore>
                    {
                        info.content.map((item, i) => {
                            return (
                                <View style={ styles.listItem } key={ i }>
                                    <View style={ styles.bullet }>
                                        <Icon type='font-awesome' name={ item.icon } />
                                    </View>
                                    <ViewMore mLeft={ 8 } mBot={ 0 } styles={ styles.li }>
                                        <Text>
                                            { item.text }
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

SafetyTips.navigationOptions = {
    drawerLabel: 'Campus Safety Tips'
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
    }
};

export default SafetyTips;
