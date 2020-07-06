import * as React from 'react';
import { Button, View, Text,Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function CallScreen({route,navigation}){
  let phoneNumber = '0651507634'
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Êtes vous sûr de vouloir appeler Yassine ?</Text>
      <Button
        title="Oui"
        onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>
      </Button>
      <Button
        title="Non"
        onPress={() => navigation.navigate("Accueil")}>
      </Button>
    </View>
  );
}

export default CallScreen;