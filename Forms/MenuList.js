import React from 'react';
import {createDrawerNavigator} from 'react-navigation';
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';
import NewsDetails from './NewsDetails';

const RootStack= createDrawerNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard',
    }, 
  }, 
  NewsDetails: {
    screen: NewsDetails,
    navigationOptions: {
      title: 'NewsDetails',
    }, 
  }, 
    LoginForm: {
      screen: LoginForm,
      navigationOptions: {
        title: 'Logout',
      },     
    },
}, {
    initialRouteName: 'LoginForm',
    
},
);
export default class MenuList extends React.Component {
    render() {
    
      return(
        
        <RootStack />
        
      );
    }
  }