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

export default class LoginPage extends Component{
  // constructor(){
  //   super();
  //   this.state={
  //     name:null
     
      
  //   }
  // }
  
  // UpdateName(U){
  //   this.setState({
  //     name:U
      
  //   })

  // }
  // UpdatePass(pass){
    // console.log(pass)
    // this.setState({name:U})

  // }
  render(){
    return(
      <View style={styles.container}>
        <ImageBackground source={require('C:/Users/Dell/FirstProject/assets/3072.jpg')} style={styles.backgroundImage}>
          <Image source={require('C:/Users/Dell/FirstProject/assets/fdlogo.png')} style={styles.logo} >

          </Image>
          <Text style={styles.textstyle} >
            Plaese Login For Faster Delivery
          </Text>
          <TextInput style={styles.inputText}
          placeholder='Email / UserName'
          placeholderTextColor={'black'}
          // onChangeText={(U)=>this.UpdateName(U)}
          >

          </TextInput>
          <TextInput style={styles.inputText}
          placeholder='Password'
          placeholderTextColor={'black'}
          secureTextEntry 
          // onChangeText={(pass)=>this.UpdatePass(pass)}
          >

          </TextInput>
          <Text style={{color:'black',marginTop:10}}>Forgot Password? 
          <Text style={styles.clickme}>
             Click Here</Text> </Text>

         <TouchableHighlight style={styles.buttonInput}
          onPress={()=>this.props.navigation.navigate('BottomTab')}>
          <Text style={styles.buttonText}
          // onPress= {()=>this.props.navigation.navigate('Drawer')}
          // ,{U:this.state.name})}
         >Login</Text>
          </TouchableHighlight>    


        </ImageBackground>
       


      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'red',
    // height:'100%',
    // width:'100%',
    flex:1
   
  },
  backgroundImage:{
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  logo:{
    height:60,
    width:60,
    borderRadius:15
  },
  textstyle:{
    color:'black',
    fontWeight:'bold',
    fontSize:18,
    marginTop:10
  },
  inputText:{
    height:40,
    width:'80%',
    borderWidth:1,
    borderColor:'red',
    marginTop:40,
    borderRadius:10
  },
  clickme:{
    color:'blue',
    fontWeight:'bold'
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
    
    color:'black',


  }

 
})