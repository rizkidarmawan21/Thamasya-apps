import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Login} from './pages';
import Router from './router';

import {enableLatestRenderer} from 'react-native-maps';

const App = () => {
  enableLatestRenderer();
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
