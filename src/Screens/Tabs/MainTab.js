
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../Home/index'
import AdviceScreen from '../Advices';
import CallScreen from '../Call';

const Tab = createBottomTabNavigator();

function MainTabScreen() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'TabA') {
            iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'TabB') {
            iconName = focused
            ? 'ios-list-box'
            : 'ios-list';
        }
        return <Ionicons name={iconName} size={size} color={color}     />;
            },
        })}
        tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Advice" component={AdviceScreen} />
            <Tab.Screen name="Call" component={CallScreen} />
        </Tab.Navigator>
    );
}


const Stack = createStackNavigator();
function TabAScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabA Home" component={TabADetailsScreen} />
      <Stack.Screen name="TabA Details" component={Details} />
    </Stack.Navigator>
  );
}
function TabADetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        Welcome to TabA page!
      </Text>
      <Button 
      onPress={() => navigation.navigate('TabA Details')}
      title="Go to TabA Details"
      />
    </View>
  );
}
function Details() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        TabA Details here!
      </Text>
    </View>
  );
}
function TabBScreen() {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>
        Welcome to TabB page!
      </Text>
    </View>
  );
}

export default MainTabScreen;