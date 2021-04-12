import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';
import { Theme } from './src/theme';
import { navigationRef } from './RootNavigation';
export default function App() {


  return (
    <NavigationContainer ref={navigationRef} theme={Theme}>
        <Router/>
    </NavigationContainer>
  );
}
