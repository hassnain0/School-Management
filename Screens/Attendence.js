import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,} from 'react-native';
import { db } from './FireBase';
import Utils from './Toast';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import NetInfo from '@react-native-community/netinfo'

const Attendence = () => {
  const [loading, setLoading] = useState(true);
   const [attendanceData, setAttendanceData] = useState([]);
   const [isConnected,setIsConnected]=useState(true)

   useEffect(()=>{
    const unsubscribe=NetInfo.addEventListener(state=>{
      setIsConnected(state.isConnected);
    })
    return()=>{
      unsubscribe();
    }
   })
  //Fetching user name
  useEffect(()=>{
   
  const fetch=async()=>{
    try{

      const names=[];
    const collection= db.collection("Admission").where('Status','===','Enrolled');
   
     const data= ( collection).docs.map((doc) => doc.data().Name)
    
    names.push(...data)
    setLoading(false);
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
   console.log("date",date)
    try{  if(!isConnected){
        Utils.errorMsg("Please connect your internet connection")
        return false;
    }
      await db.collection("StudentAttendence").add({
        mydate:date,
        Records:attendenceRecords,
}      )  
       Utils.successMsg("Today's attendence sucessfully uploaded")
    }catch(error){
          console.log(error)
    }
    
    // make API call to save attendance data
    // ...

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
      
      
   <TouchableOpacity style={styles.submitButton} onPress={saveAttendance}>
      <Text style={styles.submitButtonText} >Upload Attendance</Text>
      </TouchableOpacity>
  
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
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerText: {
    color: '#fff',
  },
});

export default Attendence;
