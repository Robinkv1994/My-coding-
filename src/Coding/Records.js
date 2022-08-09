import React,{Component} from "react";
import {
    View,StyleSheet,ImageBackground,Image,Text
    
} from 'react-native'

export default class Records extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textView}>No Records Found </Text>
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