import React, {Component} from 'react';
import {
    ScrollView,
    LayoutAnimation,
    UIManager,
    Linking
} from 'react-native';
import { DrawerItems } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import DrawerItemsContent from '../../assets/pages/Drawer/drawerItems.en';
import styles from './styles';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class DrawerContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDrawerItem: null
        }
    }
    createProps(x, y) {
        return {...this.props, items: this.props.items.slice(x, y)}
    }
    toggleDrawerItem(drawerItem) {
        if (drawerItem === this.state.selectedDrawerItem) {
            this.setState({selectedDrawerItem: null})
        } else {
            this.setState({selectedDrawerItem: drawerItem})
        }
    }
    render() {
        const amenities = this.createProps(0, 4);
        const employeeSafety = this.createProps(4, 8);
        const security = this.createProps(8, 12);
        const theRest = this.createProps(12, 9999);
        return (
            <ScrollView style={styles.containerStyles}>
                <ListItem
                    title="Amenities"
                    onPress={() => this.toggleDrawerItem('Amenities')}
                    chevronColor="#FFFFFF"
                    titleStyle={{color: '#FFFFFF'}}
                    underlayColor="#0079ad"
                    containerStyle={{borderBottomColor: 'rgba(255, 255, 255, 0.25)'}}
                />
                { this.state.selectedDrawerItem === 'Amenities' && <DrawerItems {...amenities} />}
                <ListItem
                    title="Employee Safety"
                    onPress={() => this.toggleDrawerItem('Employee Safety')}
                    chevronColor="#FFFFFF"
                    titleStyle={{color: '#FFFFFF'}}
                    underlayColor="#0079ad"
                    containerStyle={{borderBottomColor: 'rgba(255, 255, 255, 0.25)'}}
                />
                { this.state.selectedDrawerItem === 'Employee Safety' && <DrawerItems {...employeeSafety} />}
                <ListItem
                    title="Security"
                    onPress={() => this.toggleDrawerItem('Security')}
                    chevronColor="#FFFFFF"
                    titleStyle={{color: '#FFFFFF'}}
                    underlayColor="#0079ad"
                    containerStyle={{borderBottomColor: 'rgba(255, 255, 255, 0.25)'}}
                />
                { this.state.selectedDrawerItem === 'Security' && <DrawerItems {...security} />}
                <ListItem
                    title="Other Items"
                    hideChevron
                    titleStyle={{color: '#FFFFFF', fontWeight: 'bold', marginTop: 10}}
                    containerStyle={{borderBottomColor: 'rgba(255, 255, 255, 0.25)'}}
                />
                <DrawerItems {...theRest} inactiveBackgroundColor="#008DCB" />
                <ListItem
                    title="Helpful Links"
                    hideChevron
                    titleStyle={{color: '#FFFFFF', fontWeight: 'bold', marginTop: 10}}
                    containerStyle={{borderBottomColor: 'rgba(255, 255, 255, 0.25)'}}
                />
                { DrawerItemsContent.helpfulLinks.map((item) =>(
                    <ListItem
                        key={item.name}
                        title={item.name}
                        onPress={() => Linking.openURL(item.url)}
                        hideChevron
                        titleStyle={{color: '#FFFFFF'}}
                        underlayColor="#0079ad"
                        containerStyle={{borderBottomColor: 'rgba(255, 255, 255, 0.25)'}}
                    />
                )) }
            </ScrollView>
        );
    }
}

export default DrawerContent;
