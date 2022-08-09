import React,{Component} from "react";
import{
    View,Image,Text,ImageBackground,StyleSheet,TextInput,Button, TouchableHighlight,TouchableOpacity
}from 'react-native'



export default class WelcomePage extends Component{
    render(){
        return(
            <View style={styles.container} >
                
                <View style={styles.childContainer}>
                    <Image source={require('../../assets/codinglogo.png')} style={{height:'100%',width:'100%'}}></Image>
                </View>
                <Text style={{color:'#210103',fontSize:18,fontWeight:'bold',marginTop:90}}>ENTER YOUR MOBILE NUMBER</Text>
                <Text>WE WILL SEND YOU OTP TO VERIFY</Text>

                <View style={styles.underView}>
                    <View style={{flexDirection:'row',backgroundColor:'#eeeeee',marginTop:50,backgroundColor:'transparent',height:70}}>
                        <TextInput style={{marginLeft:30,width:'13%',backgroundColor:'#94484d',elevation:4,borderRadius:8,alignContent:'center',height:51}}>
                            <Text style={{color:'black',fontSize:18}}>+91</Text>
                        </TextInput>
                        <TextInput placeholder="Mobile Number" 
                         style={{padding:10,width:'70%',marginLeft:5,height:51,
                        backgroundColor:'#94484d',elevation:4,borderRadius:8,fontSize:18}}>
                           <Text style={{color:'black',fontSize:28}}></Text>
                        </TextInput>

                        
                        
                    </View>
                    <View style={{height:70,backgroundColor:'transparent',marginTop:40,justifyContent:'center'}}>
                        <TouchableOpacity style={{height:'70%',width:'85%',backgroundColor:'green',marginLeft:30,elevation:5,
                        borderRadius:12,alignContent:'center',alignItems:'center',marginBottom:50}}
                          onPress={()=>this.props.navigation.navigate('OTPPage')}
                          underlayColor='transparent'>
                        
                            <Text style={{color:'white',fontSize:18,marginTop:10}} >Continue</Text>
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
        alignItems:'center'
        
    },
    childContainer:{
        height:'30%',
        width:'60%',
        marginTop:100,
        
    },
    underView:{
        width:'100%',
        height:'35%',
        marginTop:53,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:'#7a171e'
    }
})