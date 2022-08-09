import React,{Component} from "react";
import{
    View,Image,Text,ImageBackground,StyleSheet,TextInput,Button,TouchableHighlight,ScrollView
}from 'react-native'

import  Icon  from "react-native-vector-icons/MaterialIcons";



import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


export default class InHome extends Component{
   

    render(){
       
        return(
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container} >
               
            <View style={{height:200,width:'100%',backgroundColor:'#eeeeee',marginBottom:40}}>
                
                        <ImageBackground source={require('../../assets/444.jpg')}style={{height:'100%'}}>
                           
                <View style={{height:100,width:'100%',flexDirection:"row"}}>
                <Icon name="menu" size={24} color='white' style={{marginTop:40,marginLeft:10}}  onPress={()=>this.props.navigation.navigate('Drawer')}/>
                       <Image source={require('../../assets/codinglogo.png')}  style={{height:50,width:50,margin:30}} ></Image>
                
                <View style={{backgroundColor:'white',marginTop:30, flexDirection:'row',height:45,width:100,marginLeft:160,borderRadius:8,elevation:4,justifyContent:'center',alignItems:'center'}}>
                         <Icon name="fiber-manual-record" size={20} color='#210103'/>
                         <Text style={{color:'black'}}>Classes</Text>
                </View>
                </View>
                        <Text style={{marginLeft:30 ,color:'white'}}>Good Morning</Text>
                        <Text style={{marginLeft:30,marginTop:5,color:'white',fontSize:20,fontWeight:'bold'}}>ARON TAYLOR</Text>
            <View style={{height:64,width:'80%',backgroundColor:'#a13333',
            marginLeft:40,borderRadius:12,marginTop:10,elevation:10}}>
                
                        {/* <ImageBackground source={require('../../assets/123.jpg')}style={{height:'100%'}}> */}

                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'black',marginLeft:10,marginRight:240}}>Classes </Text>
                            <Icon name="keyboard-arrow-down" size={24} color='#210103'style={{marginTop:20}}/>
                           
                        </View>
                            <Text style={{color:'black',fontSize:18,fontWeight:'bold',marginLeft:10,marginTop:-20}}>Plus two science</Text>
                        {/* </ImageBackground> */}
            </View>    
                       
                         </ImageBackground>
           </View>




            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection:'row',height:50, flexDirection:'row',marginTop:25,width:'100%',backgroundColor:'transparent'}}>
               
                <View style={{backgroundColor:'white', flexDirection:'row',height:45,width:100,marginLeft:10,borderRadius:8,elevation:4,justifyContent:'center',alignItems:'center'}}>
                <Icon name="fiber-manual-record" size={20} color='#210103'/>
                    <Text style={{color:'black'}} onPress={()=>this.props.navigation.navigate('Chemistry')}>Chemistry</Text>
                </View>
                <View  style={{backgroundColor:'white', flexDirection:'row',height:45,width:100,marginLeft:20,borderRadius:8,elevation:4,justifyContent:'center',alignItems:'center'}}>
                <Icon name="fiber-manual-record" size={20} color='#210103'/>
                    <Text style={{color:'black'}} onPress={()=>this.props.navigation.navigate('Chemistry')}>Physics</Text>
                </View>
                <View style={{backgroundColor:'white', flexDirection:'row',height:45,width:100,marginLeft:20,borderRadius:8,elevation:4,justifyContent:'center',alignItems:'center'}}>
                <Icon name="fiber-manual-record" size={20} color='#210103'/>
                     <Text style={{color:'black'}} onPress={()=>this.props.navigation.navigate('Chemistry')}>Maths</Text>
                </View>
                <View style={{backgroundColor:'white',height:45, flexDirection:'row',width:100,marginLeft:20,borderRadius:8,elevation:4,justifyContent:'center',alignItems:'center'}}>
                <Icon name="fiber-manual-record" size={20} color='#210103'/>
                      <Text style={{color:'black'}} onPress={()=>this.props.navigation.navigate('Chemistry')}>Biology</Text>
                </View>
                <View style={{backgroundColor:'white', flexDirection:'row', height:45,width:100,marginLeft:20,borderRadius:8,elevation:4,marginRight:10,justifyContent:'center',alignItems:'center'}}>
                <Icon name="fiber-manual-record" size={20} color='#210103'/>
                     <Text style={{color:'black'}} onPress={()=>this.props.navigation.navigate('Chemistry')}>English</Text>
                        
                </View>
               
            </View>
            
            </ScrollView>





            <Text style={{color:'black',marginRight:300,margin:10,fontSize:16}}>Recent courses</Text>

            <View style={{backgroundColor:"transparent",height:130,width:'100%',flexDirection:'row'}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
           
                <View style={{backgroundColor:'#a13333',height:121,width:213,marginLeft:10,borderRadius:8}}>
                    <ImageBackground source={require('../../assets/12.jpg')} style={{height:121,width:213}}></ImageBackground>
                </View>
                <View style={{backgroundColor:'#a13333',height:121,width:213,marginLeft:10,borderRadius:8}}>
                <ImageBackground source={require('../../assets/12.jpg')} style={{height:121,width:213}}></ImageBackground>
                </View>
                <View style={{backgroundColor:'#a13333',height:121,width:213,marginLeft:10,borderRadius:8}}>
                <ImageBackground source={require('../../assets/12.jpg')} style={{height:121,width:213}}></ImageBackground>
                </View>
                
            
            </ScrollView>
            </View>


            <View style={{backgroundColor:"transparent",height:450,width:'100%',flexDirection:'row'}}>
            <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
           
                <View style={{backgroundColor:'#a13333',height:367,width:238,marginLeft:10,borderRadius:8}}>
                    <View style={{height:80,width:80,backgroundColor:'#fcacac',margin:20,borderRadius:50}}>
                    <Image source={require('../../assets/12.jpg')} style={{height:'100%',width:'100%',borderRadius:50}}></Image>
                    </View>
                             <Text style={{color:'white',marginLeft:10,fontSize:18,fontWeight:'bold'}}>Target Live Classes</Text>
                    
                                 <Text style={{color:'white',margin:10}}>In publishing and graphic design, Lorem ipsum is a placeholder t
                                 ext commonly used 
                                    to demonstrate the visual
                                     form of a document or</Text>
                                <View style={{height:50,width:150,margin:40,borderRadius:127}}>
                            <Button title="Book a Free Class" color={'green'}></Button>
                        </View>
                </View>


                <View style={{backgroundColor:'#a13333',height:367,width:238,marginLeft:10,borderRadius:8}}>
                         <View style={{height:80,width:80,backgroundColor:'#fcacac',margin:20,borderRadius:50}}>
                         <Image source={require('../../assets/12.jpg')} style={{height:'100%',width:'100%',borderRadius:50}}></Image>
                         </View>
                                <Text style={{color:'white',marginLeft:10,fontSize:18,fontWeight:'bold'}}>Target Live Classes</Text>
                    
                                <Text style={{color:'white',margin:10}}>In publishing and graphic design, Lorem ipsum is a placeholder t
                                     ext commonly used 
                                  to demonstrate the visual
                                     form of a document or</Text>
                         <View style={{height:50,width:150,margin:40}}>
                            <Button title="Book a Free Class" color={'green'}></Button>
                         </View>
                </View>


                <View style={{backgroundColor:'#a13333',height:367,width:238,marginLeft:10,borderRadius:8}}>
                        <View style={{height:80,width:80,backgroundColor:'#fcacac',margin:20,borderRadius:50}}>
                        <Image source={require('../../assets/12.jpg')} style={{height:'100%',width:'100%',borderRadius:50}}></Image>
                        </View>
                              <Text style={{color:'white',marginLeft:10,fontSize:18,fontWeight:'bold'}}>Target Live Classes</Text>
                    
                                <Text style={{color:'white',margin:10}}>In publishing and graphic design, Lorem ipsum is a placeholder t
                                   ext commonly used 
                                    to demonstrate the visual
                                      form of a document or</Text>
                         <View style={{height:50,width:150,margin:40}}>
                            <Button title="Book a Free Class" color={'green'}></Button>
                         </View>
                </View>


                <View style={{backgroundColor:'#a13333',height:367,width:238,marginLeft:10,borderRadius:8}}>
                        <View style={{height:80,width:80,backgroundColor:'#fcacac',margin:20,borderRadius:50}}>
                            <Image source={require('../../assets/12.jpg')} style={{height:'100%',width:'100%',borderRadius:50}}></Image>
                        </View>
                                    <Text style={{color:'white',marginLeft:10,fontSize:18,fontWeight:'bold'}}>Target Live Classes</Text>
                    
                                    <Text style={{color:'white',margin:10}}>In publishing and graphic design, Lorem ipsum is a placeholder t
                                          ext commonly used 
                                         to demonstrate the visual
                                              form of a document or</Text>
                         <View style={{height:50,width:150,margin:40}}>
                            <Button title="Book a Free Class" color={'green'}></Button>
                         </View>
                </View>
               
           
            </ScrollView>

            </View>
            </View>
            </ScrollView>
            
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:24
        
    },
    childContainer:{
        height:'20%',
        width:'40%',
        marginTop:20,
        
    },
    
})