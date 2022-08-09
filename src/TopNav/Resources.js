import React,{Component} from "react";
import {
    View,StyleSheet,ImageBackground,Image,Text, TouchableHighlight,TextInput, ActivityIndicator,FlatList
    
} from 'react-native'

export default class Resources extends Component{
    constructor(){
        super();
        this.state={
            loader:false,
            DATA:[]
        }
    }
    getData(){
        this.setState({loader:true})
        fetch('https://api.sampleapis.com/countries/countries')
        .then ((response)=>response.json())
        .then((response)=>{
            if (response.length>0){
            this.setState({DATA: response})
        }
            this.setState({loader:false})
            console.log('THIS IS RESPONSE :',response)
        })
        .catch((error)=>{
            this.setState({loader:false})
            console.log('THIS IS ERROR:',error)
        })
    }
    componentDidMount(){
        this.getData()
    }


    render(){
        const renderItem =({item})=>(
            <View style={styles.itemContainer}>
                <Text style={styles.renderText}>{item.name}</Text>
            </View>
        )

        return(
            <View style={styles.container}>
                
                <ActivityIndicator size={'large'} color='red' animating={this.state.loader}/>
                <Text style={styles.textView}
                onPress={()=>this.getData()}>Resources</Text>
                <FlatList style={{width:'95%',marginTop:10}}
                data={this.state.DATA}
                renderItem={renderItem}
                />
                
                
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
    itemContainer:{
        width:'100%',
        backgroundColor:'white',
        padding:10,
        elevation:4,
        marginBottom:10
        
        
        
    },
    renderText:{
        color:'black',
        fontWeight:'500',
        fontSize:18
    }
})