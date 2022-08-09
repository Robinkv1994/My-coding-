import React, { Component } from "react";
import{
    View,
    Text,
    StyleSheet,
    ScrollView,Image,ImageBackground,TouchableHighlight
} from 'react-native'


export default class Favorites extends Component{
    //single time call
    constructor(){
        console.log('constructer called')
        super();
        this.state={
            headerText:null
        }
    }
    updateText(){
        this.setState({
            headerText : 'text updated'
        })
    }
    //multiple time calling
    //calling while update state props or anything..
    static getDerivedStateFromProps(){
        
        console.log('derivedState')
        return null
    }
    //single call
    componentDidMount(){
        console.log('componentDidMount')
        
    }
    componentWillUnmount(){
        console.log('component unmount called')
    }
    // shouldComponentUpdate(){
    //     console.log('shouldComponentUpdate Called')
    //     return null
    // }


    //multiple call 
    componentDidUpdate(){
        console.log('componenDid update')
    }


    render(){
        console.log('render called')
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                <View style={{height:"100%",width:'100%'}}>
                <View style={{flexDirection:'row',height:300,width:'95%',backgroundColor:'white',margin:10}}>
                    <View style={{backgroundColor:'#eeeeee',height:'80%',width:150,margin:10}}>
                        <ImageBackground source={require('../../assets/3072.jpg')} style={{height:'100%',width:'100%'}}/>
                    </View>
                    <View style={{backgroundColor:'#eeeeee',height:'80%',width:210,margin:10,margin:10}}>
                        <View style={{flexDirection:'column'}}>
                            <View style={{height:30 ,width:190,backgroundColor:'white',marginLeft:10,marginTop:10}}>
                                <Text style={{color:'black'}}>{this.state.headerText}</Text>
                            </View>
                            <View style={{height:30 ,width:190,backgroundColor:'white',marginLeft:10,marginTop:10}}/>
                            <View style={{height:30 ,width:190,backgroundColor:'white',marginLeft:10,marginTop:10}}/>
                            <View style={{height:30 ,width:190,backgroundColor:'white',marginLeft:10,marginTop:40}}>
                                <TouchableHighlight style={{backgroundColor:'green',height:'100%',width:'100%',alignItems:'center'
                                ,justifyContent:'center'}} underlayColor='transparent' onPress={()=>this.updateText()}>
                                    <Text style={{color:'white',fontWeight:'bold'}}>Button</Text>
                                </TouchableHighlight>
                            </View>

                        </View>
                        
                </View>
                        

                </View>
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'#eeeeee',
        justifyContent:'center',
        alignItems:'center'

       
    },
    scrollContainer:{
        height:'100%',
        width:'100%'
    }
})
