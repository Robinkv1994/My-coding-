import React,{Component} from "react";
import {
    View,StyleSheet,ImageBackground,Image,Text, TouchableHighlight,TextInput,ActivityIndicator,FlatList
    
} from 'react-native'

export default class Chapter extends Component{
    constructor(){
        super();
        this.state={
            loader:false,
            DATA:[]
            
        }
    }
    getData (){
        this.setState({loader:true})
        fetch('https://api.sampleapis.com/baseball/hitsSingleSeason')
        .then ((response)=> response.json())
        .then((response)=>{
            if (response.length>0){
                this.setState({DATA:response})
            }
            this.setState({loader:false})
            console.log('This is Response:',response)
        })
        .catch ((Error)=>{
            this.setState({loader:false})
            console.log('THIS IS ERROR:',Error)
        })

    }
    componentDidMount(){
        this.getData()
    }
    

    
    render(){
        const renderItem = ({item})=>(
            <View style={styles.viewContainer}>
                <Text style={styles.textRender}>{item.Player}</Text>
            </View>

        )
        return(
            <View style={styles.container}>
                <ActivityIndicator size={'large'} color='blue' animating={this.state.loader}/>
                
                
                <Text style={styles.textView}
                onPress={()=>this.getData()}> Chapter</Text>
                <FlatList style={{width:'95%',marginTop:10}}
                data={this.state.DATA}
                renderItem={renderItem}></FlatList>
                
                
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
        backgroundColor:'#eeeeee'
        
    },
    textView:{
        fontSize:24,
        fontWeight:'800',
        color:'black'

    },
    viewContainer:{
        width:'100%',
        padding:10,
        backgroundColor:'white',
        elevation:4,
        marginBottom:10,
        

    },
    textRender:{
        color:'black',
        fontWeight:'500',
        fontSize:18
        
    }
    
})