import React,{Component} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMateralTopTabNavigator} from '@react-navigation/material-top-tabs'

import Home from "./Home";
import About from "./About";
import Help from "./Help";
import Logout from "./Logout";
import Profile from "./Profile";
import Records from "./Records";
import Refund from "./Refund";
import Settings from "./Settings";
import Dashbord from "./Dashboard";
import Wallet from "./Wallet";
import DrawerContent from "./DrawerContent";
import { Icon } from "react-native-vector-icons/FontAwesome";

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function MyStack (){
    return(
        <Stack.Navigator>
            
            <Stack.Screen
            name="Drawer"
            component={MyDrawer}
            options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
function MyDrawer (){
    return(
        <Drawer.Navigator
        drawerContent={(props)=> <DrawerContent {...props}/>}>
            <Drawer.Screen
            name='Dashbord'
            component={Dashbord}
            options={{headerShown:true,
            }}/>
            <Drawer.Screen
            name="Home"
            component={Home}
            options={{
                title:'Home Page',
                headerBackTitle:'back '
            }}/>
            <Drawer.Screen
            name="Profile"
            component={Profile}/>
            <Drawer.Screen
            name="Wallet"
            component={Wallet}/>
            <Drawer.Screen
            name="Records"
            component={Records}/>
            <Drawer.Screen
            name="Refund And Policies"
            component={Refund}/>
            <Drawer.Screen
            name="Settings"
            component={Settings}/>
            <Drawer.Screen
            name="About Us"
            component={About}/>
            <Drawer.Screen
            name="Help"
            component={Help}/>
            

        </Drawer.Navigator>
    )
}
export default function Draw(){
return(
    <NavigationContainer>
            <MyStack/>
    </NavigationContainer>
)
}
