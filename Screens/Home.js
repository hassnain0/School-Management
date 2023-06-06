import { StyleSheet,View,TouchableOpacity,BackHandler, ScrollView,} from 'react-native';
import React,{useEffect} from 'react'
import AddStudent from './AddStudent';
import LottieView from 'lottie-react-native';
import Attendence from './Attendence'
import AddTeacher from './AddTeacher';
import TouchableAttendanceSheet from './TouchableAttendance';
import TeacherAttendance from './TeacherAttendance';
import ViewData from './ViewData';
import ShowAttendance from './ShowAttendance';
import ViewAttendance from './ViewAttendance';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation-stack';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import HomeCardComponent from './HomeCardComponent';
 
const Home=({navigation})=>{
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [])
  );
  
    const Navigation=useNavigation();  
     
  const AddStudentScreen=()=>{
     Navigation.navigate("AddStudent")
  }

  const AddTeacherScreen=()=>{
    Navigation.navigate("AddTeacher")
 }
 const StudentAttendanceScreen=()=>{
  Navigation.navigate("AddTeacher")
}
const StaffAttendanceScreen=()=>{
  Navigation.navigate("AddTeacher")
} 
const StudentDataScreen=()=>{
  Navigation.navigate("ViewData")
} 
const ShowAttendanceScreen=()=>{
  Navigation.navigate("ShowAttendance")
} 
return(
<View >
<ScrollView>
 <TouchableOpacity onPress={AddStudentScreen}>
<HomeCardComponent title={"Add Student"} />
</TouchableOpacity>
<TouchableOpacity onPress={AddTeacherScreen}>
<HomeCardComponent title={"Add Teacher"} myPath={'../LottieFiles/98349-teacher-in-classroom.json'}/>
</TouchableOpacity>
<TouchableOpacity onPress={StudentAttendanceScreen}>
<HomeCardComponent title={"Student Attendance"} myPath={'../LottieFiles/114427-attendance-loader.json'}/>
</TouchableOpacity>
<TouchableOpacity onPress={StaffAttendanceScreen}>
<HomeCardComponent title={"Staff Attendance"} myPath={'../LottieFiles/98349-teacher-in-classroom.json'}/>
</TouchableOpacity>
<TouchableOpacity onPress={StudentDataScreen}>
<HomeCardComponent title={"Student Data"} myPath={'../LottieFiles/120950-data-management.json'}/>
</TouchableOpacity>
<TouchableOpacity onPress={ShowAttendanceScreen}>
<HomeCardComponent title={"Staff Data"} myPath={'../LottieFiles/78298-loginv2.json'}/>
</TouchableOpacity>
</ScrollView>
</View>
    )
}
export default Home;

const styles=StyleSheet.create
  ({
    ImageBackgroundcontainer: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:'column',
      padding:10,
      

 
      justifyContent: 'center',
    
      
    },
    CardContainer:{
     borderRadius:0,
    },

    ImageContainer:{
      width:100,
      height:100,
      paddingRight:10,
      paddingTop:10,
    },

   } );

