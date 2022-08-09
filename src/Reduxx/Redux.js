import React,{Component} from "react";
import{
    View,Image,Text,ImageBackground,StyleSheet,TextInput,Button,TouchableHighlight
}from 'react-native'
import  Icon  from "react-native-vector-icons/MaterialIcons";


export default class Redux extends Component{
    state = {count:10};

    decrement(){
        let {count}=this.state;
        count--;
        this.setState({count})
    }
    increment(){
        let{count}=this.state;
        count++;
        this.setState({count})
    }

    render(){
        const {count}= this.state;
        return(
            <View style={styles.container} >
             <View style={{flexDirection:'row'}}>
            <Button title="decrement" onPress={()=>this.decrement()}></Button>
            <Text >       {count}         </Text>
            <Button title="increment"onPress={()=>this.increment()}></Button>
            
            </View>  
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
        
    },
    childContainer:{
        height:'20%',
        width:'40%',
        marginTop:20,
        
    },
    
})