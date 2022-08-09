import React, { Component } from "react";
import{
    View,
    Text,
    StyleSheet,
    ScrollView,Image,ImageBackground
} from 'react-native'

export default class Details extends Component{
    render(){
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
                                <Text></Text>
                            </View>
                            <View style={{height:30 ,width:190,backgroundColor:'white',marginLeft:10,marginTop:10}}/>
                            <View style={{height:30 ,width:190,backgroundColor:'white',marginLeft:10,marginTop:10}}/>
                            <View style={{height:30 ,width:190,backgroundColor:'white',marginLeft:10,marginTop:40}}/>

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
