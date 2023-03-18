import { StyleSheet,View,Button,TextInput ,Text,TouchableOpacity,BackHandler,Image, ScrollView,Alert} from 'react-native';
import React,{useEffect} from 'react'

import Card from '../Screens/Card2';
import AddStudent from './AddStudent';
import LottieView from 'lottie-react-native';
import CardStudent from '../Screens/AddStudentCard'
import AttendanceCard from './AttendanceCard';
import Attendence from './Attendence'
import AddTeacher from './AddTeacher';
import TouchableAttendanceSheet from './TouchableAttendance';
import TeacherAttendance from './TeacherAttendance';
import ViewDataCard from './ViewDataCard';
import ViewData from './ViewData';
import ShowAttendance from './ShowAttendance';
import ViewAttendance from './ViewAttendance';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation-stack';
import { useFocusEffect } from '@react-navigation/native';

 

 
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
  
      
     
  

    return(
      <View style={styles.ViewContainer}>
        <ScrollView>
        
 <TouchableOpacity onPress={()=>(navigation.navigate('AddStudent'))}>
<Card style={styles.CardContainer}/>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate(AddTeacher)}>
<CardStudent style={styles.CardContainer}/>
</TouchableOpacity>

<TouchableOpacity onPress={()=>(navigation.navigate('Attendence'))}>
  <AttendanceCard>
    </AttendanceCard>
</TouchableOpacity>
<TouchableOpacity onPress={()=>(navigation.navigate('TouchableAttendance'))}>
  <TeacherAttendance/>
</TouchableOpacity>
<TouchableOpacity onPress={()=>(navigation.navigate('ViewData'))}>
  <ViewDataCard/>
</TouchableOpacity>
<TouchableOpacity onPress={()=>(navigation.navigate('ShowAttendance'))}>
  <ViewAttendance/>
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
