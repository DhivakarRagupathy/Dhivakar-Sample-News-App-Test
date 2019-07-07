import React, { Component } from 'react';
import { View,TextInput,Button,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class LoginForm extends Component {

  
  static navigationOptions = {
    drawerLabel: 'Log out',
    drawerIcon: () => (
        <Icon type="FontAwesome" name='th-list'  style={{ fontSize:25, alignItems:'flex-start' }}  
                    
        style={{width: 18,
            height: 18,tintColor: '#000000'}}
      />
    ),
  };

	
	constructor(props) {
    super(props);
    
    this.state = {
        loginName: "",
        password: ""
    }

}

componentWillMount() {
 
}

	
onLogin=()=>{

if(this.state.loginName=="Hiver" && this.state.password=="Go") 
{
  alert("login Success")
  this.props.navigation.navigate('Dashboard')
}
else alert("login failed")
}

  
  render() {
    
    return (
    
     
          <View style={{justifyContent:"space-between",marginTop:250}}>
              <Text style={{fontSize:30,alignSelf:'center'}}>
                {"Hiver Feeds"}
              </Text>
              <TextInput 
              placeholder="Username" 
              style={{backgroundColor:"transparent",
              borderBottomWidth:1,
              textDecorationColor:"white",
              fontSize:17,
              marginHorizontal:10,
              marginVertical:15
            }}
              onChangeText={(text)=>{this.setState({loginName:text})}}
             
              />
           
              <TextInput 
              placeholder="Password" 
              secureTextEntry 
              style={{backgroundColor:"transparent",
              borderBottomWidth:1,
              textDecorationColor:"white",
              fontSize:17,
              marginHorizontal:10,
              marginVertical:15
            }}
              onChangeText={(text)=>{this.setState({password:text})}}
              />
           
            <Button 
            height={60}
             style={{ marginTop:50,backgroundColor: "#40e8df",marginTop:40,shadowColor:"#444c4c",marginHorizontal:10}} 
             onPress={this.onLogin}
             title={"Login"}
            />
          
                
         
          </View>
          
    );
  }
}