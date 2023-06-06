
import React from 'react'
import {KeyboardAvoidingView, StyleSheet,View,Button,TextInput ,Text,TouchableOpacity,Image,Alert} from 'react-native';
import Home from './Home'
import SignUP from './SignUP'
import {  useState } from 'react';
import LottieView from 'lottie-react-native';
import ForgotScreen from './ForgotScreen';
import { getAuth,signInWithEmailAndPassword,} from '@firebase/auth';
import { firebaseConfig } from './FireBase';
import { initializeApp } from '@firebase/app';
  export default  function Card({navigation}){
 
  const [myEmail,setEmail] =useState('');
  const [myPassword,setPassword] =useState('');
  const [message,setMessage] =useState('');


  const app=initializeApp(firebaseConfig);
  const  auth=getAuth(app);


  
  const handleLogin=()=>{
    if(!myEmail||!myPassword){
      Alert.alert('Please enter email and password')
    }
   else{
    signInWithEmailAndPassword(auth,myEmail, myPassword).then(() => {
    navigation.navigate(Home)
    
  }).catch(error=>{
    if(error.code=='auth/too-many-request'){
      Alert.alert('Too many wrong attempts ! Account Disabled please reset your password')
    }
    if(error.code=='auth/wrong-password'){
      Alert.alert('Wrong Password')
    }
     if(error.code=='auth/too-many-request'){
      Alert.alert(
        <LottieView source={require('../LottieFiles/114427-attendance-loader.json')}></LottieView>
      )
    }
  })
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
     <TouchableOpacity  style={styles.submitButton}onPress={()=>(navigation.navigate(SignUP))}>
     <Text style={styles.submitButtonText}>SignUP</Text>
     </TouchableOpacity>
   
     <TouchableOpacity onPress={()=>(navigation.navigate(ForgotScreen))}>
     <Text style={styles.TextContainer}>                          Forgot Pasword ?</Text>
     
     </TouchableOpacity>
  
   

      </View>
      <Text>{message}</Text>
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
      fontWeight: "100",
      fontSize: 15,
      },

    TextContainer:{
      margin:10,
      color:'#EDEDED',
      fontWeight:'normal',
      fontSize:15,
      
    }

})