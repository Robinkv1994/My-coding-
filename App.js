// import React from "react";
// import { NavigationContainer }from '@react-navigation/native'
// import { createNativeStackNavigator}from '@react-navigation/native-stack'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


// import Icon from 'react-native-vector-icons/FontAwesome';

// import LoginPage from "./src/LoginPage";
// import Register from "./src/Register";

// import Dhome from "./src/Drawer/Dhome";
// import Prof from "./src/Drawer/Prof";
// import CustomDrawer from "./src/Drawer/CustomDrawer";
// import Cart from "./src/Tab/Cart";
// import Order from "./src/Tab/Order";
// import Category from "./src/Tab/Category";
// import Search from "./src/Tab/Search";
// import Chat from "./src/BottomTab/Chat";
// import Call from "./src/BottomTab/Call";
// import Status from "./src/BottomTab/Status";

// const Stack =createNativeStackNavigator()
// const Drawer = createDrawerNavigator()
// const Tab = createMaterialTopTabNavigator()
// const BottomTab = createBottomTabNavigator()


// function MyStack(){
  
//   return(
    
//     <Stack.Navigator>
//       <Stack.Screen
//       name = 'Register'
//       component={Register}
//       options={{headerShown:true}}/>
//       <Stack.Screen 
//       name='LoginPage'
//       component={LoginPage}/>
//       {/* <Stack.Screen
//       name='Home'
//       component={Home}/> */}
//     <Stack.Screen
//     name='Drawer'
//     component={MyDrawer}/>
//     <Stack.Screen 
//     name= 'Tab'
//     component={MyTab}
//     options={{headerShown:false}}/>
//     <Stack.Screen
//     name='BottomTab'
//     component={MyBottomTab}
//     options={{headerShown:true}}/>
//     </Stack.Navigator>
//   )
// }
// function MyDrawer(){
  
  
//   return(
    
//     <Drawer.Navigator drawerContent={()=><CustomDrawer/>}>
      
//       <Drawer.Screen
//         name='Dhome'
//         component={Dhome}
//         options={{headerShown:true}}
//       />
//       <Drawer.Screen
//       name = 'Prof'
//       component={Prof}
//       options={{headerShown:true}}
//       />
//     </Drawer.Navigator>
//   )
// }
// function MyTab(){
//   return(
//   <Tab.Navigator
//   screenOptions={{
//     tabBarLabelStyle:{fontSize:12,fontWeight:'500'},
//     tabBarItemStyle:{width:100},
//     tabBarStyle:{backgroundColor:'white'}
//   }}>
//   <Tab.Screen
//     name='Cart'
//     component={Cart}
//     options={{
//       tabBarActiveTintColor:'red',
//       tabBarInactiveTintColor:'grey',
//       tabBarIcon :({focused})=>
//       focused? <Icon name = 'cart-arrow-down' size ={24} color='red'/>:<Icon name = 'cart-arrow-down' size ={24} color='grey'/>
//     }}/>
//   <Tab.Screen
//     name='Category'
//     component={Category}
//     options={{
//       tabBarActiveTintColor:'red',
//       tabBarInactiveTintColor:'grey',
//       tabBarIcon : ({focused})=>
//       focused? <Icon name= 'rocket' size={24} color='red'/>: <Icon name= 'rocket' size={24} color='grey'/>
//     }}/>
//   <Tab.Screen
//     name='Order'
//     component={Order}
//     options={{
//       tabBarActiveTintColor:'red',
//       tabBarInactiveTintColor:'grey',
//       tabBarIcon:({focused})=>
//       focused?<Icon name ='first-order' size={24} color='red'/>:<Icon name ='first-order' size={24} color='grey'/>
//     }}/>
//   <Tab.Screen
//     name='Search'
//     component={Search}
//     options={{
//       tabBarActiveTintColor:'red',
//       tabBarInactiveTintColor:'grey',
//       tabBarIcon:({focused})=>
//       focused?<Icon name ='search' size={24} color='red'/>:<Icon name ='search' size={24} color='grey'/>
//     }}
//     />

//   </Tab.Navigator>
//   )
// }
// function MyBottomTab(){
//   return(
//     <BottomTab.Navigator 
//     screenOptions={{
//       tabBarLabelStyle:{fontSize:12,fontWeight:'500'},
//       tabBarItemStyle:{width:100},
//       tabBarStyle:{backgroundColor:'black'},
      

//     }}>
//       <BottomTab.Screen
//       name='Call'
//       component={Call}
//       options={{
//         tabBarActiveTintColor:'red',
//       tabBarInactiveTintColor:'grey',
//         tabBarIcon:({focused})=> 
//         focused?<Icon name='phone' size={24} color='red'/>:<Icon name='phone' size={24} color='white'/>
//       }}/>
//     <BottomTab.Screen 
//       name='Chat'
//       component={Chat}
//       options={{
//         tabBarActiveTintColor:'red',
//       tabBarInactiveTintColor:'grey',
//         tabBarIcon:({focused})=>
//         focused?<Icon name='rocket' size={24} color='red'/>:<Icon name='rocket' size={24} color='white'/>
//       }}/>
//     <BottomTab.Screen
//       name='Status'
//       component={Status}
//       options={{
//         tabBarActiveTintColor:'red',
//       tabBarInactiveTintColor:'grey',
//         tabBarIcon:({focused})=>
//         focused?<Icon name='tags' size={24} color='red'/>:<Icon name='tags' size={24} color='white'/>
//       }}/>
//     </BottomTab.Navigator>
//   )
// }

// export default function App(){
//   return(
//     <NavigationContainer>
//       <MyStack/>
//     </NavigationContainer>
//   )
// }