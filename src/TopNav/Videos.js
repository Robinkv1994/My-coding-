import React,{Component} from "react";
import {
    View,StyleSheet,ImageBackground,Image,Text, TouchableHighlight,TextInput,ActivityIndicator,FlatList
    
} from 'react-native'

export default class Videos extends Component{
    constructor(){
        super();
        this.state={
            loader:false,
            DATA:[]
        }
    }
    getData(){
        this.setState({loader:true})
        fetch('https://api.sampleapis.com/coffee/hot')
        .then((response)=>response.json())
        .then((response)=>{
            if (response.length>0){
                this.setState({DATA : response})
            }
            this.setState({loader:false})
            console.log('your response is:',response)
        })
        .catch((error)=>{
            this.setState({loader:false})
            console.log('Error is:',error)
        })
    }
    componentDidMount(){
        this.getData()
    }
    
    render(){
        const renderItem =({item}) => (
            <View style={styles.ItemContainer}>
                <Text style={styles.itemText}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                

            </View>
        )
        return(
            <View style={styles.container}>
                
                <ActivityIndicator size={'large'} color={'red'} animating={this.state.loader}/>
                <Text style={styles.textView}
                onPress={()=>this.getData()}
                
                >Videos</Text>
                <FlatList style={{width:'95%',marginTop:10}}
                data={this.state.DATA}
                renderItem={renderItem}>
                    
                </FlatList>
                
                
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
    ItemContainer:{
        width:'100%',
        padding:10,
        backgroundColor:'white',
        elevation:4,
        marginBottom:10


    },
    itemText:{
        fontSize:16,
        color:'black',
        fontWeight:'800'

    },
    itemDescription:{
        color:'black',
        fontWeight:'400'


    }
})