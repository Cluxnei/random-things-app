import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/Home';

const Stack = createStackNavigator();

const Options = {
    Home: {
        headerShown: false,
    },
};

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={Options.Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}