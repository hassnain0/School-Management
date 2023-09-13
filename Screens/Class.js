import React, { useEffect, useState } from 'react';
import { View,ScrollView,StyleSheet,Text,TouchableOpacity } from 'react-native';
import { Table, Row} from 'react-native-table-component';
import { db,firebase } from './FireBase';
import Util from './Toast';


const Class=({route})=>{
   const [tableHead, setTableHead] = useState(['S#No','Name', 'FatherName', 'Caste','Age','Class','DateOFBirth','DateofAdmsision','B-Form NO','GR NO','Status','Leave']);
   const [tableData,setTableData]=useState([]);
   const [loading,setLoading]=useState(true);
  const [deleteCount,setDeleteCount]=useState(null)
//React Hooks load first when Screen moves
   useEffect(() => {
     const fetchData = async () => {
      try {
        const data=route.params.TableData;
        setTableData(data);       
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
    setLoading(false)
  },[deleteCount]);

  const LeaveStudent=(studentData)=>{
    
    const bformValue = studentData.BFROM; // Get the value from studentData
console.log(studentData)
    if (bformValue !== undefined && bformValue !== null) {
      // Create the Firestore query with the valid field value
      db.collection('Admission')
        .where('BFORM', '==', bformValue)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // Update the document as needed
            doc.ref.update({
              Status: "Leave"
            })
            .then(() => {
              Util.successMsg("Student Successfully got leave");
              setDeleteCount((prev) => prev + 1);
            })
            .catch((error) => {
              console.error('Error updating document:', error);
            });
          });
        })
        .catch((error) => {
          console.error('Error fetching documents:', error);
        });
    } else {
      console.error('Invalid or undefined value for BFORM');
    }
    
    
  }

    return (
      <ScrollView horizontal>
        
       <View style={styles.spinnerContainer}>
      </View>
      <View>
        <ScrollView>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
          <Row
          data={tableHead}
              style={{ height: 40, backgroundColor: '#f1f8ff' }}
              textStyle={{ margin: 6,width:80,alignSelf:'center'}}
            />
{tableData.map((rowData, index) => (
  <Row
    key={index}
    data={[
      <View style={{width:40 }}>
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{index + 1}</Text>
      </View>,
      <View style={{width:80 }}>
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData.Name}</Text>
      </View>,
      <View style={{width:80 }}>
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData.FatherName}</Text>
      </View>,
      <View style={{width:80 }}>
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData.Caste}</Text>
      </View>,
      <View style={{width:80 }}>
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData.Age}</Text>
      </View>,
      <View style={{ width:80}}>
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData.Class}</Text>
      </View>,
      <View style={{ width:80}}>
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData.DateofBirth}</Text>
      </View>,
      <View style={{ width:80}}>
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData.DateAdmission}</Text>
      </View>,
      <View style={{width:80 }}>
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData.BFROM}</Text>
      </View>,
       <View style={{width:80 }}>
       <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData.GRNo}</Text>
     </View>,
      <View style={{width:80 }}>
      <Text style={{textAlign:'center', color:'green',fontSize:16}}>{rowData.Status}</Text> 
      </View>,
      <View style={{width:80,backgroundColor:'red',alignSelf:'center' }}>
        <TouchableOpacity onPress={() => LeaveStudent(rowData)}>
      <Text style={{textAlign:'center', color:'white',fontSize:16,elevation:3,borderRadius:1}}>Leave</Text>    
      </TouchableOpacity>
      </View>,
      
    ]}
    style={{ height: 40 }}
    textStyle={{ margin: 6 }}
  />
))}
          </Table>
        </ScrollView>
      </View>
    </ScrollView>
    );
  };
const styles=StyleSheet.create({
spinnerContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
spinnerText: {
  color: '#fff',
},
})
export default Class;
