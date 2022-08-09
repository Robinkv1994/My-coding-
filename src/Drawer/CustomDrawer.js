import React,{Component} from "react";
import{ View, StyleSheet,Text} from 'react-native'

export default class CustomDrawer extends Component{
    render(){
        return(
            <View style={{flex:1,borderTopEndRadius:24,borderBottomEndRadius:24}}>
                        <View style={{height:200,width:'100%',backgroundColor:'white', borderTopEndRadius:24}}>

                            <View style={{height:100,width:'100%',marginTop:100,}} >
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../../assets/sachin.jpg')} style={{height:50,width:50,borderRadius:50,margin:20,borderWidth:2,borderColor:'green'}}></Image>
                                <Text style={{color:'black',marginLeft:10,marginTop:20,fontSize:18,fontWeight:'bold',flexDirection:'column'}}>Aron Taylor </Text>
                                <Icon name="keyboard-arrow-right" size={24} style={{margin:20}}></Icon>
                               
                                </View>
                                <Text style={{color:'black',marginLeft:100,marginTop:-40}}>ID : 675309</Text>
                            </View>
                                <View style={{backgroundColor:'#eeeeee',height:100,flexDirection:'row'}}>
                                    <Icon name="check-box-outline-blank" size={30} color='green' style={{margin:30}}/>
                                    <Text style={{marginTop:30,fontSize:18,fontWeight:'bold'}}
                                    onPress={()=>this.props.navigation.navigate('Analytics')}>Analytics</Text>
                                </View>
                        </View>
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
    hometext:{
        color:'black',
        fontWeight:'bold',
        fontSize:20
        
        
    }
})

