import React,{Component} from "react";
import {
 View,ImageBackground,Text,ScrollView,Image,TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Profile extends Component{
    render(){
        return(
            <ScrollView scrollToOverflowEnabled>
                
            
            <View style={{flex:1,backgroundColor:'white'}}>
                     <View style={{height:300,width:'100%',backgroundColor:'white'}} >
                    <ImageBackground source={require('../../../assets/444.jpg')}style={{height:'100%'}}>
                
                              <View style={{flexDirection:'row'}}> 
                                 <Text style={{color:'white',fontSize:24,marginLeft:175,marginTop:30,fontWeight:'bold'}}>Profile</Text>
                        
                                       <Icon name="notifications-none" size={30} style={{color:'white',marginTop:30,marginLeft:60}}/>
                                        <Icon name="apps" size={30}  style={{color:'red',marginTop:30,marginLeft:50,backgroundColor:'white',borderRadius:8}}/>
                              </View> 
                    </ImageBackground>
               </View>


         {/* image appending */}
         
               <View style={{height:'100%'}}>
                    <View style={{backgroundColor:'white',height:900,width:'90%',marginLeft:20,marginTop:-200,borderRadius:8,elevation:3}}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{height:60,width:60,backgroundColor:'#eeeeee',margin:30,borderRadius:50}}>
                            <Image source={require('../../../assets/sachin.jpg')} style={{height:'100%',width:'100%',borderRadius:50,borderColor:'red',borderWidth:1}}></Image>
                        </View>
                        <Text style={{marginTop:30,fontSize:18,fontWeight:'bold',color:'black'}}>Aron Taylor</Text>
                       </View>
                       <Text style={{marginLeft:120,fontSize:16,marginTop:-60}}>ID : 245854</Text>

     {/* description  */}
                       <Text style={{color:'black',margin:30,fontSize:18,fontWeight:'bold'}}>Personal Info</Text>
                       <View style={{flexDirection:'column',height:640,width:'100%',backgroundColor:'white'}}>


                                    <View style={{flexDirection:'row',backgroundColor:'#fff',height:60,width:'100%',justifyContent:'space-between',borderBottomWidth:0.5,borderTopWidth:0.8}}>
                                        <Text style={{marginLeft:30,marginTop:15,fontSize:18}}>Account Settings</Text>
                                        <Text style={{marginTop:15,marginRight:120,color:'black',fontSize:18}}>Aron Taylor</Text>
                                    </View>

                                    <View style={{flexDirection:'row',backgroundColor:'#fff',height:60,width:'100%',justifyContent:'space-between',borderBottomWidth:0.5}}>
                                        <Text style={{marginLeft:30,marginTop:15,fontSize:18}}>Email</Text>
                                        <Text style={{marginTop:15,marginRight:50,color:'black',fontSize:18}}>arontaylor@gmail.com</Text>
                                    </View>

                                    <View style={{flexDirection:'row',backgroundColor:'#fff',height:60,width:'100%',justifyContent:'space-between',borderBottomWidth:0.5}}>
                                        <Text style={{marginLeft:30,marginTop:15,fontSize:18}}>Number</Text>
                                        <Text style={{marginTop:15,marginRight:120,color:'black',fontSize:18}}>9675643256</Text>
                                    </View>
{/* course details */}
                                    <View style={{flexDirection:'row',backgroundColor:'white',height:60,width:'100%',justifyContent:'space-between',borderBottomWidth:0.8}}>                                  
                                        <Text style={{marginTop:15,marginLeft:30,color:'black',fontSize:18,fontWeight:'bold'}}>Course Info</Text>
                                    </View>
{/*  */}
                                    <View style={{flexDirection:'row',backgroundColor:'#fff',height:60,width:'100%',justifyContent:'space-between',borderBottomWidth:0.5}}>
                                        <Text style={{marginLeft:30,marginTop:15,fontSize:18}}>Center</Text>
                                        <Text style={{marginTop:15,marginRight:140,color:'black',fontSize:18}}>Inmakes </Text>
                                    </View>

                                    <View style={{flexDirection:'row',backgroundColor:'#fff',height:60,width:'100%',justifyContent:'space-between',borderBottomWidth:0.5}}>
                                        <Text style={{marginLeft:30,marginTop:15,fontSize:18}}>Course</Text>
                                        <Text style={{marginTop:15,marginRight:90,color:'black',fontSize:18}}>Plus Two Science</Text>
                                    </View>

                                    <View style={{flexDirection:'row',backgroundColor:'#fff',height:60,width:'100%',justifyContent:'space-between',borderBottomWidth:0.5}}>
                                        <Text style={{marginLeft:30,marginTop:15,fontSize:18}}>Payment Status</Text>
                                        <Text style={{marginTop:15,marginRight:170,color:'black',fontSize:18}}>Free</Text>
                                    </View>

                                    <View style={{flexDirection:'row',backgroundColor:'#fff',height:60,width:'100%',justifyContent:'space-between',borderBottomWidth:0.5}}>
                                        <Text style={{marginLeft:30,marginTop:15,fontSize:18}}>Expiry Date</Text>
                                        <Text style={{marginTop:15,marginRight:109,color:'black',fontSize:18}}>Not Applicable</Text>
                                    </View>

                                    {/* buttons */}

                                   <TouchableOpacity style={{height:60,width:'98%',backgroundColor:'green',borderRadius:8,margin:3}}>
                                    <View style={{flexDirection:'row',height:'100%',width:'100%'}}>
                                    <Icon name="payment" size={30} color='red' style={{margin:15}}></Icon>
                                    <Text style={{ color:'black', margin:12,fontSize:22,fontWeight:'bold'}}>Custom Payment</Text>
                                    <Icon name="chevron-right" size={30}  color='red' style={{margin:15,marginLeft:100}}></Icon>
                                    </View>
                                   </TouchableOpacity>


                                   <TouchableOpacity style={{height:60,width:'98%',backgroundColor:'green',marginTop:5,borderRadius:8,margin:3}}>
                                   <View style={{flexDirection:'row',height:'100%',width:'100%'}}>
                                   <Icon name="people" size={30} color='red' style={{margin:15}}></Icon>
                                    <Text style={{ color:'black', margin:12,fontSize:22,fontWeight:'bold'}}>Refferals</Text>
                                    <Icon name="chevron-right" size={30}  color='red' style={{margin:15,marginLeft:150}}></Icon>
                                   
                                    </View>

                                   </TouchableOpacity>




                                    
                       
                       </View>

                       
                       
                       
                       
                    </View>
               </View>

            </View>
            </ScrollView>
        )
    }
}