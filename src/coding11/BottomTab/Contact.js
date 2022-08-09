import React,{Component} from "react";
import {
 View,ImageBackground,ScrollView,Text
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Contact extends Component{
    render(){
        return(
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
            <View style={{height:300,width:'90%',backgroundColor:'white',margin:20}}>
                <View style={{height:200,width:'100%'}}>
                    <ImageBackground source={require('../../../assets/12.jpg')} style={{height:'100%',width:'100%'}}></ImageBackground>
                </View>
                <View style={{width:'100%',height:100,flexDirection:'column'}}>
                <Text style={{color:'black',fontSize:18,fontWeight:'bold',margin:10}}>Can you help translate this site into a foreign language </Text>
                            <Text style={{flexDirection:'row',marginLeft:10}}>
                                       <Icon name="radio-button-on"  style={{color:'green',marginTop:10}}/><Text style={{color:'green',fontSize:16}}> 12 chapters       </Text>
                                        <Icon name="radio-button-on"  style={{color:'green'}}/><Text style={{color:'green',fontSize:16}}> 124 Hours</Text>
                            </Text>
                    
                </View>
            </View>
            <View style={{height:300,width:'90%',backgroundColor:'white',margin:20}}>
                <View style={{height:200,width:'100%'}}>
                    <ImageBackground source={require('../../../assets/12.jpg')} style={{height:'100%',width:'100%'}}></ImageBackground>
                </View>
                <View style={{width:'100%',height:100,flexDirection:'column'}}>
                <Text style={{color:'black',fontSize:18,fontWeight:'bold',margin:10}}>Can you help translate this site into a foreign language </Text>
                            <Text style={{flexDirection:'row',marginLeft:10}}>
                                       <Icon name="radio-button-on"  style={{color:'green',marginTop:10}}/><Text style={{color:'green',fontSize:16}}> 12 chapters       </Text>
                                        <Icon name="radio-button-on"  style={{color:'green'}}/><Text style={{color:'green',fontSize:16}}> 124 Hours</Text>
                            </Text>
                    
                </View>
            </View>
            <View style={{height:300,width:'90%',backgroundColor:'white',margin:20}}>
                <View style={{height:200,width:'100%'}}>
                    <ImageBackground source={require('../../../assets/12.jpg')} style={{height:'100%',width:'100%'}}></ImageBackground>
                </View>
                <View style={{width:'100%',height:100,flexDirection:'column'}}>
                <Text style={{color:'black',fontSize:18,fontWeight:'bold',margin:10}}>Can you help translate this site into a foreign language </Text>
                            <Text style={{flexDirection:'row',marginLeft:10}}>
                                       <Icon name="radio-button-on"  style={{color:'green',marginTop:10}}/><Text style={{color:'green',fontSize:16}}> 12 chapters       </Text>
                                        <Icon name="radio-button-on"  style={{color:'green'}}/><Text style={{color:'green',fontSize:16}}> 124 Hours</Text>
                            </Text>
                    
                </View>
            </View>
     

                
            </View>
            </ScrollView>
        )
    }
}