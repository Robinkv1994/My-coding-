import React,{Component} from "react";
import {
    View,StyleSheet,ImageBackground,Image,Text, TouchableHighlight
    
} from 'react-native'

export default class DrawerContent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.profilesec}>
                    <Image source={require('C:/Users/Dell/FirstProject/assets/crown.png')} style={styles.Image}></Image>
                    <View style={styles.profilename}>
                        <Text style={styles.profiletext}>Robin.kv</Text>
                        <TouchableHighlight style={styles.gold}>
                            <Text style={styles.goldText}>Gold</Text>
                            
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.buttonText}>Invite</Text>
                    </TouchableHighlight>
                    <Text style={styles.coins}> Total Coins
                    <Text style={styles.coins}> Coin : 20000</Text>
                    </Text>

                </View>
                
                <Text style={styles.textView}
                onPress={()=>this.props.navigation.navigate('Home')}> Home </Text>
                <Text style={styles.textView}
                onPress={()=>this.props.navigation.navigate('Profile')}> Profile </Text>
                <Text style={styles.textView}
                onPress={()=>this.props.navigation.navigate('Wallet')}> Wallet Balance </Text>
                <Text style={styles.textView}
                onPress={()=>this.props.navigation.navigate('Records')}> Records </Text>
                <Text style={styles.textView}
                onPress={()=>this.props.navigation.navigate('Refund And Policies')}> Refund And Policies </Text>
                <Text style={styles.textView}
                onPress={()=>this.props.navigation.navigate('Settings')}> Settings </Text>
                <Text style={styles.textView}
                onPress={()=>this.props.navigation.navigate('About Us')}> About Us </Text>
                <Text style={styles.textView}
                onPress={()=>this.props.navigation.navigate('Help')}
                 > Help </Text>
                <Text style={styles.logout}> Logout </Text>

                
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
        backgroundColor:'white'
        
    },
    textView:{
        fontSize:18,
        fontWeight:'500',
        color:'black',
        marginLeft:20,
        marginTop:40,
        borderBottomWidth:0.5,
        
        
        
    },
    profilesec:{
        height:200,
        width:'100%',
        backgroundColor:'black'

    },
    Image:{
        height:80,
        width:60,
        marginLeft:10,
        marginTop:20
        
    },
    button:{
        borderWidth:1,
        width:60,
        borderRadius:8,
        backgroundColor:'white',
        borderColor:'gold',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:5,
        marginTop:-30
    },
    buttonText:{
        color:'black',
        fontWeight:'500'
    },
    profilename:{
        backgroundColor:'black',
        height:150,
        width:100,
        marginLeft:180,
        marginTop:-50
        

    },
    profiletext:{
        color:'white',
        fontSize:20,
        marginLeft:18,
        

    },
    gold:{
        borderWidth:1,
        backgroundColor:'grey',
        borderRadius:8,
        alignItems:'center',
        alignContent:'center',
        width:80,
        marginLeft:15,
        marginTop:5
    },
    goldText:{
        color:'white'
    },
    coins:{
        color:'white',
        marginLeft:200,
        marginTop:-40
    
    },
    logout:{
        color:'black',
        marginLeft:100,
        marginTop:30,
        fontWeight:'800'
    }
   
})