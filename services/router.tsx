import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './navigation';
// Screens
import HomeScreen from '../src/screens/Home';
import NumbersScreen from '../src/screens/Numbers';
import AtomsScreen from '../src/screens/Atoms';
import ImagesScreen from '../src/screens/Images';

const Stack = createStackNavigator();

const Options = {
    Home: {
        headerShown: false,
    },
    Numbers: {
        headerShown: false,
    },
    Atoms: {
        headerShown: false,
    },
    Images: {
        headerShown: false,
    },
};

export default function Router() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={Options.Home} />
                <Stack.Screen name="Numbers" component={NumbersScreen} options={Options.Numbers} />
                <Stack.Screen name="Atoms" component={AtomsScreen} options={Options.Atoms} />
                <Stack.Screen name="Images" component={ImagesScreen} options={Options.Images} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}