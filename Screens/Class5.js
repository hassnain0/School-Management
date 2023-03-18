import React, { useState } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
const StudentItem = ({ student }) => (
    <View style={{ padding: 10, backgroundColor: '#f2f2f2' }}>
      <Text>Name: {student.name}</Text>
      <Text>Roll Number: {student.rollNumber}</Text>
      <Text>Marks: {student.marks}</Text>
    </View>
  );
  const Class5 = () => {
    const [students, setStudents] = useState([
      { name: 'John Doe', rollNumber: 'A001', marks: 80 },
      { name: 'Jane Doe', rollNumber: 'A002', marks: 85 },
      // Add more students here
    ]);
    const [searchTerm, setSearchTerm] = useState('');
  
    const filteredStudents = students.filter(
      (student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <View>
        <TextInput
          style={{ height: 40, padding: 10, margin: 10 }}
          placeholder="Search by name or roll number"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <FlatList
          data={filteredStudents}
          renderItem={({ item }) => <StudentItem student={item} />}
          keyExtractor={(item) => item.rollNumber}
        />
      </View>
    );

  };
  export default Class5;
    