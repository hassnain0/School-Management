import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ImageBackground,TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Screens/Home'
import Login from './Screens/Login'
import ForgotScreen from './Screens/ForgotScreen'
import AddStudent from './Screens/AddStudent';
import  ViewData from './Screens/ViewData';
import Attendence from './Screens/Attendence';
import SignUP from './Screens/SignUP';
import Card from './Screens/Card';
import LottieScreen from './Screens/LottieScreen';
import SplashScreen from './Screens/SplashScreen';
import ReadingSplash from './Screens/ReadingSplash';
import TouchableAttendance from './Screens/TouchableAttendance';
import RegisterStudent from './Screens/Registerstudent';
import AddTeacher from './Screens/AddTeacher';
import Class from './Screens/Class';

import ShowAttendance from './Screens/ShowAttendance';
import AnotherSplashScreen from './Screens/AnotherSplashScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name='AnotherSplashScreen' component={AnotherSplashScreen } options={{headerShown:false,statusBarColor:'#29819C'}}/>
     <Stack.Screen name="AddTeacher" component={AddTeacher} options={{headerTitleAlign:'center',title:'Register Teacher',statusBarColor:'#29819C'}}/>
     <Stack.Screen name="Home" component={Home} 
       options={{title:'Government School FatehPur',headerTitleAlign:'center',headerTintColor:'#ffff',headerBackVisible:false ,statusBarColor:'#29819C',headerStyle:{
        backgroundColor:'#29819C'}}}/>
    <Stack.Screen name="SplashScreen" component={SplashScreen}  options={{headerShown:false,statusBarColor:'#29819C'}}/>   
    <Stack.Screen name="AddStudent" component={AddStudent}  options={{headerTitleAlign:'center',title:'Register Student',statusBarColor:'#29819C'}}/>
      <Stack.Screen name="Login" component={Login}options={{headerShown:false,statusBarColor:'#29819C'}}/>
       <Stack.Screen name="TouchableAttendance" component={TouchableAttendance} options={{title:'Teachers  Attendence',headerTitleAlign:'center',statusBarColor:'#29819C'}}/>
        <Stack.Screen name="ReadingSplash" component={ReadingSplash}  options={{headerShown:false,statusBarColor:'#29819C'}}/>
        <Stack.Screen name="Class" component={Class}  options={{headerTitleAlign:'center',title:'Class',headerTintColor:'#ffff',headerBackVisible:false ,statusBarColor:'#29819C',headerStyle:{
        backgroundColor:'#29819C',
       }
       }}/>
        <Stack.Screen name="ForgotScreen" component={ForgotScreen}  options={{headerShown:false,statusBarColor:'#29819C'}}/>
      <Stack.Screen name="ViewData" component={ViewData} options={{headerShown:false,statusBarColor:'#29819C'}}/>
      <Stack.Screen name="Attendence" component={Attendence} options={{headerTitleAlign:'center',title:'Attendance Sheet',statusBarColor:'#29819C'}}/>
      <Stack.Screen name="SignUP" component={SignUP} options={{headerTitleAlign:'center',title:'Sign UP',statusBarColor:'#29819C'}} />
      <Stack.Screen name="ShowAttendance" component={ShowAttendance} options={{headerTitleAlign:'center',title:'ShowAttendance',statusBarColor:'#29819C'}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
