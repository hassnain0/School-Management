import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import {  ActivityIndicator } from 'react-native-paper';
import { db } from './FireBase';
import Utils from './Toast';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const TouchableAttendance = () => {
  const [loading, setLoading] = useState(false);
  const [attendanceData, setAttendanceData] = useState([]);
 

  //Fetching user name
  useEffect(()=>{
   
  const fetch=async()=>{
    try{
      const names=[];
    const collection= db.collection("Faculty").get();
   
  const data= (await collection).docs.map((doc) => doc.data().Name)
    
    names.push(...data)
    setLoading(true);
    setAttendanceData(names);
  }

catch(error){
  console.log(error)
}
  }
  fetch();

},[])
const [attendanceStatus, setAttendanceStatus] = useState([]);

// ...

useEffect(() => {
  // Initialize attendanceStatus with false values
  setAttendanceStatus(new Array(attendanceData.length).fill(false));
}, [attendanceData]);

// ...


 const toggleAttendance = (name) => {

 //Setter for setting attendance
    setAttendanceStatus({
      ...attendanceStatus,
      [name]: !attendanceStatus[name],
    });
  }; 
  const saveAttendance = async () => {
    setLoading(true);
    const attendenceRecords=[];
    attendanceData.forEach((name)=>{
      const status=attendanceStatus[name]? 'Absent' : 'Present';
      attendenceRecords.push({name,status});

    });
   const date=new Date().toLocaleDateString();
  
    try{ 
      await db.collection("StaffAttendence").add({
        mydate:date,
        Records:attendenceRecords,
}      )  
       Utils.successMsg("Today's attendence sucessfully uploaded")
    }catch(error){
          console.log(error)
    }
 
    setLoading(false);
  };

  return (
 
    <View style={styles.container}>
        <ScrollView>
      {attendanceData.map((name) => (
        <TouchableOpacity
          key={name}
          onPress={() => toggleAttendance(name)}
          style={[
            styles.button,
            { backgroundColor: attendanceStatus[name] ? 'red' : 'green' },
          ]}
        >
          <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>

      ))}
   
      </ScrollView>
      
    {loading ?(  
   <TouchableOpacity style={styles.submitButton} onPress={saveAttendance}>
      <Text style={styles.submitButtonText} >Upload Attendance</Text>
      </TouchableOpacity>
  ):null}
      <Toast  ref={(ref)=>Toast.setRef(ref)}/> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  submitButtonText: {
color: "white",
fontWeight: "600",
fontSize: 18,
},
submitButton: {
  marginLeft:10,
  marginRight:10,
  marginBottom:10,
  borderRadius:5,
  paddingTop:10,
  backgroundColor: "#333",
  padding: 16,
  paddingRight:10,
  alignItems: "center",
  },
});

export default TouchableAttendance;
