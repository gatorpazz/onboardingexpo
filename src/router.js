import React from 'react';
import { DrawerNavigator } from 'react-navigation'
import DrawerContent from './components/DrawerContent';
import routes from './routes';

export default OnboardingV2 = DrawerNavigator(
    routes,
    {
        contentComponent: props => <DrawerContent {...props} />,
        contentOptions: {
            inactiveTintColor: 'white',
            activeTintColor: '#034663',
            inactiveBackgroundColor: '#0079ad',
            activeBackgroundColor: '#b4e7fd',
            labelStyle: {
                paddingLeft: 20
            },
            style: {
                marginTop: 0,
                marginBottom: 0,
                paddingTop: 0,
                paddingBottom: 0
            }
        }
    }
);
