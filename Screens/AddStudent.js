import React, {useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { firebaseConfig} from './FireBase';

import Util from './Toast';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import firebase from 'react-native-firebase';




const AddStudent = () => {

const [studentname,setStudentName]=useState(null);
const [studentfatherName,setStudentfatherName]=useState(null);
const [studentClass,setStudentClass]=useState(null);
const [studentage,setStudentAge]=useState(null);
const [studentgrNo,setStudentgrNo]=useState(null);
const [studentcaste,setStudentCaste]=useState(null);
const [studentdob,setStudentdob]=useState(null);
const [studentAdmissionDate,setStudentAdmissionDate]=useState(null);
const [studentcontactNumber,setStudentContactNumber]=useState(null);
const [studentBfromNo,setStudentBformNo]=useState(null);

  const addStudentData=async()=>{

firebase.initializeApp(firebaseConfig)
const databse=firebase.firestore();
    const response=databse.collection('Admission').doc('Student');
    // getLiveLocation();
    try{
await response
.set({
Name:studentname,
FatherName:studentfatherName,
Class:studentClass,
Caste:studentcaste,
GRNo:studentgrNo,
DateofBirth:studentdob,
BFROM:studentBfromNo,
DateAdmission:studentAdmissionDate,
Age:studentage,
Status:"Enrolled",

        })
        .then(() => {

    Util.successMsg("Student sucessfully enrolled")
    resetform();
    
      })
        .catch((error) => {
          console.error('Error writing document: ', error);
        });
 
    }
    catch(error){
      console.log(error)
    } 
  }

  const resetform =()=>{
    studentname=" ",
    studentfatherName=" ",
    studentcaste=" ",
    studentcontactNumber=" ",
    studentgrNo=" ",

    studentdob=" ",
    studentage=" ",
    studentClass= " "


  }


  const CalculateDate=()=>{
    let date=new Date().toLocaleDateString;

    setStudentAge()

  }
  const handleSubmit = () => {
  
  
  if(studentname==''|| studentname==null){
    Util.errorMsg("Please enter student name")
    return ;
  }
  console.log(studentfatherName)
  if(studentfatherName==''||studentfatherName==null){
    Util.errorMsg("Please enter student fatherName")
    return ;
  }
  if(studentcaste==''||studentcaste==null){
    Util.errorMsg("Please enter Student Caste")
    return ;
  }
  if(studentcontactNumber==''||studentcontactNumber==null){
    Util.errorMsg("Please enter student contact number")
    return ;
  }
  if(studentdob==''||studentdob==null){
    Util.errorMsg("Please enter student Date of Birth")
    return ;
  }
  if(studentage==''||studentage==null){
    Util.errorMsg("Please enter student Age")
    return ;
  }
  if(studentBfromNo==''||studentBfromNo==null){
    Util.errorMsg("Please enter student B form No")
    return ;
  }
  if(studentgrNo==''||studentgrNo==null){
    Util.errorMsg("Please enter student GR No")
    return ;
  }
  if(studentClass==''||studentClass==null){
    Util.errorMsg("Please enter student class")
    return ;
  }
 else
{
  addStudentData();
}
    

   
  };

  
  return(
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.sectionTitle}>Personal Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={studentname}
        onChangeText={(text) => setStudentName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="father's name"
        value={studentfatherName}
        onChangeText={(text) => setStudentfatherName(text)}
      
      />  
       <TextInput
        style={styles.input}
        placeholder="Caste"
        value={studentcaste}
        onChangeText={(text) => setStudentCaste(text)}
      
      />  
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={studentcontactNumber}
        keyboardType={'numeric'}
        onChangeText={(text) => setStudentContactNumber(text)}
      
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        value={studentdob}
        keyboardType='numeric'
        onChangeText={(text) => setStudentdob(text)}
      
      />
          <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        value={studentage}
        keyboardType='numeric'
        onChangeText={(text) => setStudentAge(text)}
      
      />
       

<TextInput
        style={styles.input}
        placeholder="B-Form No"
        value={studentBfromNo}
        onChangeText={(text) => setStudentBformNo(text)}
      
      />
     
      
      <TextInput
      keyboardType='numeric'
        style={styles.input}
        placeholder="GR No"
        value={studentgrNo}
        onChangeText={(text) => setStudentgrNo(text)}
      />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder="Enter Class "
        value={studentClass}
        onChangeText={(text) => setStudentClass(text)}
      />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder="Enter Date of Admission "
        value={studentAdmissionDate}
        onChangeText={(text) => setStudentAdmissionDate(text)}
      />
  <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
    <Text style={styles.submitButtonText}>Submit</Text>

  </TouchableOpacity>
  <Toast ref={(ref) => Toast.setRef(ref)} />  
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



