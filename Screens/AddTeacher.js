import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
 
} from "react-native";
import Util from './Toast'
import { Picker } from "@react-native-picker/picker";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { db } from "./FireBase";
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase/compat'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
const AddTeacher = () => {
  const [fullName, setFullName] = useState(null);
  const [fatherName, setFatherName] = useState(null);
  const [contactNumber, setContactNumber] = useState(null);
  const [dateOfRetirement, setDateofRetirement] = useState(null);
  const [CNICNo, setCNICNo] = useState(null);
  const [gender, setGender] = useState('');
  const [nameOfDepartment, setNameOfDepartment] = useState(null);
  const [bps, setbpsNo] = useState(null);
  const [qualifiacation, setQualification] = useState(null);
  const [designation, setDesignation] = useState(null);
  const [placeofPosting, setPlaceofPosting] = useState(null);
  const handleSubmit=async()=>{

    if(fullName==null||fullName==''){
      Util.errorMsg("Please enter teacher name");
      return ;
    }
    if(fatherName==null||fatherName==''){
      Util.errorMsg("Please enter father name");
      return ;
    }
    
    if(contactNumber==null||contactNumber==''){
      Util.errorMsg("Please enter contact number");
      return ;
    }
   if(CNICNo==null||CNICNo==''){
    Util.errorMsg("Please enter CNIC No");
    return ;
   }
    if(gender==" "||gender==''){
      Util.errorMsg("Please select Gender");
      return ;
    }
    if(qualifiacation==null||qualifiacation==''){
      Util.errorMsg("Please enter qualification");
      return ;
    }
   
    
    if(bps==null||bps==''){
      Util.errorMsg("Please enter BPS No");
      return ;
    }
    if(dateOfRetirement==null||dateOfRetirement==''){
      Util.errorMsg("Please enter date of Retirement");
      return ;
    }
    if(placeofPosting==null||placeofPosting==''){
      Util.errorMsg("Please enter place of posting ");
      return ;
    }
    if(nameOfDepartment==null||nameOfDepartment==''){
      Util.errorMsg("Please enter Name of Department ");
      return ;
    }
    if(designation==null||designation==''){
      Util.errorMsg("Please enter Name of Department ");
      return ;
    }
  try{
    const currentUser =firebase.auth().currentUser.email;
    await db.collection("Faculty").doc(currentUser.uid).set({
    
    Name:fullName,
    Status:'Working',
    FatherName:fatherName,
    CNIC:CNICNo,
    Department:nameOfDepartment,
    Posting:placeofPosting,
    Qualification:qualifiacation,
    Department:nameOfDepartment,
    Retirement:dateOfRetirement,
    Gender:gender,
    Designation:designation,
    PlaceofPosting:placeofPosting,
    ContactNumber:contactNumber,
  }).then(
    Util.successMsg("Teacher Enrolled Sucessfully"),
    resetForm()
  ).catch(error=>{
    console.log(error)
  })
  }catch(error){
console.log(error)
  }
}


const resetForm=()=>{
  setFullName('');
  setFatherName('');
  setContactNumber('');
  setCNICNo('');
  setGender('Select your gender')
 setbpsNo('');
 setDateofRetirement('');
 setNameOfDepartment('')
 setDesignation('')
 setQualification('')
setPlaceofPosting('');
}

return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.sectionTitle}>Personal Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Father Name"
        value={fatherName}
        onChangeText={(text) => setFatherName(text)}
      />
    <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={contactNumber}
        keyboardType="numeric"
        onChangeText={(text) => setContactNumber(text)}
      />
       
      
        <TextInput
        style={styles.input}
        placeholder="CNIC"
        value={CNICNo}
        keyboardType="numeric"
        onChangeText={(text) => setCNICNo(text)}
        />
        <Picker
        selectedValue={gender}
        style={{ height: 50, width: 350,borderRadius:10,borderColor: "#ccc",backgroundColor: "#ccc",
        borderWidth: 1, }}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>        
       <Picker.Item label="Select gender" value=" " />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker> 
      <Text style={styles.sectionTitle}>Records</Text>
      <TextInput
        style={styles.input}
        placeholder="Qualification"
        value={qualifiacation}
        onChangeText={(text) => setQualification(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="BPS-No"
        value={bps}
        onChangeText={(text) => setbpsNo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Retirement"
        value={dateOfRetirement}
        onChangeText={(text) => setDateofRetirement(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Place of Posting"
        value={placeofPosting}
        onChangeText={(text) => setPlaceofPosting(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Name Of Department"
        value={nameOfDepartment}
        onChangeText={(text) => setNameOfDepartment(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Desgination"
        value={designation}
        onChangeText={(text) => setDesignation(text)}
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

export default AddTeacher;

