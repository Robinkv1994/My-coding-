import React,{Component} from "react";
import{ View, StyleSheet,Text} from 'react-native'

export default class Dhome extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.hometext}>This is HomePage</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
        
    },
    hometext:{
        color:'black',
        fontWeight:'bold',
        fontSize:20
        
        
    }
})

