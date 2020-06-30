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
        <HomeStack.Screen name="Accueil" component={MainTabScreen} options={{
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
        <AdviceStack.Screen name="Conseils" component={AdviceScreen}  options={{
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
        <AnxietyStack.Screen name="Comprendre l'anxiété" component={AnxietyScreen}  options={{
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
        <BreathingStack.Screen name="Gérer ma respiration" component={BreathingScreen}  options={{
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
      <Drawer.Navigator initialRouteName="Accueil">
        <Drawer.Screen name="Accueil" component={HomeStackScreen} />
        <Drawer.Screen name="Avoir des conseils"  component={AdviceStackScreen} />
        <Drawer.Screen name="Comprendre l'anxiété" component={AnxietyStackScreen} />
        <Drawer.Screen name="Gérer ma respiration" component={BreathingStackScreen} />
        <Drawer.Screen name="Profil" component={ProfilStackScreen} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  )
}