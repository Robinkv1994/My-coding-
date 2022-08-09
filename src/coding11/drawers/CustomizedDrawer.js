import React,{Component} from "react";
import{
    View,Image,Text,ImageBackground,StyleSheet,TextInput,Button,TouchableOpacity
}from 'react-native'
import  Icon  from "react-native-vector-icons/MaterialIcons";


export default class CustomizedDrawer extends Component{
    render(){
        return(
            <View style={{flex:1,borderTopEndRadius:24,borderBottomEndRadius:24}}>
                          <View style={{height:40,width:'100%',backgroundColor:'#fff', borderTopEndRadius:24}}>
                                <Icon name="close" size={30} style={{marginLeft:20,marginTop:10}}
                                onPress={()=>this.props.navigation.navigate('Homes')}></Icon>
                            <View style={{height:70,width:'100%',marginTop:50,backgroundColor:'white'}} >
                                <View style={{flexDirection:'row'}}>
                                    <Image source={require('../../../assets/sachin.jpg')} style={{height:50,width:50,borderRadius:50,margin:20,borderWidth:2,borderColor:'green'}}></Image>
                                    <Text style={{color:'black',marginLeft:10,marginTop:20,fontSize:18,fontWeight:'bold',flexDirection:'column'}}>Aron Taylor </Text>
                                     <Icon name="keyboard-arrow-right" size={24} style={{margin:20}}></Icon>
                                   
                                    </View>
                                    <Text style={{color:'black',marginLeft:100,marginTop:-50}}>ID : 675309</Text>
                                </View>
                                    <View style={{backgroundColor:'#fff',height:70,flexDirection:'row',marginTop:10}}>
                                       <Icon name="check-box-outline-blank" size={30} color='green' style={{margin:20}}/>
                                         <Text style={{marginTop:20,fontSize:18,fontWeight:'bold'}}
                                        onPress={()=>this.props.navigation.navigate('Analytics')}>Analytics</Text>
                                    </View>

                                    <View style={{backgroundColor:'#fff',height:70,flexDirection:'row'}}>
                                       <Icon name="check-box-outline-blank" size={30} color='green' style={{margin:20}}/>
                                         <Text style={{marginTop:20,fontSize:18,fontWeight:'bold'}}
                                        onPress={()=>this.props.navigation.navigate('Downloads')}>Downloads</Text>
                                    </View>

                                    <View style={{backgroundColor:'#fff',height:70,flexDirection:'row'}}>
                                       <Icon name="check-box-outline-blank" size={30} color='green' style={{margin:20}}/>
                                         <Text style={{marginTop:20,fontSize:18,fontWeight:'bold'}}
                                        onPress={()=>this.props.navigation.navigate('ExamCorner')}>Exam Corner</Text>
                                    </View>

                                    <View style={{backgroundColor:'#fff',height:70,flexDirection:'row'}}>
                                       <Icon name="check-box-outline-blank" size={30} color='green' style={{margin:20}}/>
                                         <Text style={{marginTop:20,fontSize:18,fontWeight:'bold'}}
                                        onPress={()=>this.props.navigation.navigate('Notification')}>Notification</Text>
                                    </View>

                                    <View style={{backgroundColor:'#fff',height:70,flexDirection:'row'}}>
                                       <Icon name="check-box-outline-blank" size={30} color='green' style={{margin:20}}/>
                                         <Text style={{marginTop:20,fontSize:18,fontWeight:'bold'}}
                                        onPress={()=>this.props.navigation.navigate('Referrals')}>Referrals</Text>
                                    </View>

                                    <View style={{backgroundColor:'#fff',height:70,flexDirection:'row'}}>
                                       <Icon name="check-box-outline-blank" size={30} color='green' style={{margin:20}}/>
                                         <Text style={{marginTop:20,fontSize:18,fontWeight:'bold'}}
                                        onPress={()=>this.props.navigation.navigate('ShareApp')}>ShareApp</Text>
                                    </View>

                                    <View style={{backgroundColor:'#fff',height:70,flexDirection:'row'}}>
                                       <Icon name="check-box-outline-blank" size={30} color='green' style={{margin:20}}/>
                                         <Text style={{marginTop:20,fontSize:18,fontWeight:'bold'}}
                                        onPress={()=>this.props.navigation.navigate('Subcriptions')}>Subcriptions</Text>
                                    </View>

                                    <View style={{backgroundColor:'#fff',height:70,flexDirection:'row'}}>
                                       <Icon name="check-box-outline-blank" size={30} color='green' style={{margin:20}}/>
                                         <Text style={{marginTop:20,fontSize:18,fontWeight:'bold'}}
                                        onPress={()=>this.props.navigation.navigate('WelcomePage')}>Logout</Text>
                                    </View>

                                    <View style={{backgroundColor:'#fff',height:70,flexDirection:'row'}}>
                                      <TouchableOpacity style={{height:60,width:'90%',backgroundColor:'green',margin:15,borderRadius:12,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Enquire Now</Text>
                                      </TouchableOpacity>
                                      
                                    </View>


                            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        backgroundColor:'#eeeeee'
        
    }
    
})