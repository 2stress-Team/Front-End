import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Anxiety from './Anxiety'
import Effects from './Effects'
import Theories from './Theories'
import AnxietyMenuScreen from './index'

function AnxietyMenuStack({route,navigation}){

  const MyStack = createStackNavigator();

  return(
      <MyStack.Navigator initialRouteName="Anxiety">
        <MyStack.Screen name="Anxiety" component={AnxietyMenuScreen} />
        <MyStack.Screen name="Qu’est ce que l'anxiété ?" component={Anxiety} />
        <MyStack.Screen name="Effets physiques et mentaux" component={Effects} />
        <MyStack.Screen name="Causes et théories" component={Theories} />
      </MyStack.Navigator>
  );
}

export default AnxietyMenuStack;