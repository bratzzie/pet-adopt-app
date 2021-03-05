import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import PetListScreen from '../screens/PetListScreen';
import PetScreen from '../screens/PetScreen';


const Stack = createStackNavigator();

const Navigation = () => {
    return (
       <NavigationContainer>
           <Stack.Navigator initialRouteName="Home">
               <Stack.Screen name="Home" component={PetListScreen}/>
               <Stack.Screen name="Pet" component={PetScreen} />
           </Stack.Navigator>
       </NavigationContainer>
    )
}

export default Navigation
