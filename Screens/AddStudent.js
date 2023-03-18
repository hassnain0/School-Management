import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,ScrollView, Keyboard } from 'react-native';
import { db, firebaseConfig } from './FireBase';
import firebase from "firebase/compat";

import { useNavigation } from '@react-navigation/native';

const AddStudent = () => {
  const [state,setState]=useState({
  studentname:{},
  studentfatherName:{},
  studentClass:{},
  studentage:{},
  studentcontactNumber:{},
  studentdob:{},
  studentgrNo:{},
  studentcaste:{},

  })
  

  const {studentname,studentfatherName,studentClass,studentage,studentcontactNumber,studentdob,studentgrNo,studentcaste}=state

  

  //Navigation
  const navigation=useNavigation();
  const addStudentData=()=>{
   
    // getLiveLocation();
    try{
    const usersCollection = db.collection('University')
    const currentUser = firebase.auth().currentUser;



// Add a new document to the collection with the user's data
usersCollection.doc(currentUser.uid).set({
 name:'hello',
})
   navigation.goBack();
    }
    catch(error){
      console.log(error)
    } 
  }



  const handleSubmit = () => {
    if (!studentname || !fatherName || !caste || !grNo || !dob || age) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    // Submit the form data to your backend here
    // ...

    Alert.alert('Success', 'Student successfully registered');
  };

  return(
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.sectionTitle}>Personal Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={studentname}
        onChangeText={(text) => setState({...state,studentname:{text}})}
      />

      <TextInput
        style={styles.input}
        placeholder="father's name"
        value={studentfatherName}
        onChangeText={(text) => setState({...state,studentfatherName:{text}})}
      
      />  
       <TextInput
        style={styles.input}
        placeholder="Caste"
        value={studentcaste}
        onChangeText={(text) => setState({...state,studentcaste:{text}})}
      
      />  
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={studentcontactNumber}
        keyboardType={'numeric'}
        onChangeText={(text) => setState({...state,studentcontactNumber:{text}})}
      
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        value={studentdob}
        onChangeText={(text) => setState({...state,studentdob:{text}})}
      
      />

      
      <TextInput
        style={styles.input}
        placeholder="GR No"
        value={studentgrNo}
        onChangeText={(text) => setState({...state,studentgrNo:{text}})}
      
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Class "
        value={studentClass}
        onChangeText={(text) => setState({...state,studentClass:{text}})}
      
      />

     

  <TouchableOpacity style={styles.submitButton} onPress={addStudentData}>
    <Text style={styles.submitButtonText}>Submit</Text>
  </TouchableOpacity>
</ScrollView>
</View>

);
};

const styles = StyleSheet.create({
container: {
padding: 24,
backgroundColor: "#fff",
},
sectionTitle: {
fontSize: 24,
marginBottom: 16,
fontWeight: "600",
},
input: {
height: 40,
borderColor: "#ccc",
borderWidth: 1,
marginBottom: 16,
padding: 8,
},
checkboxText: {
fontSize: 18,
},
consentContainer: {
marginTop: 16,
marginBottom: 32,
},
submitButton: {
backgroundColor: "#333",
padding: 16,
alignItems: "center",
},
submitButtonText: {
color: "#fff",
fontWeight: "600",
fontSize: 18,
},
});

export default AddStudent;



