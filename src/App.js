import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainTabScreen from './Screens/Tabs/MainTab'
import BreathingScreen from './Screens/Breathing/index'
import AdviceScreen from './Screens/Advices/index'
import ProfilScreen from './Screens/Profil/index'
import AnxietyScreen from './Screens/Anxiety/index'
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons,FontAwesome } from '@expo/vector-icons';

const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const AdviceStack = createStackNavigator();
const AnxietyStack = createStackNavigator();
const BreathingStack = createStackNavigator();
const ProfilStack = createStackNavigator();

function HomeStackScreen({navigation}){
  return(
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={MainTabScreen} options={{
          headerLeft:()=>(
            <FontAwesome.Button  size={25} name="bars" onPress={()=>{navigation.openDrawer()}}></FontAwesome.Button>
          )
        }}/>
    </HomeStack.Navigator>
    )
}

function AdviceStackScreen({navigation}){
  return(
    <AdviceStack.Navigator>
        <AdviceStack.Screen name="Advices" component={AdviceScreen}  options={{
          headerLeft:()=>(
            <FontAwesome.Button  size={25} name="bars" onPress={()=>{navigation.openDrawer()}}></FontAwesome.Button>
          )
        }}/>
    </AdviceStack.Navigator>
    )
}
function AnxietyStackScreen({navigation}){
  return(
    <AnxietyStack.Navigator>
        <AnxietyStack.Screen name="Anxiety" component={AnxietyScreen}  options={{
          headerLeft:()=>(
            <FontAwesome.Button  size={25} name="bars" onPress={()=>{navigation.openDrawer()}}></FontAwesome.Button>
          )
        }}/>
    </AnxietyStack.Navigator>
    )
}
function BreathingStackScreen({navigation}){
  return(
    <BreathingStack.Navigator>
        <BreathingStack.Screen name="Breathing" component={BreathingScreen}  options={{
          headerLeft:()=>(
            <FontAwesome.Button  size={25} name="bars" onPress={()=>{navigation.openDrawer()}}></FontAwesome.Button>
          )
        }}/>
    </BreathingStack.Navigator>
    )
}
function ProfilStackScreen({navigation}){
  return(
    <ProfilStack.Navigator>
        <ProfilStack.Screen name="Profil" component={ProfilScreen} options={{
          headerLeft:()=>(
            <FontAwesome.Button  size={25} name="bars" onPress={()=>{navigation.openDrawer()}}></FontAwesome.Button>
          )
        }}/>
    </ProfilStack.Navigator>
    )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Advices" component={AdviceStackScreen} />
        <Drawer.Screen name="Anxiety" component={AnxietyStackScreen} />
        <Drawer.Screen name="Breathing" component={BreathingStackScreen} />
        <Drawer.Screen name="Profil" component={ProfilStackScreen} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  )
}