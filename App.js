import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Router from './src/router';

const DestinationApp = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default DestinationApp;
