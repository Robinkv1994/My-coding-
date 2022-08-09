import React,{Component} from "react";
import{
    View,Image,Text,ImageBackground,StyleSheet,TextInput,Button,TouchableHighlight
}from 'react-native'
import  Icon  from "react-native-vector-icons/MaterialIcons";


export default class Chemistry extends Component{
    render(){
        return(
            <View style={styles.container} >
               <View style={{height:235,width:'100%',backgroundColor:'#eeeeee'}} >
                    <ImageBackground source={require('../../assets/444.jpg')}style={{height:'100%'}}>
                        <Icon  name="keyboard-arrow-left" size={28} color='red' onPress={()=>this.props.navigation.navigate('Homes')} 
                                style={{height:30,width:30,backgroundColor:'white',margin:20,borderRadius:8,
                                 borderColor:'black',borderWidth:1}}/>
                                 <Text style={{color:'white',fontSize:24,margin:10,fontWeight:'bold'}}>Chemistry</Text>
                        <Text style={{flexDirection:'row',marginLeft:10}}>
                                       <Icon name="radio-button-on"  style={{color:'green',marginTop:10}}/><Text style={{color:'green',fontSize:16}}> 12 chapters       </Text>
                                        <Icon name="radio-button-on"  style={{color:'green'}}/><Text style={{color:'green',fontSize:16}}> 124 Hours</Text>
                         </Text>
                    </ImageBackground>
               </View>

               <View style={{width:311,height:'80%',backgroundColor:'#eeeeee',marginTop:-40,borderRadius:8}} >
                <View style={{height:115,width:311,backgroundColor:'#fff',borderRadius:8}}>
                    <Text onPress={()=>this.props.navigation.navigate('SubDescription')} style={{color:'black',fontSize:18,fontWeight:'bold',margin:20}}>Can you help translate this site into a foreign language </Text>
                            <Text style={{flexDirection:'row',marginLeft:10}}>
                                       <Icon name="radio-button-on"  style={{color:'green',marginTop:10}}/><Text style={{color:'green',fontSize:16}}> 12 chapters       </Text>
                                        <Icon name="radio-button-on"  style={{color:'green'}}/><Text style={{color:'green',fontSize:16}}> 124 Hours</Text>
                            </Text>
                </View>
                <View style={{height:115,width:311,backgroundColor:'#fff',borderRadius:8,marginTop:10}}>
                        <Text style={{color:'black',fontSize:18,fontWeight:'bold',margin:20}}>Can you help translate this site into a foreign language </Text>
                            <Text style={{flexDirection:'row',marginLeft:10}}>
                                       <Icon name="radio-button-on"  style={{color:'green',marginTop:10}}/><Text style={{color:'green',fontSize:16}}> 12 chapters       </Text>
                                        <Icon name="radio-button-on"  style={{color:'green'}}/><Text style={{color:'green',fontSize:16}}> 124 Hours</Text>
                            </Text>
                </View>
                <View style={{height:115,width:311,backgroundColor:'#fff',borderRadius:8,marginTop:10}}>
                        <Text style={{color:'black',fontSize:18,fontWeight:'bold',margin:20}}>Can you help translate this site into a foreign language </Text>
                            <Text style={{flexDirection:'row',marginLeft:10}}>
                                       <Icon name="radio-button-on"  style={{color:'green',marginTop:10}}/><Text style={{color:'green',fontSize:16}}> 12 chapters       </Text>
                                        <Icon name="radio-button-on"  style={{color:'green'}}/><Text style={{color:'green',fontSize:16}}> 124 Hours</Text>
                            </Text>
                </View>
                <View style={{height:115,width:311,backgroundColor:'#fff',borderRadius:8,marginTop:10}}>
                        <Text style={{color:'black',fontSize:18,fontWeight:'bold',margin:20}}>Can you help translate this site into a foreign language </Text>
                            <Text style={{flexDirection:'row',marginLeft:10}}>
                                       <Icon name="radio-button-on"  style={{color:'green',marginTop:10}}/><Text style={{color:'green',fontSize:16}}> 12 chapters       </Text>
                                        <Icon name="radio-button-on"  style={{color:'green'}}/><Text style={{color:'green',fontSize:16}}> 124 Hours</Text>
                            </Text>
                </View>
                <View style={{height:115,width:311,backgroundColor:'#fff',borderRadius:8,marginTop:10}}>
                         <Text style={{color:'black',fontSize:18,fontWeight:'bold',margin:20}}>Can you help translate this site into a foreign language </Text>
                            <Text style={{flexDirection:'row',marginLeft:10}}>
                                       <Icon name="radio-button-on"  style={{color:'green',marginTop:10}}/><Text style={{color:'green',fontSize:16}}> 12 chapters       </Text>
                                        <Icon name="radio-button-on"  style={{color:'green'}}/><Text style={{color:'green',fontSize:16}}> 124 Hours</Text>
                            </Text>
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