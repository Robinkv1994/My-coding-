import React,{Component} from "react";
import {
    View,StyleSheet,ImageBackground,Image,Text, TouchableHighlight,TextInput,ActivityIndicator,FlatList

    
} from 'react-native'
import Axios from 'axios';



export default class QN extends Component{
    constructor(){
        super();
        this.state={
            loader:false,
            DATA:[]

        }
    }
    // getData(){
    //     this.setState({loader:true})
    //     fetch('https://api.sampleapis.com/fakebank/accounts')
    //     .then ((response)=>response.json())
    //     .then((response)=>{
    //         if (response.length>0){
    //             this.setState({DATA:response})
                
    //         }
    //         this.setState({loader:false})
    //         console.log('THIS IS RESPONSE:',response)
    //     })
    //     .catch((error)=>{
    //         this.setState({loader:false})
    //         console.log('THIS IS THE ERROR:',error)
    //     })
    // }
    getAxiosData(){
        this.setState({loader:false})
        Axios.get('https://api.sampleapis.com/fakebank/accounts')
        .then((response)=>{
            if (response.length>0){
                this.setState({DATA:response})
            }
            console.log('AXIOS RESPONSE:',response)
        })
        .catch((error)=>{
            this.setState({loader:true})
            console.log('ERROR IS IN AXIOS:',error)
        })
    }
    componentDidCatch(){
        this.getData()
    }
    
    render(){
        const renderItem=({item})=>(
            <View style={styles.viewContainer}>
                <Text style={{color:'black'}}>{item.credit}</Text>

            </View>

        )
        return(
            <View style={styles.container}>
                
                <ActivityIndicator size={'large'}color='green'animating={this.state.loader}></ActivityIndicator>

                <Text style={styles.textView}
                onPress={()=>this.getAxiosData()}>QN Banks</Text>
                <FlatList
                style={{width:'95%'}}
                data={this.state.DATA}
                renderItem={renderItem}
                ></FlatList>
                
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#eeee'
        
    },
    textView:{
        fontSize:24,
        fontWeight:'bold',
        color:'black'
    },
    Button:{
        backgroundColor:'green',
        borderRadius:8,
        width:80,
        height:30,
        alignItems:'center'
    },
    viewContainer:{
        width:'100%',
        backgroundColor:'white',
        marginTop:10,
        padding:10,
        elevation:4
    }
})