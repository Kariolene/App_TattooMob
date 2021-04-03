import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AdmHome   from  '../screens/AdmHome/AdmHome';
import AdmConfig from  '../screens/AdmConfig/AdmConfig';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="AdmHome" component={AdmHome}/>
        <Stack.Screen name="AdmConfig" component={AdmConfig}/>
    </Stack.Navigator>
  );
}


