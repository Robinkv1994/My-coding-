import React,{Component} from "react";
import{
    View,
    Text,
    FlexContent,
    TouchableHighlight,
    StyleSheet

}from 'react-native'

export default class Search extends Component{
   
    render(){
        return(
            <View style={{justifyContent:'center',backgroundColor:'grey',alignItems:'center',flex:1}}>
                <Text style={{color:'black',fontWeight:'bold'}} >
                    search for categories 
                    </Text>
                
            
            </View>
        )
    } 
}
