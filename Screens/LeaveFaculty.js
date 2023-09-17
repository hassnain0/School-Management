import React, { useEffect, useState } from 'react'
import { View,
         StyleSheet,
         ScrollView,
         Text,
         TouchableOpacity,
         ActivityIndicator,
            } from 'react-native'
import { db } from './FireBase'
import { Row, Table } from 'react-native-table-component'
import Util from './Toast'
import Toast from 'react-native-toast-message'


const LeaveFaculty=()=>{
    const [tableHead,setTableHead]=useState(['S#NO','Name','FatherName','Gender','ContactNumber','CNIC','Designation','Qualification','Department','PlaceOfPosting','Posting','Retirement','Status',])
    const [tableData,setTableData]=useState([null]);
    const [loading,setLoading]=useState(true)

useEffect(()=>{
    const FetchData=async()=>{
        const docref=db.collection("Faculty").where("Status",'==','Leave');
        const snapshot=await docref.get();
        if(snapshot.empty){
            Util.errorMsg("No Record Found");
            console.log(tableData)
            return;
        }

     const data =snapshot.docs.map((doc)=>doc.data())
     if(data==null){
        return false
     }
  console.log(data)
          setTableData(data);
          console.log("tableData",tableData)
         
    }
 FetchData();
 
},[])
const LeaveFaculty=async(CNIC)=>{
 db.collection("Faculty").where("CNIC",'==',CNIC).get().then((querySnapShot)=>{
  if(querySnapShot.empty){
    return ;
  }
  querySnapShot.forEach((doc)=>{
    doc.ref.update({
      Status:'Leave',
    }).then(()=>{
      Util.successMsg("Teahcer Sucessfully Leaved");
    }).catch((error)=>{
      console.log(error)
    })
  })
 })

}
return(

<ScrollView horizontal>

<View > 
    <ScrollView>
       
          <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
            <Row
              data={tableHead}
              style={{ height: 50, backgroundColor: '#f1f8ff' }}
              textStyle={{ margin: 6, alignSelf: 'center' ,width:110}}
            />
      
      {tableData && tableData.length > 0 && tableData.map((rowData, index) => (
    <Row
        key={index}
        data={[
        <View style={{width:85,}}>
        <Text style={{textAlign:'center', color:'black',fontSize:16,borderBottomColor:'#000000'}}>{index + 1}</Text>
        </View>,
        <View style={{width:85, }}>
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData && rowData.Name ?  rowData.Name : ' '}</Text>
       </View>,
      <View style={{width:80 }}>
        <Text style={{textAlign:'center', color:'black',fontSize:16,}}>{rowData && rowData.FatherName ? rowData.FatherName : '' }</Text>
      </View>,
      <View style={{width:80 }}>
      <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData && rowData.Gender ? rowData.Gender :''}</Text>
    </View>,
      <View style={{ width:90}}>
      <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData && rowData.ContactNumber ? rowData.ContactNumber :''}</Text>
    </View>,
     <View style={{ width:90}}>
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData && rowData.CNIC ? rowData.CNIC :''}</Text>
      </View>,
      <View style={{ width:80}}>
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData && rowData.Designation ? rowData.Designation :'' }</Text>
      </View>,
      <View style={{ width:80}}>
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData && rowData.Qualification ? rowData.Qualification :''}</Text>
      </View>,
      <View style={{width:80 }}>
        <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData && rowData.Department ? rowData.Department :''}</Text>
      </View>,
       <View style={{width:80 }}>
       <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData && rowData.PlaceofPosting ? rowData.PlaceofPosting :''}</Text>
     </View>, 
      <View style={{width:80 }}>
      <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData && rowData.Posting ? rowData.Posting : ''}</Text> 
      </View>,
      <View style={{width:90 }}>
      <Text style={{textAlign:'center', color:'black',fontSize:16}}>{rowData && rowData.Retirement ? rowData.Retirement : ''}</Text> 
      </View>,
      <View style={{width:80 }}>
      <Text style={{textAlign:'center', color:'red',fontSize:16}}>{rowData && rowData.Status ? rowData.Status : ''}</Text> 
      </View>,
     
        ]}
        style={{ height: 40 }}
        textStyle={{ margin: 6 }}
    
        />
))}

         
        </Table>
    </ScrollView>
</View>
      <Toast  ref={(ref)=> Toast.setRef(ref)}/>    
</ScrollView>

)

}
const styles=StyleSheet.create({

})
export default LeaveFaculty;