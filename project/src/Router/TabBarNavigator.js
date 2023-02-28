import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../Screens/HomeScreen'
import SearchScreen from '../Screens/SearchScreen';

const Tab = createBottomTabNavigator();

export default function TabBarNavigator() {
    return (
        <Tab.Navigator 
            screenOptions={{ 
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#23262B',
                    borderTopWidth: 0
                },
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen 
                name="Home" component={ HomeScreen } 
                options={{
                    tabBarIcon: ({focused}) => (
                        <FontAwesome name="home" size={30} color={ focused ? '#A54AFF' : 'rgba(165, 74, 255, .33)' } />
                    ),
                }}   
            />
            <Tab.Screen 
                name="Search" component={ SearchScreen } 
                options={{
                    tabBarIcon: ({focused}) => (
                        <FontAwesome name="search" size={30} color={ focused ? '#A54AFF' : 'rgba(165, 74, 255, .33)' } />
                    )
                }}     
            />
        </Tab.Navigator>
    );
}