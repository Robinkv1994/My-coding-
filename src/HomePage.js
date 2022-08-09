import React from "react";
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator}from '@react-navigation/native-stack'

import LoginPage from "./LoginPage";
import Register from "./Register";
import Home from "./Home";

const Homes = createNativeStackNavigator()

function MyStack (){
    return(
    <Homes.Navigator>
        <Homes.Screen
        name='Register'
        component={Register}/>
        <Homes.Screen
        name='LoginPage'
        component={LoginPage}/>
        <Homes.Screen
        name='Home'
        component={Home}/>
    </Homes.Navigator>
    )
}
export default function HomePage(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}