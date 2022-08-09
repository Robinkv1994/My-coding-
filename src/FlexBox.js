import React,{Component} from "react";
import{
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableHighlight
  
}from 'react-native'
class FlexContent extends Component{
    render(){
        return(
            <Text style={styles.FlexText}>Learn<Text style={styles.text_2}> {this.props.name} </Text>very easily</Text>
        )
    }
}
export default class Flex extends Component{
    constructor(){
        super();
        this.state={
            a_text:'HELLO REACT'
        }
    }
    updateText(){
        this.setState({
            a_text:'Welcome To React Native'
        })
    }
   render(){
    return(
        <View style={styles.container}>
            <TouchableHighlight style={styles.buttonInput}
            onPress={()=>this.updateText()}
            underlayColor='grey'>
                <Text style={styles.buttonText}>UPDATE</Text>
            </TouchableHighlight>
            <Text style={styles.text}>{this.state.a_text}</Text>

            <FlexContent name='React native'></FlexContent>
        </View>
    )
   }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    // height:'100%',
    // width:'100%',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
   
  },
 
  
  buttonInput:{
    height:40,
    width:100,
    backgroundColor:'green',
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10

  },
  buttonText:{
    
    color:'#fff',
    fontWeight:'bold'


  },
  text:{
    color:'black',
    marginTop:20,
    fontWeight:'bold'
  },
  FlexText:{
    color:'#000',
    fontSize:14,
    fontWeight:'bold',
    marginTop:20
  },
  text_2:{
    color:'blue'
  }

 
})