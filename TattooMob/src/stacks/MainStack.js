import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AdmHome from '../screens/AdmHome';

const Stack = createStackNavigator();


export default () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="AdmHome" component={AdmHome}/>

    </Stack.Navigator>
  );
}