import React,{Component} from "react";
import{
    View,
    Text,
    FlexContent,
    TouchableHighlight,
    StyleSheet,
    ImageBackground,

}from 'react-native'

export default class Chat extends Component{
   
    render(){
        return(
            <View style={{justifyContent:'center',backgroundColor:'blue'}}>
                <ImageBackground source={require('C:/Users/Dell/FirstProject/assets/3072.jpg')} style={styles.backgroundImage}>
                <Text style={{color:'black',fontWeight:'bold',alignItems:'center',justifyContent:'center',marginLeft:10}} >
                    This Is Chat Page 
                    </Text>
                
                </ImageBackground>
            </View>
        )
    } 
}
const styles = StyleSheet.create({
    backgroundImage:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'


    }
})
