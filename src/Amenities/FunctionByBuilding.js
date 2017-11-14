import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { Text } from '../components';
import Headers from '../components/Headers';
import List from '../components/List';
import ViewMore from '../components/ViewMore';
import Container from '../components/Container';
import info from '../assets/pages/Amenities/functionByBuilding.en';


const FunctionByBuilding = ({ navigation }) => {

    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <Headers title="Function by Building" navigation={navigation} />
            <ViewMore styles={{height: 350}}>
                <Image
                    style={styles.imageStyles}
                    source={info.image}
                    resizeMode="contain"
                />
            </ViewMore>
            <Container>
                {
                    info.buildings.map((building, i) => (
                        <View style={{ marginLeft: 6 }} key={i}>
                            <ViewMore>
                                <Text h3>
                                    {building.heading}
                                </Text>
                            </ViewMore>
                            <List array={building.content} />
                        </View>
                    ))
                }
            </Container>

        </ScrollView>
    )
};

FunctionByBuilding.navigationOptions = {
    drawerLabel: 'Function by Building'
};

const styles = {
    imageStyles: {
        flex: 1,
        height: undefined,
        width: undefined
    }
};

export default FunctionByBuilding;
