
import React, { useEffect } from 'react'
import {KeyboardAvoidingView, StyleSheet,View,Button,TextInput ,Text,TouchableOpacity,Image,Alert} from 'react-native';
import Home from './Home'
import SignUP from './SignUP'
import {  useState } from 'react';
import LottieView from 'lottie-react-native';
import ForgotScreen from './ForgotScreen';
import { signInWithEmailAndPassword, } from '@firebase/auth';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import Util from './Toast'
import { auth } from './FireBase';
import NetInfo from '@react-native-community/netinfo'

  export default  function Card({navigation}){
 
  const [myEmail,setEmail] =useState(null);
  const [myPassword,setPassword] =useState(null);
  const [isConnected,setIsConnected]=useState(false);

 
  useEffect(()=>{
const unsubscribe=NetInfo.addEventListener(state=>{
  setIsConnected(state.isConnected);
})
return ()=>{
  unsubscribe();
}
  })
  //SignUp Method
  const SignUpMethod=()=>{
    navigation.navigate("SignUP")
  }
  //Forgot Screen navigation
    const ForgotScreen=()=>{
    navigation.navigate("ForgotScreen")
  }
  const handleLogin=()=>{
    navigation.navigate("Home")
   if(myEmail==null){
      Util.errorMsg("Please enter email")
    }
    if(myPassword==null){
      Util.errorMsg("Please enter password")
    }
   else{
    if(isConnected){
    const InsertAPIURL = "http://10.0.2.2:80/api/Login.php";
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
    const Data = {
    Email:myEmail,
    Password:myPassword,
    };

    fetch(InsertAPIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data)
    }).then((res) => res.json()).then((res) => {
     
      if(res[0].Message=='Exist'){
      navigation.navigate("Home");
      }
    }).catch((error) => {
      console.log("Error", error)
    })
}
else{
  Util.errorMsg("Please connect Internet Connection");1
}
}
  }
  return(
     <KeyboardAvoidingView>
      <View style={styles.Cardcontainer} >
        <View style={styles.NestedHeader}>
        <LottieView source={require('../LottieFiles/Example.json')} autoPlay={true} style={styles.ImageContainer}></LottieView>
       < Text style={{color:'#EDEDED', fontWeight:'bold',fontSize:25 , paddingBottom:50, marginTop:20,}}>  Government School     </Text></ View>
        <TextInput textAlign='center' placeholder='Enter email'  value={myEmail} auto onChangeText={text=>setEmail(text)} style={styles.InputContainer} ></TextInput>
      <TextInput textAlign='center' placeholder='Enter password'  secureTextEntry={true}  value={myPassword} onChangeText={text=>setPassword(text)} style={styles.InputContainer}></TextInput>
        <TouchableOpacity  style={styles.submitButton}onPress={handleLogin}>
     <Text style={styles.submitButtonText}>Login</Text>
     </TouchableOpacity>
     <TouchableOpacity  style={styles.submitButton}onPress={SignUpMethod}>
     <Text style={styles.submitButtonText}>SignUP</Text>
     </TouchableOpacity>
   <TouchableOpacity onPress={ForgotScreen}>
     <Text style={styles.TextContainer}>Forgot Pasword ?</Text>
          </TouchableOpacity>
  </View>
   <Toast ref={(ref)=>Toast.setRef(ref)}/>
      </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    Cardcontainer: {
      flex: 1,
    backgroundColor:'#29819C',
      alignItems: 'center',
      justifyContent: 'center',
      elevation:50,
      borderRadius:20,
      borderColor:'#007ACC',
      color:'#5388CE',    
      shadowOffset:'#33333',
      shadowOpacity:1,
      shadowColor:'#4C5053',
      paddingTop:80,
      paddingBottom:20,
      alignItems:'center'
      
 
    
    },
    Container:
  {
    paddingBottom:100,
  },
    ButtonContainer: {
      color:'#fff',
      padding: 16,
      padding:20,
      
      },
    
    ImageContainer:{
      paddingLeft:25,
      paddingBottom:200,
      width:100,
      height:100,
      
    },
    InputContainer:{
      marginTop:15,
      marginBottom:10,
      paddingBottom:5,
      margin:5,
      borderWidth:0.5,
      borderRadius:5,
     width:'90%',
     height:40,
      backgroundColor:'#EDEDED',
   
      

    },
    NestedHeader:{
    
    },
    submitButton: {
   
      padding: 5,
      alignItems: "center",
      margin:1,
      },
      submitButtonText: {
      color: "#fff",
  
      fontSize: 15,
      fontStyle:'bold'
      },

    TextContainer:{
      margin:10,
      color:'#EDEDED',
      fontWeight:'normal',
      fontSize:15,
      alignContent:'center'
      
    }

})