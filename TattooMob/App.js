import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import MainSatack from './src/stacks/MainStack';

export default () => {
  return (
     <NavigationContainer>
       <MainSatack/>
     </NavigationContainer>
  );
}



