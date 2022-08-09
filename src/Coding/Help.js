import React,{Component} from "react";
import {
    View,StyleSheet,ImageBackground,Image,Text
    
} from 'react-native'

export default class Help extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textView}> Contact For Support </Text>
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
        fontSize:18,
        fontWeight:'500'
    }
})