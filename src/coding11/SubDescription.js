import React,{Component} from "react";
import{
    View,Image,Text,ImageBackground,StyleSheet,TextInput,Button,TouchableHighlight
}from 'react-native'
import  Icon  from "react-native-vector-icons/MaterialIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Videos from "./TopTab/Videos";
import ChapterTest from "./TopTab/ChapterTest";
import Resources from "./TopTab/Resources";
import QN from "./TopTab/QN";
import Chemistry from "./Chemistry";

const MyTopTab = createMaterialTopTabNavigator()
const Stack = createNativeStackNavigator()

  function MyStack(){
    return(
        <Stack.Navigator>
                    <Stack.Screen
                    name="MyTopTab"
                    component={TopTab}
                    options={{headerShown:false}}/>
                    
                </Stack.Navigator>

    )
}
function TopTab (){
    return(
    
    <MyTopTab.Navigator
     screenOptions={{
        tabBarIndicatorStyle:{backgroundColor:'green',borderWidth:1},
        tabBarContentContainerStyle:{backgroundColor:'#0c2a45'},
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'white'
        
        
    }}
    >
   
    <MyTopTab.Screen
    name="Videos"
    component={Videos}/>
    <MyTopTab.Screen
    name="Chapter Test"
    component={ChapterTest}/>
    <MyTopTab.Screen
    name="Resources"
    component={Resources}/>
    <MyTopTab.Screen
    name="QN"
    component={QN}/>
</MyTopTab.Navigator>
    )

}

export default function SubDescription(){
    return(
        <NavigationContainer independent={true}>
             <View style={{height:235,width:'100%',backgroundColor:'white'}}>
                    <ImageBackground source={require('../../assets/444.jpg')}style={{height:'100%'}}>
                        <View style={{flexDirection:'row'}}>
                        <Icon name="keyboard-arrow-left" size={28} color='green' onPress={()=>this.props.navigation.navigate('Chemistry')} 
                                style={{height:30,width:30,backgroundColor:'white',marginTop:20,marginLeft:20,borderRadius:8,
                                 borderColor:'black',borderWidth:1,flexDirection:'row'}}/>
                                 <Text style={{color:'white',fontSize:18,marginTop:20,marginLeft:20,fontWeight:'bold'}}>Chemistry</Text></View>
                                 <Text style={{color:'white',fontSize:24,margin:20}}>There are many variations of passages of Lorem 
                            Ipsum available</Text>
                        <Text style={{flexDirection:'row',marginLeft:20}}>
                            
                                       <Icon name="radio-button-on"  style={{color:'green',marginTop:10}}/><Text style={{color:'green',fontSize:16}}> 12 chapters       </Text>
                                        <Icon name="radio-button-on"  style={{color:'green'}}/><Text style={{color:'green',fontSize:16}}> 124 Hours</Text>
                         </Text>

                         <View style={{flexDirection:'row',height:50,width:'100%'}}>
              
              </View>
              
                    </ImageBackground>
               </View>
              
            <MyStack></MyStack>
        </NavigationContainer>
    )
}
 



const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        backgroundColor:'#eeeeee'
        
    }
    
})