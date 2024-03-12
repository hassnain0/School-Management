import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
import Login from './Login';
import { useNavigation } from '@react-navigation/native';
import Util from './Toast'
import NetInfo from '@react-native-community/netinfo'
import { Toast } from 'react-native-toast-message/lib/src/Toast';
const SignUP = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  //Here usestate is used to initialize variables
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  //Internet Connection Method to check Wether connection is builded or not 
  useEffect(() => {

    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    })
    return () => {
      unsubscribe();
    }
  })
  const Navigation = useNavigation()
  const handleSignUp = () => {

    if (username == null) {

      Util.errorMsg("Please enter username")
    }
    else if (email == null) {
      Util.errorMsg("Please enter email")
    }
    else if (password == null) {
      Util.errorMsg("Please enter password")
    }
    else if (confirmPassword == null) {
      Util.errorMsg("Please enter confirm password")
    }
    else {
      if (isConnected) {
        API_Post();
      }

      else {
        Util.errorMsg("Please connect internet connection")
      }

    }
  };
  const API_Post = () => {
    const InsertAPIURL = "http://10.0.2.2:80/api/insert.php";
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
    const Data = {
      Username: username,
      Email: email,
      Password: password,
      Confirm_Password: confirmPassword,
    };

    fetch(InsertAPIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data)
    }).then((res) => {
      
      console.log("Dtaa",res)
      res.json();
    }).then((res) => {
      if (res[0].Message == 'Sucessfull') {
        Util.successMsg("Registered Sucessfully");
        resetForm();
      }    }).catch((error) => {
      console.log("Error", error);
    });
    
  }

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }
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
        secureTextEntry={true} />
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSignUp}>
        <Text style={styles.submitButtonText}>Register</Text>
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
  TouchableOpacityContainer: {
    alignItems: 'center',
    alignContent: 'center',
  },
  Cardcontainer: {
    width: 500,
    paddingRight: 100,
  },
  submitButton: {
    marginTop: 10,
    backgroundColor: "#333",
    padding: 10,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 18,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    alignItems: 'center',
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

    fontSize: 20,
  },
  LottieContainer: {
    paddingLeft: 10,
  }
});

export default SignUP;
