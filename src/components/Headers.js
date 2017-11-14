import React from 'react';
import { View } from 'react-native';
import AppHeader from './AppHeader';
import PageHeader from './PageHeader';
import SubHeader from './SubHeader';

const Headers = ({ title, navigation }) => (
    <View style={{ zIndex: 500, backgroundColor: 'white' }}>
        <AppHeader />
        <PageHeader title={ title } navigation={ navigation } />
        <SubHeader />
    </View>
);

export default Headers;
