import React,{Component} from 'react';
import { View,text } from 'react-native';
import { firebase } from '@react-native-firebase/app'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/native';
import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'

  const firebaseConfig = {
    apiKey: "AIzaSyBnXGKtiQQVyswTnsSfmJGur45MeLBvPJc",
    authDomain: "instagram-dev-69e82.firebaseapp.com",
    projectId: "instagram-dev-69e82",
    storageBucket: "instagram-dev-69e82.appspot.com",
    messagingSenderId: "711946291987",
    appId: "1:711946291987:web:cfcb908db378457ab2a8e6",
    measurementId: "G-EVVDJHN8XB"
  };
  if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig)
  }

const Stack = createStackNavigator();


export class App extends Component {
  constructor (props){
    super(props);
    this.state={
      loaded:false,
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(!user){
        this.setState({
          loggedIn:false,
          loaded:true,
        })
      }else{
      this.setState({
        loggedIn:true,
        loaded:true,
      })}
    
    

    })
  }
  render() {
    const{loggedIn,loaded}= this.state;
    if(!loaded){
      return(
        <View style ={{flex:1,justifyContent:'center'}}>
          <Text>Loading</Text>
        </View>
      )

    }
    if(!loggedIn){
      return(
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing"component={LandingScreen} options ={{headerShown:false}}/>
            <Stack.Screen name="Register"component={RegisterScreen} />
          </Stack.Navigator>
         
        </NavigationContainer>
      );

    }

    return(
      <View style ={{flex:1,justifyContent:'center'}}>
        <Text>User is Logged in Succesfully </Text>
      </View>
    )
      
  }
}

export default App

