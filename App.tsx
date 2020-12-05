import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Router from './services/router';


export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <Router />
        </>
    );
}