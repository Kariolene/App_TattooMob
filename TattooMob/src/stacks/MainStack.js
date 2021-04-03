import React from 'react';
import { createNavigatorFactory, createStackNavigator } from '@react-navigation/stack';
import AdmHome from  '../screens/AdmHome';
import AdmConfig from  '../screens/AdmConfig';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="AdmHome" component={AdmHome}/>
        <Stack.Screen name="AdmConfig" component={AdmConfig}/>
    </Stack.Navigator>
  );
}


