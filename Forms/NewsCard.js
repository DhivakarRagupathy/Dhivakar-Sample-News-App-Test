import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight,Image } from 'react-native'
import {Card, CardItem, Text, Body,Icon,Thumbnail, Right } from "native-base";


export default class NewsCard extends Component {

    constructor(props) {
        super(props);

    }


      render() {
        return (
          
              <Card>
                <CardItem header bordered>
                  <Text style={{fontSize:20,alignSelf:'center'}}>{this.props.Article.title}</Text>
                </CardItem>
                <CardItem bordered>
                  <Body style={{flexDirection:'row'}}>
                    <Text style={{fontSize:20,alignSelf:'center'}}>
                    {this.props.Article.description}
                    </Text>
                   
                  </Body>
                  <Right>
                  <Thumbnail style={{borderRadius:0,height:100,width:100}} source={{uri: this.props.Article.urlToImage }} />
                  </Right>
                </CardItem>
                <CardItem footer bordered>
                <Body>
                    <Text style={{fontSize:20,alignSelf:'center'}}>
                    {this.props.Article.source.name}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
           
                    )
           
           
               }
           }
           
           
           

