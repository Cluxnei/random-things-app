import { NavigationContainerProps, NavigationHelpers } from '@react-navigation/native';
import { StackNavigationHelpers } from '@react-navigation/stack/lib/typescript/src/types';
import * as React from 'react';

export const navigationRef = React.createRef<StackNavigationHelpers>();

export function navigate(name: string, params?: object): void {
    return navigationRef.current?.navigate(name, params);
}

export function goBack(): void {
    return navigationRef.current?.goBack();
}
