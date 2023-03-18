import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const TouchableAttendanceSheet = () => {
  const [attendance, setAttendance] = useState({});

  //Method

const handleSubmit=()=>{

}
  //Method for attendance

  const toggleAttendance = (name) => {

 //Setter for setting attendance
    setAttendance({
      ...attendance,
      [name]: !attendance[name],
    });
  };

  //Array for storing names of faculty
  const names = [' Dr Asghar Ali Manjhoto', ' Dr Liaquat  Memon',' Dr Qurban Ali Memon', 'Dr Mehran Ali Memon', ' Dr Arbab Ali Samejo', 'Dr Irfan Ali Bacho','Dr Mam Sammar Z','Dr Mam Sanam Narejo','Dr Moazam ',' Dr Rizwan Balouch','Dr Shahnawaz Talpur','Dr Bushra Memon','Dr Tauha Hussain', 'Dr Anwar Memon', 'Dr Rashid Memon'];

  return (
    <View style={styles.container}>
        <ScrollView>
      {names.map((name) => (
        <TouchableOpacity
          key={name}
          onPress={() => toggleAttendance(name)}
          style={[
            styles.button,
            { backgroundColor: attendance[name] ? 'red' : 'green' },
          ]}
        >
          <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>

      ))}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
    <Text style={styles.submitButtonText}>Submit</Text>
  </TouchableOpacity>
      </ScrollView>
      
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

export default TouchableAttendanceSheet;
