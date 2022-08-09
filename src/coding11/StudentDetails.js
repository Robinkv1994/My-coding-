import React,{Component} from "react";
import{
    View,Image,Text,ImageBackground,StyleSheet,TextInput,Button,TouchableHighlight,TouchableOpacity
}from 'react-native'

import  Icon  from "react-native-vector-icons/FontAwesome";
import {Dropdown} from 'react-native-material-dropdown'


export default class StudentDetails extends Component{
    render(){
        return(
            <View style={styles.container} >
                <Text style ={{color :'black',fontSize:28,fontWeight:'bold',marginTop:20}}
                >TRICON InfoTech</Text>
                <View style={styles.childContainer}>
               
                    <Image source={require('../../assets/codinglogo.png')} style={{height:'100%',width:'100%'}}></Image>
                </View>
                <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>Student Details</Text>
                <View style={styles.underView}>
                <TextInput placeholder="Full Name" 
                         style={{padding:10, width:'90%',marginLeft:20,height:'10%',
                        backgroundColor:'#94484d',elevation:4,borderRadius:8,fontSize:18,marginTop:40}}>
                           <Text style={{color:'black',fontSize:28}}></Text>
                        </TextInput>
                        <TextInput placeholder="Email" 
                         style={{padding:10,width:'90%',marginLeft:20,height:'10%',
                        backgroundColor:'#94484d',elevation:4,borderRadius:8,fontSize:18,marginTop:20}}>
                           <Text style={{color:'black',fontSize:28}}></Text>
                        </TextInput>
                        
                        <TextInput placeholder="Select State" 
                         style={{padding:10,width:'90%',marginLeft:20,height:'10%',
                        backgroundColor:'#94484d',elevation:4,borderRadius:8,fontSize:18,marginTop:20}}>
                           <Text style={{color:'black',fontSize:28}}>
                            
                           </Text>
                           <Icon ></Icon>
                        </TextInput>

                        <TextInput placeholder="PinCode" 
                         style={{padding:10,width:'90%',marginLeft:20,height:'10%',
                        backgroundColor:'#94484d',elevation:4,borderRadius:8,fontSize:18,marginTop:20}}>
                           <Text style={{color:'black',fontSize:28}}></Text>
                        </TextInput>
                        <TouchableOpacity style={{height:'10%',width:'90%',backgroundColor:'green',marginLeft:20,elevation:5,
                        borderRadius:12,alignContent:'center',alignItems:'center',marginTop:40}}
                          onPress={()=>this.props.navigation.navigate('Schoolboard')}
                          underlayColor='transparent'>
                        
                            <Text style={{color:'white',fontSize:18,padding:15}} >Register</Text>
                        </TouchableOpacity>



                </View>

                
                            

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignItems:'center'
        
    },
    childContainer:{
        height:'20%',
        width:'40%',
        marginTop:20,
        
    },
    underView:{
        width:'100%',
        height:'64%',
        marginTop:53,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:'#7a171e'
    }
})