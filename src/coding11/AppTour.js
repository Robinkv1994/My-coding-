import React,{Component} from "react";
import{
    View,Image,Text,ImageBackground,StyleSheet,TextInput,Button,TouchableHighlight,
}from 'react-native'
import  Icon  from "react-native-vector-icons/MaterialIcons";


export default class AppTour extends Component{
    functionOne(){
        this.props.navigation.navigate('Drawer')
    }
   functionTwo(){
    this.props.navigation.navigate('MyBottomTab')
   }
   functionCombined(){
    functionOne();
    functionTwo();

   }
    render(){
        return(
            <View style={styles.container} >
                <View style={{height:'60%',width:'95%',backgroundColor:'#2297d6',borderRadius:12,alignItems:'center',marginTop:10}}>
                    <Image source={require('../../assets/animation.gif')} style={{height:'60%',width:'95%',marginTop:100}}></Image>

                </View>
                <View style={{height:'40%',width:'100%',backgroundColor:'#210103',alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:24,marginTop:20,fontWeight:'bold'}}>Unlock the power of your people</Text>
                    <Text style={{margin:10,fontSize:18,color:'white'}}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
                        an unknown printer took a galley of type and scrambled it to make a type specimen book.
                         It has survived not only five centuries,</Text>
                         <View  style={{height:'21%',width:'100%',marginTop:20,alignItems:'center',backgroundColor:'#210103'}}>
                                <View style={{backgroundColor:'#eeeeee',height:60,width:60,alignItems:'center',borderRadius:8,marginTop:3}} >
                                        <View style={{backgroundColor:'red',height:20,width:30,marginLeft:29,borderTopEndRadius:8}}>
                                            
                                        <TouchableHighlight  style={{backgroundColor:'green',height:53,width:53,marginLeft:-26,marginTop:3,borderRadius:8,alignItems:'center'}}>
                                            <Icon name="east" size={30} color='white' style={{marginTop:10}}  onPress={()=>this.functionOne()}></Icon>
                                        </TouchableHighlight>
                                        </View> 
                                        
                                </View>
                         </View>

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
        backgroundColor:'#210103'
        
    },
    childContainer:{
        height:'20%',
        width:'40%',
        marginTop:20,
        
    },
    underView:{
        width:'100%',
        height:'50%',
        marginTop:53,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:'#7a171e'
    }
})