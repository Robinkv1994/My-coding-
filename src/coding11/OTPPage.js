import React,{Component} from "react";
import{
    View,Image,Text,ImageBackground,StyleSheet,TextInput,Button,TouchableHighlight,TouchableOpacity
}from 'react-native'
import  Icon  from "react-native-vector-icons/MaterialIcons";


export default class OTPPage extends Component{
    render(){
        return(
            <View style={styles.container} >
                <Text style ={{color :'black',fontSize:28,fontWeight:'bold',marginTop:20}}
                >TRICON InfoTech</Text>
                <View style={styles.childContainer}>
               
                    <Image source={require('../../assets/codinglogo.png')} style={{height:'100%',width:'100%'}}></Image>
                </View>
                <Text style={{color:'#210103',fontSize:18,fontWeight:'bold',marginTop:50}}>VERIFICATION CODE</Text>
                <Text>PLEASE TYPE VERIFICATION CODE SEND TO</Text>
                <Text style={{color:'black',fontSize:24,marginTop:40,fontWeight:'bold'}}>6383303073</Text>

                <View style={styles.underView}>
                    <View style={{flexDirection:'row',backgroundColor:'#eeeeee',marginTop:20,backgroundColor:'transparent',height:'13%'}}>
                        <TextInput style={{marginLeft:30,width:'13%',backgroundColor:'#94484d',elevation:4,borderRadius:8,alignContent:'center',fontSize:24}}secureTextEntry>
                            <Text style={{color:'black',fontSize:28}}></Text>
                        </TextInput>
                        <TextInput style={{marginLeft:5,width:'13%',backgroundColor:'#94484d',elevation:4,borderRadius:8,alignContent:'center',fontSize:24}}>
                            <Text style={{color:'black',fontSize:28}}></Text>
                        </TextInput>
                        <TextInput style={{marginLeft:5,width:'13%',backgroundColor:'#94484d',elevation:4,borderRadius:8,alignContent:'center',fontSize:24}}>
                            <Text style={{color:'black',fontSize:28}}></Text>
                        </TextInput>
                        <TextInput style={{marginLeft:5,width:'13%',backgroundColor:'#94484d',elevation:4,borderRadius:8,alignContent:'center',fontSize:24}}>
                            <Text style={{color:'black'}}></Text>
                        </TextInput>
                        <TextInput style={{marginLeft:5,width:'13%',backgroundColor:'#94484d',elevation:4,borderRadius:8,alignContent:'center',fontSize:24}}>
                            <Text style={{color:'black',fontSize:28}}></Text>
                        </TextInput>
                        <TextInput style={{marginLeft:5,marginRight:10,width:'13%',backgroundColor:'#94484d',elevation:4,borderRadius:8,alignContent:'center',fontSize:24}}>
                            <Text style={{color:'black',fontSize:28}}></Text>
                        </TextInput>
                    
                        
                        
                    </View>
                    <View style={{height:70,backgroundColor:'transparent',marginTop:70,justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('StudentDetails')}underlayColor="transparent"
                         style={{height:'70%',width:'90%',backgroundColor:'green',marginLeft:20,elevation:5,borderRadius:12,alignContent:'center',alignItems:'center'}}>
                            <Text style={{color:'white',fontSize:18,marginTop:10}}>Resend OTP</Text>
                        </TouchableOpacity>
                        
                        <Text style={{color:'black',fontSize:20, marginTop:20,marginLeft:150,color:'grey'}}>Resend after 28 sec</Text>


                        <View style={{justifyContent:'center',flexDirection:'row'}} >
                        
                        <Icon name="phone" size={24} color='green' style={{marginLeft:10}}></Icon>
                        
                        <Text style={{color:'green',fontSize:20,marginLeft:10}}>
                        
                        Contact Us</Text>
                       
                        
                        </View>
                        

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
        height:'20%',
        width:'40%',
        marginTop:20,
        
    },
    underView:{
        width:'100%',
        height:'50%',
        marginTop:53,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:'#7a171e'
    }
})