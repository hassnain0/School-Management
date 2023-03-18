import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import { Checkbox, Divider, ActivityIndicator } from 'react-native-paper';

const AttendanceSheet = () => {
  const [loading, setLoading] = useState(false);
  const [attendanceData, setAttendanceData] = useState([
    { name: 'Hassnain', isPresent: false },
    { name: 'Ali Nawaz ', isPresent: false },
    { name: 'Muhammad Zain ', isPresent: false },
    { name: 'Abdul Sami ', isPresent: false},
    { name: 'Abdul Hafeez ', isPresent: false},
    { name: 'Muhammad Azan ', isPresent: false},
    { name: 'Abdul Hameed', isPresent: false},
    { name: 'Mumtaz Dayo', isPresent: false},
    { name: 'Ali Gohar', isPresent: false},
    { name: 'Muhammad Kamran', isPresent: false},
    { name: 'Fida Hussain', isPresent: false},
    { name: 'Muhammad Umar', isPresent: false},
{ name: 'Hammad Ahmed', isPresent: false},
{ name: 'Junaid Ahmed', isPresent: false},
{ name: 'Muzammil', isPresent: false},
{ name: 'Fardeen Mughal', isPresent: false},
{ name: 'Abdul Qadeer', isPresent: false},
{ name: 'Danish Mehdi', isPresent: false},
{ name: 'Adnan Vighio', isPresent: false},
{ name: 'Hub Ali', isPresent: false},
{ name: 'Shaheer Ahmed Khatri', isPresent: false},
{ name: 'Jawad Ahmed', isPresent: false},
{ name: ' Abudl Majeed', isPresent: false},
  { name: 'Ibrahim', isPresent: false},
    { name: 'Shawaiz Qureshi', isPresent: false},
      { name: 'Muzammil Ahmed', isPresent: false},
      { name: 'Lachman Singh', isPresent: false},
      { name: 'Ibrahim Ahmed', isPresent: false},


  ]);

  const toggleAttendance = (index) => {
    setAttendanceData((prevData) => {
      let updatedData = [...prevData];
      updatedData[index].isPresent = !updatedData[index].isPresent;
      return updatedData;
    });
  };

  const saveAttendance = async () => {
    setLoading(true);
    // make API call to save attendance data
    // ...

    setLoading(false);
  };

  return (
    <View style={styles.container}>
       
          
      <FlatList

    data={attendanceData}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Checkbox
              status={item.isPresent ? 'checked' : 'unchecked'}
              tint
                            onPress={() => toggleAttendance(index)}
            />
          </View>
        )}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <Divider />}
      />
      {loading ? (
        <ActivityIndicator style={styles.spinner} />
      ) : (
        <View style={styles.saveButtonContainer}>
       <TouchableOpacity onPress={saveAttendance}>
          <Text style={styles.saveButtonText} > 
           
            Save Attendance
          </Text>
          </TouchableOpacity>
        </View>
      )}
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  nameText: {
    fontSize: 18,
  },
  saveButtonContainer: {
    alignItems: 'center',
    padding: 20,
  },
  saveButtonText: {
    fontSize: 18,
    color: 'blue',
  },
  spinner: {
    marginTop: 20,
  },
});

export default AttendanceSheet;
