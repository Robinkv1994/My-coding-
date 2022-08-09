import React,{Component} from "react";
import{
    View,
    Text,
    FlexContent,
    TouchableHighlight,
    StyleSheet

}from 'react-native'

export default class Order extends Component{
   
    render(){
        return(
            <View style={{justifyContent:'center',backgroundColor:'yellow',alignItems:'center',flex:1}}>
                <Text style={{color:'black',fontWeight:'bold'}} >
                    Welcome to order page
                    </Text>
                
            
            </View>
        )
    } 
}
