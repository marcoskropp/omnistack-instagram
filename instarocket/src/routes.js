import { createAppContainer, createStackNavigator } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import React from 'react';

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png'

export default createAppContainer(
    createStackNavigator({
        Feed,
        New
    }, {
        defaultNavigationOpntions: {
            headerTintColor: '#000', 
            headerTitle: <Img style={{marginHorinzontal: 20}} source={logo} />,
            headerBackTitle: null,
        },
        mode: 'modal'
    })
);