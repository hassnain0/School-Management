import React, {useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { db, firebase} from './FireBase';
import Util from './Toast';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import NetInfo from '@react-native-community/netinfo';

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
const [isConnected,setIsConnected]=useState(false)


//Method for adding student
  const addStudentData=async()=>{

    if(isConnected){
    API_Post();
  }
    else{
  Util.errorMsg("Please make sure you're connected to internet connection")
    }
  }

  useState(()=>{
    const unsubscribe=NetInfo.addEventListener(state=>{
      setIsConnected(state.isConnected);
    })
    return ()=>{
      unsubscribe();
    }
  })
  const API_Post = () => {
    const InsertAPIURL = "http://10.0.2.2:80/api/studentAdmisson.php";
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
    const Data = {
      StudentName: studentname,
      StudentfatherName:studentfatherName,
      StudentAdmission: studentAdmissionDate,
      StudentAge: studentage,
      StudentBForm: studentBfromNo,
      StudentContactNumber:studentcontactNumber,
      StudentGrNO:studentgrNo,
      StudentCaste:studentcaste,
      StudentClass:studentClass,
      Studentdob:studentdob,
    };

    fetch(InsertAPIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data)
    }).then((res) => res.json()).then((res) => {
     
      if(res[0].Message=='Sucessfull'){
        Util.successMsg("Sucessfull");
        resetform();
      }
    }).catch((error) => {
      console.log("Error", error)
    })
  }


  const resetform =()=>{
    setStudentName('');
    setStudentAdmissionDate('')
    setStudentAge('');
    setStudentBformNo('');
    setStudentContactNumber('');
    setStudentgrNo('');
    setStudentCaste('');
    setStudentClass('');
    setStudentfatherName('');
    setStudentdob('');
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
  if(studentClass>8){
    Util.errorMsg("Class must be less or equal than 8")
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
        placeholder="Student Age"
        value={studentage}
        keyboardType='numeric'
        onChangeText={(text) => setStudentAge(text)}
      
      />
       

<TextInput
        style={styles.input}
        placeholder="B-Form No"
        value={studentBfromNo}
        keyboardType='numeric'
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
        placeholder="Enter Class"
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



