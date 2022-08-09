import React,{Component} from "react";
import {
    View,StyleSheet,ImageBackground,Image,Text, TouchableHighlight
    
} from 'react-native'

export default class Dashbord extends Component{
    render(){
        return(
            <View style={styles.container}>
                
                

                <Text style={styles.textView}> </Text>
                
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#086673'
        
    },
    textView:{
        fontSize:18,
        fontWeight:'500',
        color:'black'
    },
    Button:{
        backgroundColor:'green',
        borderRadius:8,
        width:80,
        height:30,
        alignItems:'center'
    }
})