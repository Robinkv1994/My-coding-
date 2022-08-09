import React, { Component } from "react";
import{
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    ScrollView,ImageBackground
} from 'react-native'

export default class Coffee extends Component{
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
                this.setState({DATA:response})
            }
            this.setState({loader:false})
            console.log('THIS IS RESPONSE:',response)
        })
        .catch((error)=>{
            this.setState({loader:true})
            console.log('THIS IS THE ERROR:',error)
        })
    }
    componentDidCatch(){
        this.getData()
        // console.log('componentdidmount')
    }
    
    render(){
        
        const renderItem = ({item})=>(
            <View style={{width:'100%',backgroundColor:'white',elevation:4,marginBottom:10}}>
               
                
                
                <ScrollView style={styles.scrollContainer}>
                <View style={{height:"100%",width:'100%'}}>
                <View style={{flexDirection:'row',height:300,width:'100%',backgroundColor:'white',margin:10}}>

                    <View style={{backgroundColor:'#eeeeee',height:'80%',width:150,margin:10}}>
                        <ImageBackground source={{uri:`${item.image}`}} style={{height:'100%',width:'100%'}}/>
                    </View>
                    
                    <View style={{backgroundColor:'white',height:'80%',width:210,margin:10,margin:10}}>
                        <View style={{flexDirection:'column'}}>
                            <View style={{height:30 ,width:190,backgroundColor:'white',marginLeft:10,marginTop:10,elevation:4}}>
                            <Text style={{color:'blue',fontSize:18,marginLeft:3}} onPress={()=>this.props.navigation.navigate('Details')}> Title : {item.title}</Text>
                            </View>

                            <View style={{height:100 ,width:190,backgroundColor:'white',marginLeft:10,marginTop:10}}>
                            <Text style={{color:'black',fontSize:16,justifyContent:'center'}}>{item.description}...</Text>
                            </View>

                            <View style={{height:40 ,width:190,backgroundColor:'white',marginLeft:10,marginTop:50}}>
                            <Text style={{color:'black',marginLeft:2}}>Ingredients : {item.ingredients}</Text>
                            </View>

                            

                        </View>
                        
                </View>
                        

                </View>
                </View>
                </ScrollView>
                 
            </View>
        )

        return(
            <View style={styles.container}>
                <ActivityIndicator size={'large'}color='green' animating={this.state.loader}/>
                <Text style={{color:'black',fontSize:18,marginTop:-10,marginLeft:10}} 
                onPress={()=> this.getData()}>
                    Explore here !
                </Text>
                <FlatList
                style={{width:'95%',marginTop:10}}
                data= {this.state.DATA}
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
        backgroundColor:'#eeeeee',
       

    }
})