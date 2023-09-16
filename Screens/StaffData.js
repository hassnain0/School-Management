import React, { useEffect, useState } from 'react'
import { View,
         StyleSheet,
         ScrollView,
            } from 'react-native'
import { db } from './FireBase'
import { Row, Table } from 'react-native-table-component'
import Util from './Toast'



const StaffData=()=>{
    const [tableHead,setTableHead]=useState(['S#NO','Name','FatherName','Caste','Gender','ContactNumber','CNIC','Designation','Qualification','Department','PlaceOfPosting','Posting','Retiremnet','Status'])
    const [tableData,setTableData]=useState(null);
useEffect(()=>{
    const FetchData=async()=>{
        const docref=db.collection("Faculty");
        const snapshot=await docref.get();
        if(snapshot.empty){
            Util.errorMsg("No Record Found");
            return;
        }

     const data =snapshot.docs.map((doc)=>doc.data())
       setTableData(data);
    }
    FetchData();
})
return(
<ScrollView horizontal>
<View>
    <ScrollView>
        <Table style={{borderWidth:1, borderColor:'#C1C0B9'}}>
        <Row data={tableHead}
        style={{backgroundColor:'#f1f8ff',height:40}}
        textStyle={{margin:6, width:80,alignSelf:'center'}}
        />
        {tableData.map((rowData,index)=>{
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
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData.Gender}</Text>
      </View>,
      <View style={{ width:80}}>
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData.CNIC}</Text>
      </View>,
      <View style={{ width:80}}>
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData.Designation}</Text>
      </View>,
      <View style={{ width:80}}>
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData.Qualification}</Text>
      </View>,
      <View style={{width:80 }}>
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData.Department}</Text>
      </View>,
       <View style={{width:80 }}>
       <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData.PlaceOfPosting}</Text>
     </View>,
      <View style={{width:80 }}>
      <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData.Posting}</Text> 
      </View>,
      <View style={{width:80 }}>
      <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData.Retirement}</Text> 
      </View>,
      <View style={{width:80 }}>
      <Text style={{textAlign:'center', color:'green',fontSize:16}}>{rowData.Status}</Text> 
      </View>,
      <View style={{width:80,backgroundColor:'red',alignSelf:'center' }}>
        <TouchableOpacity onPress={() => LeaveStudent}>
      <Text style={{textAlign:'center', color:'white',fontSize:16,elevation:3,borderRadius:1}}>Leave</Text>    
      </TouchableOpacity>
      </View>,
      
    ]}
    style={{ height: 40 }}
    textStyle={{ margin: 6 }}
  />
        })}
        </Table>
    </ScrollView>
</View>
</ScrollView>
)

}
const styles=StyleSheet.create({

})
export default StaffData;