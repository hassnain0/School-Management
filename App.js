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
import LoginScreens1 from './Screens/LoginScreens1';
import LoginScreens2 from './Screens/LoginScreens1';
import SplashScreen from './Screens/SplashScreen';
import ReadingSplash from './Screens/ReadingSplash';
import TouchableAttendance from './Screens/TouchableAttendance';
import RegisterStudent from './Screens/Registerstudent';
import AddTeacher from './Screens/AddTeacher';
import Class1 from './Screens/Class1';
import Class2 from './Screens/Class2'
import Class3 from './Screens/Class3'
import Class4 from './Screens/Class4'
import Class5 from './Screens/Class5'
import Class6 from './Screens/Class6'
import Class7 from './Screens/Class7'
import Class8 from './Screens/Class8'

import ShowAttendance from './Screens/ShowAttendance';
import AnotherSplashScreen from './Screens/AnotherSplashScreen';
import { AsyncStorage } from 'react-native';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} 
       options={{title:'       Government School FatehPur',headerTintColor:'#ffff',headerBackVisible:false ,statusBarColor:'#29819C',headerStyle:{
        backgroundColor:'#29819C',
       }
       }}/>
     <Stack.Screen name='AnotherSplashScreen' component={AnotherSplashScreen } options={{headerShown:false,statusBarColor:'#29819C'}}/>
    <Stack.Screen name="SplashScreen" component={SplashScreen}  options={{headerShown:false,statusBarColor:'#29819C'}}/>   
    {/* <Stack.Screen name="AnotherAttendenceSheet" component={AnotherAttendenceSheet}  options={{headerShown:false}}/> */}
    {/* <Stack.Screen name="Another" component={Another}  options={{headerShown:false}}/> */}
      <Stack.Screen
        name="Login"
        component={Login}options={{headerShown:false,statusBarColor:'#29819C'}}/>
       <Stack.Screen name="TouchableAttendance" component={TouchableAttendance} options={{title:'   Teachers  Attendence',statusBarColor:'#29819C'}}/>
       
        <Stack.Screen name="ReadingSplash" component={ReadingSplash}  options={{headerShown:false,statusBarColor:'#29819C'}}/>
        <Stack.Screen name="Class1" component={Class1}  options={{headerTitleAlign:'center',title:'Class One',headerTintColor:'#ffff',headerBackVisible:false ,statusBarColor:'#29819C',headerStyle:{
        backgroundColor:'#29819C',
       }
       }}/>
        <Stack.Screen name="Class2" component={Class2} options={{headerTitleAlign:'center',title:'Class Two',headerTintColor:'#ffff',headerBackVisible:false ,statusBarColor:'#29819C',headerStyle:{
        backgroundColor:'#29819C',}       
       }}/>
        <Stack.Screen name="Class3" component={Class3} options={{headerTitleAlign:'center',title:'Class Three',headerTintColor:'#ffff',headerBackVisible:false ,statusBarColor:'#29819C',headerStyle:{
        backgroundColor:'#29819C',
    
       }
       
       }}/>
        <Stack.Screen name="Class5" component={Class5}options={{headerTitleAlign:'center',title:'Class Five',headerTintColor:'#ffff',headerBackVisible:false ,statusBarColor:'#29819C',headerStyle:{
        backgroundColor:'#29819C',
    
       }
       
       }}/>
        <Stack.Screen name="Class6" component={Class6} options={{headerTitleAlign:'center',title:'Class Six',headerTintColor:'#ffff',headerBackVisible:false ,statusBarColor:'#29819C',headerStyle:{
        backgroundColor:'#29819C',
    
       }
       
       }}/>
        <Stack.Screen name="Class7" component={Class7} options={{headerTitleAlign:'center',title:'Class Seven',headerTintColor:'#ffff',headerBackVisible:false ,statusBarColor:'#29819C',headerStyle:{
        backgroundColor:'#29819C',
    
       }
       
       }}/>
        <Stack.Screen name="Class8" component={Class8}  options={{headerTitleAlign:'center',title:'Class Eight',headerTintColor:'#ffff',headerBackVisible:false ,statusBarColor:'#29819C',headerStyle:{
        backgroundColor:'#29819C',
    
       }
       
       }}/>
      <Stack.Screen name="Class4" component={Class4} options={{headerTitleAlign:'center',title:'Class Four',headerTintColor:'#ffff',headerBackVisible:false ,statusBarColor:'#29819C',headerStyle:{
        backgroundColor:'#29819C',
    
       }
       
       }}/>

        <Stack.Screen name="ForgotScreen" component={ForgotScreen}  options={{headerShown:false,statusBarColor:'#29819C'}}/>
        <Stack.Screen name="LoginScreens1" component={LoginScreens1}  options={{headerShown:false,statusBarColor:'#29819C'}}/>
        <Stack.Screen name="AddTeacher" component={AddTeacher} options={{headerTitleAlign:'center',title:'Register Teacher',statusBarColor:'#29819C'}}/>
       
      <Stack.Screen name="LottieScreen" component={LottieScreen}  options={{headerShown:false,statusBarColor:'#29819C'}}/>   
      <Stack.Screen name="AddStudent" component={AddStudent}  options={{headerTitleAlign:'center',title:'Register Student',statusBarColor:'#29819C'}}/>  
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
