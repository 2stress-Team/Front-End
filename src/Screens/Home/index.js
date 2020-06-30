import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Accueil</Text>
        <Button
          title="Avoir des conseils"
          onPress={() => navigation.navigate('Advices')}>
        </Button>
        <Button
          title="Comprendre l'anxiété"
          onPress={() => navigation.navigate('Anxiety')}>
        </Button>
        <Button
          title="Gérer ma respiration"
          onPress={() => navigation.navigate('Breathing')}>
        </Button>
    </View>
    );
  }

export default HomeScreen;