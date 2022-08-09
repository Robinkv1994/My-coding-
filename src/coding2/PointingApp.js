import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import{  createNativeStackNavigator} from '@react-navigation/native-stack'


import Tea from "./Tea";
import Favorites from "./Favorites";
import Icons from 'react-native-vector-icons/MaterialIcons'
import { View , Image, } from "react-native";
import Coffee from "./Coffee";
import Details from "./Details";

const MyStack = createNativeStackNavigator()
const MyTopNav = createMaterialTopTabNavigator()

function Stack (){
    return(
    <MyStack.Navigator>
        <MyStack.Screen
        name="TopNav"
        component={TopNav}
        options={{headerShown:false}}/>
        <MyStack.Screen name="Details"
        component={Details}
        options={{headerShown:false}}/>

        
    </MyStack.Navigator>
    )
}
function TopNav (){
    return(
    <MyTopNav.Navigator
    screenOptions={{
        tabBarStyle:{backgroundColor:'#6cb3f5',height:80,alignContent:'center',justifyContent:'center'},
        tabBarActiveTintColor:'black',
        tabBarInactiveTintColor:'white',
        tabBarPressColor:'transparent'
        

        
    }}>
        <MyTopNav.Screen name="Coffee"
        component={Coffee}
        options={{
            tabBarIcon:({focused})=>
            focused?
            <Icons name="menu" size={24} color='green'/>:<Icons name="menu" size={24} color='black'/>
        }}/>
        <MyTopNav.Screen
        name="Tea"
        component={Tea}
        options={{
            tabBarIcon:({focused})=>
            focused?
            <Icons name="free-breakfast" size={24} color='red'/>:<Icons name="free-breakfast" size={24} color='black'/>
        }}/>
        <MyTopNav.Screen
        name="Favorites"
        component={Favorites}
        options={{
            tabBarIcon:({focused})=>
            focused?
            <Icons name="luggage" size={24}color='yellow'/>:<Icons name="luggage" size={24}color='black'/>
        }}/>
            

        
    </MyTopNav.Navigator>
    )
}
export default function PointingApp(){
    return(
    <NavigationContainer>
        <View style={{width:'100%',height:60,backgroundColor:'#deefff'}}>
            
            <View style={{width:100, height:30,marginTop:10,marginLeft:10}}>
                <Image source={require('./../../assets/pngpng.png')} style={{height:50,width:90}}></Image>

            </View>
        </View>
        <Stack/>
    </NavigationContainer>
    )
}