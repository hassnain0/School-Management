import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image, ScrollView, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from '@firebase/auth';
import { firebaseConfig } from './FireBase';
import { initializeApp } from '@firebase/app';
import Login from './Login';
import { useNavigation } from '@react-navigation/native';


const SignUP= ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  //Here usestate is used to initialize variables
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 

  const app=initializeApp(firebaseConfig);
  const auth=getAuth(app);

const Navigation=useNavigation()
  const handleSignUp = () => {
    if (password === confirmPassword) {
 createUserWithEmailAndPassword(auth,email,password)
 .then(userCredentials=>{
  Alert.alert(email,"Registered Sucessfully")
 Navigation.navigate("Home")
  
 })
 .catch(err => {
  if (err.code === 'auth/email-already-in-use') {
    setMessage('That email address is already in use!');

  }

  if(!email&&!password&!confirmPassword)
  {
    setMessage(err.code)
  }
  if (err.code === 'auth/invalid-email') {
setMessage(err.code);
  }

  if(!email||!password||!confirmPassword){
   setMessage(err.code)
  } 
  if (err.code === 'auth/email-already-in-use') {
    setMessage(err.code);
  }
});
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
        secureTextEntry={true}
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
      
     <Text style={{fontWeight:'bold', fontSize:20, color:'red',paddingLeft:30, margin:10}}>{message}</Text>

        <TouchableOpacity onPress={handleSignUp}>
      <LottieView  source={require('../LottieFiles/97735-sign-up.json')} autoPlay={true} style={styles.Cardcontainer}></LottieView>
     
     </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    
  },
  Cardcontainer:{


width:400,
paddingRight:100,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
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
