import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  
} from 'react-native';
import { db } from './FireBase';
import {Picker} from '@react-native-picker/picker';
import Utils from './Toast';
import NetInfo from '@react-native-community/netinfo';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const Attendence = () => {
  const [loading, setLoading] = useState(false);
  const [attendanceData, setAttendanceData] = useState([]);
  const [isConnected, setIsConnected] = useState(true);
  const [selectedClass, setSelectedClass] = useState(''); // Default class
  const [attendanceStatus,setAttendanceStatus]=useState([]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Fetch student information based on the selected class
  useEffect(() => {
    const fetch = async () => {
      try {
        const names = [];
        const collection = db
          .collection('Admission')
          .where('Status', '==', 'Enrolled')
          .where('Class', '==', selectedClass) // Filter by selected class
          .get();

        const data = (await collection).docs.map((doc) => doc.data().Name);

        names.push(...data);
        console.log(data);
        setLoading(true);
        setAttendanceData(names);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [selectedClass]); 
  const saveAttendance = async () => {
    setLoading(true);
    const attendenceRecords=[];
    attendanceData.forEach((name)=>{
      const status=attendanceStatus[name]? 'Absent' : 'Present';
      attendenceRecords.push({name,status});

    });
   const date=new Date().toLocaleDateString();
   
    try{  if(!isConnected){
        Utils.errorMsg("Please connect your internet connection")
        return false;
    }
      await db.collection("StudentAttendence").add({
        mydate:date,
        Records:attendenceRecords,
        Class:selectedClass
}      )  
       Utils.successMsg("Today's attendence sucessfully uploaded")
    }catch(error){
          console.log(error)
    }
  }

  const toggleAttendance = (name) => {

    //Setter for setting attendance
       setAttendanceStatus({
         ...attendanceStatus,
         [name]: !attendanceStatus[name],
       });
     }; 
  return (
    <View style={styles.container}>
     
      <Picker
        selectedValue={selectedClass}
        onValueChange={(itemValue) => setSelectedClass(itemValue)}
      >
        <Picker.Item label="Choose class for Attendance" value=" " />
        <Picker.Item label="Class 1" value="1" />
        <Picker.Item label="Class 2" value="2" />
        <Picker.Item label="Class 3" value="3" />
        <Picker.Item label="Class 4" value="4" />
        <Picker.Item label="Class 5" value="5" />
        <Picker.Item label="Class 6" value="6" />
        <Picker.Item label="Class 7" value="7" />
        <Picker.Item label="Class 8" value="8" />
      </Picker>

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

      {loading ? (
        <TouchableOpacity style={styles.submitButton} onPress={saveAttendance}>
          <Text style={styles.submitButtonText}>Upload Attendance</Text>
        </TouchableOpacity>
      ) : null}

      {/* Toast component */}
      <Toast ref={(ref) => Toast.setRef(ref)} />
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
