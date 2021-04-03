
/*import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';

export default function App() {
  return (
     <NavigationContainer>
       <MainStack/>
     </NavigationContainer>
  );
}*/


import * as React from 'react';
import { View, Text, Button, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AdmHome({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Configirar" onPress={() => navigation.navigate('AdmConfig')}></Button>
    </View>
  );
}

function AdmConfig({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Configurações</Text>
      <Button title="Volte" onPress={() => navigation.navigate('AdmHome')}></Button>
    </View>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="AdmHome" component={AdmHome}/>
          <Stack.Screen name="AdmConfig" component={AdmConfig}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



