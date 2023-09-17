import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { db, } from './FireBase';
import Util from './Toast';
import Toast from 'react-native-toast-message';


const Leave= ({ route }) => {
    console.log(route.params)
  const [tableHead, setTableHead] = useState(route.params.TableHead);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  //React Hooks load first when Screen moves
  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []); 
  const fetchData = async () => {
        try {
      const data = route.params.TableData;
      setTableData(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <ScrollView horizontal>
      <View>
        <ScrollView>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
            <Row
              data={tableHead}
              style={{ height: 40, backgroundColor: '#f1f8ff' }}
              textStyle={{ margin: 6, width: 90, alignSelf: 'center' }}
            />
            {tableData.map((rowData, index) => (
              <Row
                key={index}
                data={[
                  <View style={{ width: 90 }}>
                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 16 }}>{index + 1}</Text>
                  </View>,
                  <View style={{ width: 90 }}>
                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 16 }}>{rowData.Name}</Text>
                  </View>,
                  <View style={{ width: 90 }}>
                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 16 }}>{rowData.FatherName}</Text>
                  </View>,
                  <View style={{ width: 90 }}>
                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 16 }}>{rowData.Caste}</Text>
                  </View>,
                  <View style={{ width: 90 }}>
                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 16 }}>{rowData.Age}</Text>
                  </View>,
                  <View style={{ width: 90 }}>
                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 16 }}>{rowData.Class}</Text>
                  </View>,
                  <View style={{ width: 100 }}>
                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 16 }}>{rowData.DateofBirth}</Text>
                  </View>,
                  <View style={{ width: 100 }}>
                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 16 }}>{rowData.DateAdmission}</Text>
                  </View>,
                  <View style={{ width: 90 }}>
                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 16 }}>{rowData.BFROM}</Text>
                  </View>,
                  <View style={{ width: 80 }}>
                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 16 }}>{rowData.GRNo}</Text>
                  </View>,
                  <View style={{ width: 80 }}>
                    <Text style={{ textAlign: 'center', color: 'red', fontSize: 16, fontFamily:'bold' }}>{rowData.Status}</Text>
                  </View>,
                  

                ]}
                style={{ height: 40 }}
                textStyle={{ margin: 6 }}
              />
            ))}
          </Table>

        </ScrollView>

      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ScrollView>

  );
};
const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerText: {
    color: '#fff',
  },
})
export default Leave;
