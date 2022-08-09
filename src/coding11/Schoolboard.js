import React,{Component} from "react";
import{
    View,Image,Text,ImageBackground,StyleSheet,TextInput,Button,TouchableHighlight,TouchableOpacity
}from 'react-native'
import  Icon  from "react-native-vector-icons/MaterialIcons";


export default class Schoolboard extends Component{
    
    render(){
        return(
            <View style={styles.container} >
                <Text style ={{color :'black',fontSize:28,fontWeight:'bold',marginTop:55}}
                >TRICON InfoTech</Text>
                <View style={styles.childContainer}>
               
                    <Image source={require('../../assets/codinglogo.png')} style={{height:'100%',width:'100%'}}></Image>
                </View>


                <Text style={{color:'#210103',fontSize:24,fontWeight:'bold',marginTop:150}}>Select Your School Board</Text>
                
                

                <View style={styles.underView}>
                    <View style={{flexDirection:'column',backgroundColor:'#eeeeee',marginTop:20,
                    backgroundColor:'transparent',height:45}}>
                        <TextInput placeholder="Select Board" style={{marginLeft:20,width:'90%'
                        ,backgroundColor:'#94484d',elevation:4,marginTop:10,height:45,
                        borderRadius:8,alignContent:'center',fontSize:18}}secureTextEntry>
                            <Text style={{color:'black',fontSize:18}}></Text>
                        </TextInput>
                        <TextInput placeholder="Select Class" style={{marginLeft:20,
                        height:45,width:'90%'
                        ,backgroundColor:'#94484d',elevation:4,marginTop:20,
                        borderRadius:8,alignContent:'center',fontSize:18}}>
                            <Text style={{color:'black',fontSize:18}}></Text>
                        </TextInput>
                       

                    
                        
                        
                    </View>
                    <View style={{height:50,backgroundColor:'transparent',marginTop:100,justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('AppTour')}underlayColor="transparent"
                         style={{height:50,width:'90%',backgroundColor:'green',marginLeft:20,elevation:5,borderRadius:12,alignContent:'center',alignItems:'center'}}>
                            <Text style={{color:'white',fontSize:18,padding:15,}}>Continue</Text>
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
        height:'20%',
        width:'40%',
        marginTop:20,
        
    },
    underView:{
        width:'100%',
        height:'40%',
        marginTop:35,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:'#7a171e'
    }
})