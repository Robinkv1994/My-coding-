import React,{Component} from "react";
import{ View, StyleSheet,Text} from 'react-native'

export default class Prof extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.ProfileText}>This is ProfilePage</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'grey',
        justifyContent:'center',
        alignItems:'center'
        
    },
    ProfileText:{
        color:'black',
        fontWeight:'bold',
        fontSize:20
        
        
    }
})

