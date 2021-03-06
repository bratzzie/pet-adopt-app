import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image, Text , Button, Platform} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styled from 'styled-components/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-navigation';
import PetListScreen from './app/screens/PetListScreen';
import PetScreen from './app/screens/PetScreen';

import dogs from './app/data/Dogs'
import cats from './app/data/Cats'
import birds from './app/data/Birds'
import bunnies from './app/data/Bunnies'
import photo from './assets/girl.jpg'
// Import Custom Sidebar
import CustomSidebarMenu from './app/components/CustomSidebarMenu';


import { MaterialCommunityIcons } from '@expo/vector-icons'; 

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
      } else if( route.name === 'Birds'){
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
        <Tab.Screen name="Dogs" component={DogsScreen} />
        <Tab.Screen name="Cats" component={CatsScreen} />
        <Tab.Screen name="Birds" component={BirdsScreen} />
        <Tab.Screen name="Bunnies" component={BunniesScreen} />



    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function HeaderWrapper() {
  

  return (
    <SafeAreaView>
    <Header style={{marginTop: Platform.OS == "ios" ? 50 : 0}}>
        <Row>
          <Location>Location</Location>
        </Row>
        <Row>
        <MaterialCommunityIcons name="table-of-contents" size={30} color="#515151" 
        style={{cursor: 'pointer'}}
        />
         <Column>
            <Ionicons name="location-sharp" size={24} color="tomato" />
            <City>Kyiv, </City>
            <Country>Ukraine</Country>
        </Column>
        <Avatar source={photo} />
        
        </Row>
    </Header>
    </SafeAreaView>
    
  );
}

function DogsScreen() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Dogs Section"  options={{ 
        headerStyle: {
            height: 100,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          }, headerTitle: props => <HeaderWrapper {...props}  /> }}>
          {props => <PetListScreen {...props} getdata={dogs} />} 
      </Stack.Screen>
       
    </Stack.Navigator>
  );
}



function CatsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cats Section" options={{ headerStyle: {
            height: 100,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          }, 
          headerTitle: props => <HeaderWrapper {...props} /> }}>
          {props => <PetListScreen {...props} getdata={cats} />} 
      </Stack.Screen>
    </Stack.Navigator>
  
  );
}

function BirdsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Birds Section" options={{ headerStyle: {
            height: 100,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          }, headerTitle: props => <HeaderWrapper {...props} /> }}>
        {props => <PetListScreen {...props} getdata={birds} />}
      </Stack.Screen>
       
    </Stack.Navigator>
  
  );
}

function BunniesScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bunnies Section" options={{ headerStyle: {
            height: 100,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          }, headerTitle: props => <HeaderWrapper {...props} /> }}>
        {props => <PetListScreen {...props} getdata={bunnies} />} 
      </Stack.Screen>
    </Stack.Navigator>
  
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
          component={PetScreen}
        />
        <Drawer.Screen
          name="Favorites"
          options={{ drawerIcon: config => <MaterialCommunityIcons
            size={23}
            name="heart" color="grey"/>, drawerLabel: 'Favorites' }}
          component={PetScreen}
        />
        <Drawer.Screen
          name="Messages"
          options={{ drawerIcon: config => <MaterialCommunityIcons
            size={23}
            name="message-text" color="grey"/>, drawerLabel: 'Messages' }}
          component={PetScreen}
        />
        <Drawer.Screen
          name="Profile"
          options={{ drawerIcon: config => <Ionicons
            size={23}
            name="ios-person-sharp" color="grey"/>, drawerLabel: 'Profile' }}
          component={PetScreen}
        />

      </Drawer.Navigator>

      
    </NavigationContainer>
  )
}

const Header = styled.View`
background-color: #fff;
justify-content: center;
align-items: center;
margin-top: 50px;

`

const Row = styled.View`
flex-direction: row;
justify-content: space-around;
width: 100%;`

const Location = styled.Text`
color: #515151;
align-self: center;
transform:translate(5px, 5px);`

const Avatar = styled.Image`
border-radius: 50px;
width: 30px;
height: 30px;
align-self: flex-end;
`

const City = styled.Text`
font-weight: bold;`

const Country = styled.Text`
color: #515151;`

const Column = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;`