import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function AnxietyMenuScreen({route,navigation}){

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button 
        title="Qu’est ce que l'anxiété ?"
        onPress={() => navigation.navigate("Qu’est ce que l'anxiété ?")}>
      </Button>
    <Button
        title="Effets physiques et mentaux"
        onPress={() => navigation.navigate("Effets physiques et mentaux")}>
    </Button>
    <Button
      title="Causes et théories"
      onPress={() => navigation.navigate("Causes et théories")}>
     </Button>
  </View>
  );
}

export default AnxietyMenuScreen;
