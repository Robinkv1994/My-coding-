import React,{Component} from "react";
import{
    View,
    Text,
    FlexContent,
    TouchableHighlight,
    StyleSheet

}from 'react-native'

export default class Category extends Component{
   
    render(){
        return(
            <View style={{justifyContent:'center',backgroundColor:'red',alignItems:'center',flex:1}}>
                <Text style={{color:'black',fontWeight:'bold'}} >
                    Welcome to category page
                    </Text>
                
            
            </View>
        )
    } 
}
