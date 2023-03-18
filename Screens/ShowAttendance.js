import React, { useState } from 'react';
import { View, Text, DatePickerAndroid, TouchableOpacity, StyleSheet } from 'react-native';

const ShowAttendance= () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: selectedDate,
        mode: 'calendar',
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        setSelectedDate(new Date(year, month, day));
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDatePicker}>
        <Text style={styles.dateText}>
          {selectedDate.toDateString()}
        </Text>
      </TouchableOpacity>
      <Text style={styles.reportText}>
        Attendance Report for Selected Date
      </Text>
      {}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  dateText: {
    fontSize: 20,
    marginBottom: 10,
  },
  reportText: {
    fontSize: 16,
  },
});

export default ShowAttendance;
