import React,{Component} from "react";
import {
    View,StyleSheet,ImageBackground,Image,Text, TouchableHighlight,TextInput,StatusBar
    
} from 'react-native'

export default class SearchScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.status}/>
                
                <Text style={styles.textView}
                onPress={()=>this.props.navigation.navigate('MyStack')}></Text>

                
                
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
    status:{
        backgroundColor:'green',
        borderRadius:8,
        width:80,
        height:30,
        alignItems:'center'
    }
})