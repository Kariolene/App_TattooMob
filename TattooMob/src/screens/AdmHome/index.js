
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { Container } from './style';



export default function AdmHome({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
        <Button title="Go Config" onPress={ () => navigation.navigate('AdmConfig') }/>
      </View>
    );
  }
  