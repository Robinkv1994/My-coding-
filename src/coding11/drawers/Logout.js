import React,{Component} from "react";
import{
    View,Image,Text,ImageBackground,StyleSheet,TextInput,Button,TouchableHighlight
}from 'react-native'
import  Icon  from "react-native-vector-icons/MaterialIcons";


export default class Logout extends Component{
    render(){
        return(
            <View style={styles.container} >
                <Text style ={{color :'black',fontSize:28,fontWeight:'bold',marginTop:20}}
                >TRICON InfoTech</Text>
               

                
                            

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignItems:'center'
        
    }
    
})