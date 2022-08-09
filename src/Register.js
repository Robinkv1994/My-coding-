import React,{Component} from "react";
import{
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Text,
    TextInput,
    TouchableHighlight,
    Button
    
}from 'react-native'



// class FlexContent extends Component{
//     render(){
//         return(
//             <View></View>
//         )
//     }
// }
export default class Register extends Component{
    constructor(){
        super();
        this.state ={
            main_text :'REGISTERATION PROCESS'
        }
    }
    UpdatedText(){
        this.setState({
            main_text:'REGISTERATION REQUEST SEND'
        })
    }
    render(){
        return(
            <View style ={styles.container}>
                <ImageBackground source={require('C:/Users/Dell/FirstProject/assets/444.jpg')} style={styles.backgroundImage}>
                    <Image source={require('C:/Users/Dell/FirstProject/assets/fdlogo.png')} style={styles.logo}>

                    </Image>
                    <Text style={styles.text}> Register With US </Text>
                    <TextInput style={styles.inputText}
                    placeholder='Full Name'
                    placeholderTextColor={'black'}>
                        
                    </TextInput>

                    <TextInput style={styles.inputText}
                    placeholder='Email'
                    placeholderTextColor={'black'}>
                    </TextInput>
                    <View style={styles.row}>
                    <TextInput style={styles.mob}
                    placeholder='  +91'
                    placeholderTextColor={'black'} >   
                    </TextInput>
                                         
                    
                    <TextInput style={styles.mobile}
                    placeholder='Mobile Number'
                    placeholderTextColor={'black'}
                    maxLength={12}>                        
                    </TextInput>
                    </View>
                    <TextInput style={styles.password}
                    placeholder='Password'
                    placeholderTextColor={'black'}
                    secureTextEntry >                        
                    </TextInput>

                  <TouchableHighlight style={styles.buttons}
                  onPress={()=> this.props.navigation.navigate('LoginPage')}
                  underlayColor={'#fff'}>
                    <Text style={styles.buttonStyle}>Register to Login</Text>

                  </TouchableHighlight>
                  <Text style={styles.updates}>{this.state.main_text}</Text>


                </ImageBackground>
            

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        flex:1,
        alignSelf:'auto',
        flexDirection:'row'
        
        
    },
    backgroundImage:{
        height:'100%',
        width:'100%',
        // justifyContent:'center',
        alignItems:'center',
        

        
        
    },
    logo:{
        height:100,
        width:99,
        borderRadius:30,
        marginTop:70
        
        
        

    },
    text:{
        color:'#fff',
        fontWeight:'bold',
        marginTop:10,
        
        
    },
    inputText:{
        height:40,
        width:'80%',
        backgroundColor:'white',
        borderWidth:1,
        marginTop:20,
        borderRadius:10,
        
        
    },
    mob:{
        height:40,
        width:60,
        borderWidth:1,
        backgroundColor:'white',
        marginTop:20,
        borderRadius:10,  
        // marginRight:0,
        justifyContent:'space-between',
        // flexDirection:'row'
      
        
           
    },
    mobile:{
        height:40,
        width:'65%',
        borderWidth:1,
        backgroundColor:'white',
        marginTop:20,
        borderRadius:10,
        justifyContent:'space-between',
        // marginLeft:60,
        // flexDirection:'coloumn'    
    },
    password:{
        height:40,
        width:'80%',
        backgroundColor:'white',
        borderWidth:1,
        marginTop:20,
        borderRadius:10,
        
    },
    buttons:{
        height:40,
        width:'30%',
        borderWidth:1,
        backgroundColor:'green',
        marginTop:20,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonStyle:{
        color:'black',
        fontWeight:'800',
        
    },
    updates:{
        fontWeight:'800',
        color:'red',
        marginTop:20,

    },
    row:{
        justifyContent:'space-between',
        flexDirection:'row'
    }
   
})
