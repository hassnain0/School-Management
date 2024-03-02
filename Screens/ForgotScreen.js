import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import Util from './Toast'
import Login from './Login';
import NetInfo from '@react-native-community/netinfo';
import Home from './Home';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { sendPasswordResetEmail } from '@firebase/auth';
const ForgotScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);

    })
    return () => {
      unsubscribe();
    }
  })
  const handleSubmit = () => {
    if (email == null) {
      Util.errorMsg("Please enter email")
    }
    if (isConnected) {
      sendPasswordResetEmail(email)
        .then(() => {
          Util.errorMsg("Password reset email sent successfully!");
          navigation.navigate("Login")
        })
        .catch((error) => {
          if (error.code == 'auth/invalid-email')
            setMessage('Invalid Email Entered')
        });
    }
    else {
      Util.errorMsg("Please make sure you are connected to  internet connection")
    }
  }
  return (
    <View style={styles.container}>

      <LottieView source={require('../LottieFiles/16766-forget-password-animation.json')} autoPlay={true} style={styles.LottieContainer}></LottieView>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Send Email</Text>
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
  Cardcontainer: {

    paddingBottom: 50,
    paddingRight: 20,
    width: 400,




  },
  label: {
    fontWeight: 'bold',
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },

  submitButton: {
    backgroundColor: "#0D2B34",
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 20,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "60",
    fontSize: 16,
  },
  buttonText: {
    color: 'blue',

    fontSize: 20,
  },
  LottieContainer: {
    paddingLeft: 60,
    width: 200,
    height: 200,
    margin: 10,

  }
});

export default ForgotScreen;
