import React, { useEffect, useState } from 'react';
import { View,ScrollView,StyleSheet,Text,TouchableOpacity } from 'react-native';
import { Table, Row} from 'react-native-table-component';

const Class=({route})=>{
   const [tableHead, setTableHead] = useState(['S#No','Name', 'FatherName', 'Caste','Age','Class','DateOFBirth','DateofAdmsision','B-Form NO','GR NO','Status','Leave']);
   const [tableData,setTableData]=useState([]);
   const [loading,setLoading]=useState(true);

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
  },[]);

  const LeaveStudent=()=>{
    
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
        <TouchableOpacity onPress={LeaveStudent}>
      <Text style={{textAlign:'center', color:'white',fontSize:16}}>Leave</Text>    
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
