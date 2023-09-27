import { StyleSheet,View,TouchableOpacity,BackHandler, ScrollView,Text, Alert,Image} from 'react-native';
import React,{useEffect,useState} from 'react'
import AddStudent from './AddStudent';
import LottieView from 'lottie-react-native';
import Attendence from './Attendence'
import AddTeacher from './AddTeacher';
import TouchableAttendanceSheet from './TouchableAttendance';
import TeacherAttendance from './TeacherAttendance';
import ViewData from './ViewData';
import ShowAttendance from './ShowAttendance';
import ViewAttendance from './ViewAttendance';
import { useFocusEffect, useNavigation, } from '@react-navigation/native';
import Utils from './Toast';
import { auth, db } from './FireBase';
 import Login from './Login'

import Toast from 'react-native-toast-message';
import Leave from './Leave';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer=createDrawerNavigator();

function HomeScreen({navigation}){
    const [tableHead1, setTableHead1] = useState(['S#No', 'Name', 'FatherName', 'Caste', 'Age', 'Class', 'DateOFBirth', 'DateofAdmsision', 'B-Form NO', 'GR NO', 'Status', ]);
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
  HomeScreen.navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: () => (
      <Button
        title="Open Drawer"
        onPress={() => navigation.openDrawer()}
      />
    ),
  });
  
  function handlelogout(){
    Alert.alert(
      'Logout',
      'Are you sure you want  to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel'
        },
        {
          text: 'Logout',
          onPress: () =>logout()
        }
      ],
      { cancelable: false,
        titleStyle: { color: 'red' },
        messageStyle: { color: 'blue' }, }
    );
    return true;
  };

  const  logout=()=> {
    auth
      .signOut()
      .then(() => Utils.successMsg("Successfully logout")
      );
      navigation.replace("Login")
  }
  const StaffDataScreen=async()=>{
    const collectionRef = db
    .collection('Faculty')
    .where('Status', '==', 'Working')
        const snapshot = await collectionRef.get();
        
        if(snapshot.empty){
          Utils.errorMsg("Record not found ")
          return;
        }
        else{
          navigation.navigate("StaffData")
        }
  }
  const LeaveStudent=async()=>{
    try {
        const collectionRef = db
    .collection('Admission')
    .where('Status', '==', 'Leave')
        const snapshot = await collectionRef.get();
        
        if(snapshot.empty){
          Utils.errorMsg("Record not found ")
          return;
        }
        const data = snapshot.docs.map((doc) => doc.data());

        navigation.navigate('Leave', {
          TableData: data,
          TableHead:tableHead1
        });
        
      } catch (error) {
        console.log(error);  
      }
    };
    const LeaveFaculty=async()=>{
      try {
          const collectionRef = db
      .collection('Faculty')
      .where('Status', '==', 'Leave')
          const snapshot = await collectionRef.get();
          
          if(snapshot.empty){
            Utils.errorMsg("Record not found ")
            return;
          }
          const data = snapshot.docs.map((doc) => doc.data());

          navigation.navigate('LeaveFaculty', {
            TableData: data,
                  });
          
        } catch (error) {
          console.log(error);  
        }
      };
  
const lottieAddresses = [
  {
    onPress:()=>navigation.navigate("AddStudent"),
    title: 'Add Student',
    myPath: require('../LottieFiles/101546-study-abroad.json')
  },
  {
    onPress:()=>navigation.navigate("AddTeacher"),
    title: 'Add Teacher',
    myPath: require('../LottieFiles/98349-teacher-in-classroom.json')
  },
  {
    onPress:()=>navigation.navigate("Attendence"),
    title: 'Student Attendance',
    myPath: require('../LottieFiles/114427-attendance-loader.json')
  },
  {
    onPress:()=>navigation.navigate("TouchableAttendance"),
    title: 'Staff Attendance',
    myPath: require('../LottieFiles/12594-attendence.json')
  },
  {
    onPress:()=>navigation.navigate("ViewData"),
    title: 'Student Data',
    myPath: require('../LottieFiles/86900-file-icon-animation.json')
  },
  {
    onPress:()=>StaffDataScreen(),
    title: 'Staff Data',
    myPath: require('../LottieFiles/31696-file-upload.json')
  },
  {
    onPress:()=>LeaveStudent(),
    title: 'Leaved Student',
    myPath: require('../LottieFiles/Student.json')
  },
  {
    onPress:()=>LeaveFaculty(),
    title: 'Leaved Faculty',
    myPath: require('../LottieFiles/TeacherList.json')
  },
  


];

