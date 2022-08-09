import React,{Component} from "react";
import {
    View,StyleSheet,ImageBackground,Image,Text, TouchableHighlight
    
} from 'react-native'

export default class Logout extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight >
                    <Text style={styles.textView}>Logout</Text>
                </TouchableHighlight>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%'
    },
    textView:{
        fontSize:12,
        fontWeight:'500'
    }
})