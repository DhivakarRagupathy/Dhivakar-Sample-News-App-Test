import React, { Component } from 'react';
import { getAPI } from './../components/getAPI'
import NewsCard from './NewsCard'
import { Text, ScrollView } from 'react-native';

export default class Dashboard extends Component {

    static navigationOptions = {
        drawerLabel: 'Dashboard',
        drawerIcon: () => (
            <Icon type="FontAwesome" name='th-list' style={{ fontSize: 25, alignItems: 'flex-start' }}

                style={{
                    width: 18,
                    height: 18, tintColor: '#000000'
                }}
            />
        ),
    };

    constructor(props) {
        super(props);

        this.state = {
            articleList: null
        }
    }

    

    componentDidMount() {

        getAPI('https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526',{},this.setDashboardFeed(),this.onFetchFailure)
     }

    // getFeed() {

    //     fetch('https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526')
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             console.log(responseJson)
    //             this.setState({
    //                 isLoading: false,
    //                 articleList: responseJson.articles
    //             })

    //         })

    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    onFetchFailure=(response)=>{
        console.log(response)
        alert("Error Occurs ! Please contact admin !")
     }

    setDashboardFeed = (responseJson) => {

             this.setState({
                            isLoading: false,
                            articleList: responseJson.articles
                        })

    }

    getArticle=(articleSource)=>{
          var matchingArticle= this.state.articleList.map((article)=>{
              if(article.source==articleSource ){
                  return article
              }
          })

          return matchingArticle[0]
    }

    NavigateToDetails=(articleSource)=>{
        var fullArticle= this.getArticle(articleSource)
        this.props.navigation.navigate('Details',{fullArticle})
    }

    renderFeed = () => {

        if (this.state.articleList == null) {
            return <Text>{"Fetching your news"}</Text>
        }

        return this.state.articleList.map((article, index) => {
            console.log("rendering article card")
            console.log(article)
            return (
                <NewsCard Article={article} onPress={this.NavigateToDetails} />
            )
        })
    }

    render() {
        return (
            <ScrollView>
                {
                    this.renderFeed()
                }
            </ScrollView>

        );
    }
}