const renderCards = () => {
  return lottieAddresses.map((address, index) => (
    <TouchableOpacity key={index} onPress={address.onPress}>
      <HomeCardComponent title={address.title} myPath={address.myPath} />
    <Toast ref={(ref)=> Toast.setRef(ref)}/>
    </TouchableOpacity>
   
  ));
};

return (
 <View >
    <ScrollView>
    <TotalStudentCardComponent   />
  <TotalWorkingStaff/>
    {renderCards()}
  </ScrollView>
  </View>
     
  
);
}

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerNavigation />
    </View>
  );
}
function DrawerNavigation() {
  return (
      <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen name="Home" component={HomeScreen} options={{headerTitleAlign:'center'}} />
      <Drawer.Screen name="Logout" component={handlelogout} options={{headerTitleAlign:'center'}} />
      </Drawer.Navigator>
  );
}
function HomeCardComponent({ title, myPath }) {
  return (
    <View style={styles.cardContainer}>
      <LottieView source={myPath} autoPlay loop />
      <Text style={styles.title}>{title}</Text>
      

    </View>
  );
}
function TotalWorkingStaff() {
  const [totalStaff,setTotalStaff]=useState(0);
  useFocusEffect(
    React.useCallback(() => {
      
      fetchTotalStaff();

      return () => {
             };
    }, []))
  const fetchTotalStaff = async () => {
    try {
      const snapshot = await db
        .collection('Faculty')
        .where('Status', '==', 'Working')
        .get();
        
     
      setTotalStaff(snapshot.size);
    } catch (error) {
      console.log('Error fetching total students:', error);
    }
  };
  return (
    <View  style={{backfaceVisibility:'hidden'}}>
      <Text style={styles.title}>{'Total Working Staff: '}{totalStaff }</Text>
    </View>
  );
}
function TotalStudentCardComponent() {
  const [totalStudents,setTotalStudents]=useState(0);
  useFocusEffect(
    React.useCallback(() => {
      fetchTotalStudents();

      return () => {
     
      };
    }, []))

  useEffect(() => {
    fetchTotalStudents();
  }, []);

  const fetchTotalStudents = async () => {
    try {
      const snapshot = await db
        .collection('Admission')
        .where('Status', '==', 'Enrolled')
        .get();
        
     
      setTotalStudents(snapshot.size);
    } catch (error) {
      console.log('Error fetching total students:', error);
    }
  };
  return (
    <View >
      <Text style={styles.title}>{'Total Enrolled Students: '}{totalStudents}</Text>
    </View>
  );
}


const styles=StyleSheet.create
  ({
    ImageBackgroundcontainer: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:'column',
      padding:10,
      justifyContent: 'center',
  
    },
    studentsCard:{
        backfaceVisibility:'hidden',
        flex: 1,
        backgroundColor:'white',
        justifyContent: 'center',
        elevation:10,
        borderRadius:20,
        borderColor:'#007ACC',
        color:'#5388CE',    
        // shadowOffset:'#',
        shadowOpacity:1,
        shadowColor:'#4C5053',
        paddingTop:50,
        alignSelf:'center',
      
        margin:5,
        alignItems:'center'
        
      
    },
    CardContainer:{
     borderRadius:0,
    },
    cardContainer: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 10,
      borderRadius: 10,
      borderColor: '#007ACC',
      color: '#5388CE',
      shadowOffset: '#33333',
      shadowOpacity: 1,
      shadowColor: '#4C5053',
      paddingTop: 100,
      margin: 10,
      marginBottom:10,
      alignItems: 'center'
    },
    title: {
      fontSize: 20,
      color: 'black',
      alignSelf:'center'
    },
    ImageContainer:{
      width:100,
      height:100,
      paddingRight:10,
      paddingTop:10,
    },

   } );