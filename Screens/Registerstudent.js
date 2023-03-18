import { registerRootComponent } from 'expo';
import React, { useState } from 'react';
import { View, Text,TextInput, TouchableOpacity, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
const RegisterStudent = () => {
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [dob, setDob] = useState('');
  const [bFormNo, setBFormNo] = useState('');
  const [grNo, setGrNo] = useState('');
  const [seriesNo, setSeriesNo] = useState('');
 
 

  return (
    <View style={{  }}>
      
      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Enter name"
      />

      <Text>Father's Name</Text>
      <TextInput
        value={fatherName}
        onChangeText={text => setFatherName(text)}
        placeholder="Enter father's name"
      />

      <Text>Date of Birth</Text>
      <TextInput
        value={dob}
        onChangeText={text => setDob(text)}
        placeholder="Enter date of birth"
      />

      <Text>B Form Number</Text>
      <TextInput
        value={bFormNo}
        onChangeText={text => setBFormNo(text)}
        placeholder="Enter B Form number"
      />

      <Text>GR Number</Text>
      <TextInput
        value={grNo}
        onChangeText={text => setGrNo(text)}
        placeholder="Enter GR number"
      />

      <Text>Series Number</Text>
      <TextInput
        value={seriesNo}
        onChangeText={text => setSeriesNo(text)}
        placeholder="Enter series number"
      />

      <TouchableOpacity >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterStudent;
