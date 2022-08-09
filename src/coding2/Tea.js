import React, { Component } from "react";
import{
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList
} from 'react-native'
import axios from 'axios';
const baseUrl = 'https://dog.ceo/api/breeds/list/all';



export default class Tea extends Component{
    getAxiosdata(){
        axios({
            method: 'get',
            url: `${baseUrl}/https://dog.ceo/api/breeds/list/all`,
          }).then((response) => {
            console.log(response.data);
          });
          axios.get(`${baseUrl}/https://dog.ceo/api/breeds/list/all`).then((response) => {
            console.log(response.data);
          });
    }
    
   
    render(){
        
        return(
            <View style={styles.container}>
                <ActivityIndicator size={'large'} color='red' ></ActivityIndicator>
                
                <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}
                onPress={()=>this.getAxiosdata}>Click me</Text>
              


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

       
    }
})
