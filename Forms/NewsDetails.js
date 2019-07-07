import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight,Image,Text } from 'react-native'

export default class NewsDetails extends Component {

    constructor(props) {
        super(props);
       this.fullart=this.props.fullArticle;       
    }

    render(){
        return(
           <View>
               <Text style={{fontSize:30,margin:10}}>{this.fullart.title}</Text>
               <View style={{flexDirection:'row',margin:10}}>
               <Text style={{margin:10,}}>{this.fullart.author.split(',')[0]}</Text>
               <Text style={{margin:10,color:'grey'}}>{this.fullart.publishedAt.split('T'[0])}</Text>      
               </View>
               <Image
          style={{width: 350, height: 200,alignSelf:'center'}}
          source={{uri: this.fullart.urlToImage}}
        />
               <Text style={{margin:30,fontSize:20}} >{this.fullart.content}</Text>
           </View>
        )
    }
}