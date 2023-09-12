import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image, ScrollView, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import Login from './Login';
import { useNavigation } from '@react-navigation/native';
import Util from './Toast'
import NetInfo from '@react-native-community/netinfo'
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { auth } from './FireBase';
import { createUserWithEmailAndPassword } from '@firebase/auth';


const SignUP= ({navigation}) => {

  const [email, setEmail] = useState(null);
  //Here usestate is used to initialize variables
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [isConnected,setIsConnected]=useState(false);

  //Internet Connection Method
  useEffect(()=>{
  
    const unsubscribe=NetInfo.addEventListener(state=>{
    setIsConnected(state.isConnected);
    })
    return ()=>{
      unsubscribe();
    }
}) 
  


const Navigation=useNavigation()
  const handleSignUp = () => {
  
    if(username==null){
          
      Util.errorMsg("Please enter username")
    }
   else if(email==null){
      Util.errorMsg("Please enter email")
    }
   else if(password==null){
      Util.errorMsg("Please enter password")
    }
   else if(confirmPassword==null){
      Util.errorMsg("Please enter confirm password")
    }  
else{
    if(isConnected){
 createUserWithEmailAndPassword(auth,email,password).then(userCredentials=>{
  Util.successMsg("Sucessfully Registered")
 Navigation.navigate("Login")
  
 })
 .catch(err => {
  if (err.code === 'auth/email-already-in-use') {
    Util.errorMsg("Email Already in use")

  }
  if (err.code === 'auth/invalid-email') {
Util.errorMsg("Invalid Email");
  }

  if (err.code === 'auth/email-already-in-use') {
    Util.errorMsg("Email Already in use")
  }
});}

else{
  Util.errorMsg("Please connect internet connection")
}
    
  }    
  };
  return (
    <View style={styles.container}>
<Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
         <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword} 
        secureTextEntry={true}/>
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
        <TouchableOpacity style={styles.TouchableOpacityContainer} onPress={handleSignUp}>
      <LottieView  source={require('../LottieFiles/97735-sign-up.json')} autoPlay={true} style={styles.Cardcontainer}></LottieView>     
     </TouchableOpacity>
     <Toast ref={(ref) => Toast.setRef(ref)} /> 
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  TouchableOpacityContainer:{
     alignItems:'center',
     alignContent:'center',
  },
  Cardcontainer:{
width:500,
paddingRight:100,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    alignItems:'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
  button: {
   
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'blue',
    
    fontSize:20,
  },
  LottieContainer:{
      paddingLeft:10,
      

    
  }
});

export  default SignUP;
