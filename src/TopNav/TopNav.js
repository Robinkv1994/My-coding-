import React,{Component} from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import Videos from "./Videos";
import Chapter from "./Chapter";
import QN from "./QN";
import Resources from "./Resources";
import { SearchBar } from "react-native-screens";
import { View ,TextInput,Image,Text,TouchableHighlight} from "react-native";
import Find from "./Find";
import Icon from 'react-native-vector-icons/FontAwesome5'


const Stack = createNativeStackNavigator()
const TopTab = createMaterialTopTabNavigator()
const search = createMaterialTopTabNavigator()

function MyStack (){
    return(
        <Stack.Navigator>
                

            <Stack.Screen
            name="TopTab"
            component={TopTab}/>
            
    
        </Stack.Navigator>
    )
}
function MyTopTab(){
    return(
        
        <TopTab.Navigator
        screenOptions={{
            tabBarPressColor:'brown',
            tabBarStyle:{backgroundColor:'beige'},
            
            
        }}>
            
            
                    
            <TopTab.Screen
            name="Videos"
            component={Videos}
            options={{
                
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'black',
                tabBarIcon:({focused})=>
                focused?
                <Icon name="camera" size={18}color='red'/>:<Icon name="camera" size={18} color='black'/>
                
                
            }}/>
            <TopTab.Screen
            name="Chapter"
            component={Chapter}
            options={{
                tabBarIcon:({focused})=>
                focused?
                <Icon name="globe" size={18} color='red'/>:<Icon name="globe" size={18} color='black'/>, 
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'black',
               
                }}/>
                
            
            <TopTab.Screen
            name="Resources"
            component={Resources}
            options={{
                
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'black',
                tabBarIcon:({focused})=>
                focused?
                <Icon name="money-check" size={18} color='red'/>:<Icon name="money-check" size={18} color='black'/>
                
                }}/>
                <TopTab.Screen
            name="QN Bank"
            component={QN}
            options={{
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'black',
                tabBarIcon:({focused})=>
                focused?
                <Icon name="university" size={18} color='red'/>:<Icon name="university" size={18} color='black'/>}}/>

        </TopTab.Navigator>
    )
}


export default function TopNav(){
    return(
        <NavigationContainer >
            <View style={{height:80,backgroundColor:'#eee'}}>
                <View style={{backgroundColor:'white',width:380,height:50,margin:20,borderRadius:12}}>
                    <TouchableHighlight underlayColor={'transparent'}>
                        <Icon name="search" size={16} style={{marginTop:15,marginLeft:10}}></Icon>
                    </TouchableHighlight>
                    <TextInput style={{width:340,backgroundColor:'transparent',marginLeft:39,marginTop:-31,height:50}}
                    placeholder='Search for services'>

                    </TextInput>

                </View>



            {/* <TouchableHighlight style={{padding:10,marginTop:25,borderRadius:8,backgroundColor:'white',margin:10}}>
            
                
                <Icon name="search" size={18} >
                    <Text>
                <TextInput style={{backgroundColor:'red',borderRadius:12,width:400}}placeholder='search for data'
                placeholderTextColor={'green'}></TextInput>
                </Text>
                </Icon>
                
            </TouchableHighlight> */}
            </View>
            
        <MyTopTab/>
        </NavigationContainer>
    )
}
