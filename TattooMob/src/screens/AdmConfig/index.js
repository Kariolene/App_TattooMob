import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { Container } from './style';



export default function AdmConfig({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>AdmConfig</Text>
        <Button title="Volte" onPress={ () => navigation.navigate('AdmHome') }/>
      </View>
    );
  }
