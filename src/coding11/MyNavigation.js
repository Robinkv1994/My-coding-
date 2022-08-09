import React,{Component} from "react";
import { NavigationContainer,DrawerActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator ,DrawerItemList,DrawerContentScrollView,DrawerItem} from "@react-navigation/drawer";
import { createMaterialTopTabNavigator ,MaterialTopTabView} from "@react-navigation/material-top-tabs";
import { View ,ImageBackground,Text,Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



import WelcomePage from "./WelcomePage";
import OTPPage from "./OTPPage";
import StudentDetails from "./StudentDetails";
import Schoolboard from "./Schoolboard";
import AppTour from "./AppTour";
import InHome from "./InHome";
import Analytics from "./drawers/Analytics";
import ExamCorner from "./drawers/ExamCorner";
import Downloads from "./drawers/Downloads";
import Logout from "./drawers/Logout";
import Notification from "./drawers/Notification";
import Referrals from "./drawers/Referrals";
import ShareApp from "./drawers/ShareApp";
import Subcriptions from "./drawers/Subcriptions";
import CustomizedDrawer from "./drawers/CustomizedDrawer";
import Chemistry from "./Chemistry";
import SubDescription from "./SubDescription";
import Videos from "./TopTab/Videos";
import ChapterTest from "./TopTab/ChapterTest";
import Resources from "./TopTab/Resources";
import QN from "./TopTab/QN";
import Contact from "./BottomTab/Contact";
import Exam from "./BottomTab/Exam";
import Profile from "./BottomTab/Profile";
import Recent from "./BottomTab/Recent";
import DraweProfile from "./drawers/DrawerProfile";



const MyStack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
// const MyTopTab = createMaterialTopTabNavigator()
const MyBottomTab = createBottomTabNavigator()




function Stack(){
    return(
        <MyStack.Navigator>
            
            <MyStack.Screen
            name="WelcomePage"
            component={WelcomePage}
            options={{headerShown:false}}/>
            <MyStack.Screen
            name="OTPPage"
            component={OTPPage}
            options={{headerShown:false}}/>
            <MyStack.Screen
            name="StudentDetails"
            component={StudentDetails}
            options={{headerShown:false}}/>
            <MyStack.Screen
            name="Schoolboard"
            component={Schoolboard}
            options={{headerShown:false}}/>
            <MyStack.Screen
            name="AppTour"
            component={AppTour}
            options={{headerShown:false}}/>
            
            <MyStack.Screen
            name="Chemistry"
            component={Chemistry}
            options={{headerShown:false}}/>
             
            
          
            <MyStack.Screen
            name="Drawer"
            component={MyDrawer}
            options={{headerShown:false}}/>
            <MyStack.Screen
            name="SubDescription"
            component={SubDescription}
            options={{headerShown:false}}/>
            {/* <MyStack.Screen
            name="SubDescription"
            component={SubDescription}
            options={{headerShown:false}}/> */}
            <MyStack.Screen
            name="MyBottomTab"
            component={BottomTab}
            options={{headerShown:false}}/>

        </MyStack.Navigator>
    )
}
function MyDrawer (){
    return(
        <Drawer.Navigator 
        drawerContent={(props)=> <CustomizedDrawer{...props}/>}
        // <View style={{flex:1,borderTopEndRadius:24,borderBottomEndRadius:24}}>
        //                 <View style={{height:200,width:'100%',backgroundColor:'white', borderTopEndRadius:24}}>

        //                     <View style={{height:100,width:'100%',marginTop:100,}} >
        //                         <View style={{flexDirection:'row'}}>
        //                         <Image source={require('../../assets/sachin.jpg')} style={{height:50,width:50,borderRadius:50,margin:20,borderWidth:2,borderColor:'green'}}></Image>
        //                         <Text style={{color:'black',marginLeft:10,marginTop:20,fontSize:18,fontWeight:'bold',flexDirection:'column'}}>Aron Taylor </Text>
        //                         <Icon name="keyboard-arrow-right" size={24} style={{margin:20}}></Icon>
                               
        //                         </View>
        //                         <Text style={{color:'black',marginLeft:100,marginTop:-40}}>ID : 675309</Text>
        //                     </View>
        //                         <View style={{backgroundColor:'#eeeeee',height:100,flexDirection:'row'}}>
        //                             <Icon name="check-box-outline-blank" size={30} color='green' style={{margin:30}}/>
        //                             <Text style={{marginTop:30,fontSize:18,fontWeight:'bold'}}
        //                             onPress={()=>this.props.navigation.navigate('')}>Analytics</Text>
        //                         </View>
        //                 </View>
        // </View>
        // }
        screenOptions={{
            drawerStyle:{
                position:'absolute',
               
                borderBottomEndRadius:24,
                borderTopEndRadius:24
            }
        }}>
            
             <Drawer.Screen name="Homes"
            component={BottomTab}
            options={{headerShown:false}}/>
            <Drawer.Screen name="Analytics"
            component={Analytics}
            options={{headerShown:false}}/>
            <Drawer.Screen name="Downloads"
            component={Downloads}
            options={{headerShown:false}}/>
            <Drawer.Screen name="ExamCorner"
            component={ExamCorner}
            options={{headerShown:false}}/>
            <Drawer.Screen name="Logout"
            component={Logout}
            options={{headerShown:false}}/>
            <Drawer.Screen name="Notification"
            component={Notification}
            options={{headerShown:false}}/>
            <Drawer.Screen name="Referrals"
            component={Referrals}
            options={{headerShown:false}}/>
            <Drawer.Screen name="ShareApp"
            component={ShareApp}
            options={{headerShown:false}}/>
            <Drawer.Screen name="Subcriptions"
            component={Subcriptions}
            options={{headerShown:false}}/>
            
        </Drawer.Navigator>
    )
}
// function TopTab (){
//     return(
        

//         <MyTopTab.Navigator tabBar={(props)=><SubDescription{...props}/>}>
           
//             <MyTopTab.Screen
//             name="Videos"
//             component={Videos}/>
//             <MyTopTab.Screen
//             name="ChapterTest"
//             component={ChapterTest}/>
//             <MyTopTab.Screen
//             name="Resources"
//             component={Resources}/>
//             <MyTopTab.Screen
//             name="QN"
//             component={QN}/>
//         </MyTopTab.Navigator>

//     )
// }
function BottomTab(){
    return(
        <MyBottomTab.Navigator screenOptions={{
            headerShown:false,
            
            tabBarShowLabel:false,
            tabBarStyle:{
                position:'absolute',
                marginBottom:25,
                marginLeft:20,
                marginRight:20,
                borderRadius:12,
                elevation:4,
                height:90,
                shadowColor:'red',
                
            },
            tabBarIcon:{
                
            }
            
            
        }}>
            <MyBottomTab.Screen
            name="Home"
            component={InHome}
            options={{ headerShown:false,
                
                tabBarLabelStyle:{fontSize:18},
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=>
                focused?
                <Icon name="home" size={24} color='red'  />:<Icon name="home" size={24} color='grey' />
            }}
            />
              <MyBottomTab.Screen
            name="Recent"
            component={Recent}
            options={{
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'grey',
                tabBarLabelStyle:{fontSize:18},
                tabBarIcon:({focused})=>
                focused?
                <Icon name="play-arrow" size={26}  color='red'/>:<Icon name="play-arrow" size={26}  color='grey'/>
            }}
            />
              <MyBottomTab.Screen
            name="Exam"
            component={Exam}
            options={{
                tabBarLabelStyle:{fontSize:18},
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=>
                focused?
                <Icon name="event-note" size={24} color='red' />:<Icon name="event-note" size={24} color='grey' />
            }}/>
              <MyBottomTab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarLabelStyle:{fontSize:18},
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=>
                focused?
                <Icon name="person" size={24} color='red'/>:<Icon name="person" size={24} color='grey' />
            }}/>
            <MyBottomTab.Screen
            name="Contact"
            component={Contact}
            options={{
                tabBarLabelStyle:{fontSize:18,color:'black'},
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=>
                focused?
                <Icon name="email" size={24} color='red' />:<Icon name="email" size={24} color='grey'/>
            }}/>
        </MyBottomTab.Navigator>
    )
}

export default function MyNavigation(){
    return(
        <NavigationContainer independent={true}>
            
         <Stack/>
                
            
            
        </NavigationContainer>
        
    )
}
