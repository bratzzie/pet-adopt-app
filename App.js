import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image, Text , Button} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PetListScreen from './app/screens/PetListScreen';
import PetScreen from './app/screens/PetScreen';
import ThirdPage from './app/screens/ThirdPage';

// Import Custom Sidebar
import CustomSidebarMenu from './app/components/CustomSidebarMenu';


import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Icon from 'react-native-vector-icons/Ionicons';

import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
     let iconName;
     if (route.name === 'Dogs') {
        iconName = focused
        ? 'dog-side'
        : 'dog-side';
      } else if (route.name === 'Cats') {
        iconName = focused
        ? 'cat'
        : 'cat';
      } else if( route.name === 'Parrots'){
        iconName = focused 
        ? 'twitter' 
        : 'twitter';
      }  else if( route.name === 'Bunnies'){
        iconName = focused 
        ? 'rabbit' 
        : 'rabbit';
      }
      
return <MaterialCommunityIcons name={iconName} size={size} color={color}     />;
        },
      })}
      tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      }}
    >
        <Tab.Screen name="Dogs" component={TabAScreen} />
        <Tab.Screen name="Cats" component={TabBScreen} />
        <Tab.Screen name="Parrots" component={TabBScreen} />
        <Tab.Screen name="Bunnies" component={TabBScreen} />



    </Tab.Navigator>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>No New Notifications!</Text>
      <Button 
      onPress={() => navigation.goBack()}
      title="Go back home"
      />
    </View>
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


const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default function App() {
  return (
    <NavigationContainer>

       <Drawer.Navigator initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="Home"
          options={{
            drawerIcon: config => <MaterialCommunityIcons
            size={23}
            name="paw" color="grey"/>, drawerLabel: 'Adoption' }}
          component={HomeScreen}
        />
        <Drawer.Screen
          name="Notifications"
          options={{  drawerIcon: config => <MaterialCommunityIcons
            size={23}
            name="water" color="grey"/>,
            drawerLabel: 'Donation' }}
          component={NotificationsScreen}
        />
        <Drawer.Screen
          name="Favorites"
          options={{ drawerIcon: config => <MaterialCommunityIcons
            size={23}
            name="heart" color="grey"/>, drawerLabel: 'Favorites' }}
          component={NotificationsScreen}
        />
        <Drawer.Screen
          name="Messages"
          options={{ drawerIcon: config => <MaterialCommunityIcons
            size={23}
            name="message-text" color="grey"/>, drawerLabel: 'Messages' }}
          component={NotificationsScreen}
        />
        <Drawer.Screen
          name="Profile"
          options={{ drawerIcon: config => <Ionicons
            size={23}
            name="ios-person-sharp" color="grey"/>, drawerLabel: 'Profile' }}
          component={NotificationsScreen}
        />

      </Drawer.Navigator>

      
    </NavigationContainer>
  )
}