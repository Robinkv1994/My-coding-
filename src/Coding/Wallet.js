import React,{Component} from "react";
import {
    View,StyleSheet,ImageBackground,Image,Text
    
} from 'react-native'

export default class Wallet extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textView}>Wallet balance RS : 2000 </Text>
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