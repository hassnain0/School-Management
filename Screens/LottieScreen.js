
import React from 'react-native';
import { StyleSheet,View,Button,TextInput ,Text,TouchableOpacity,Image} from 'react-native';
import AddTeacher from './AddTeacher';
import Home from './Home'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native'
import SignUP from './SignUP'
const   LottieScreen=({navigation})=>{
    return(
        
 <TouchableOpacity onPress={()=>(navigation.navigate('ReadingSplash'))}>
 <View style={styles.ViewContainer} >
       <View>
       <LottieView  source={require('../LottieFiles/Login.json')} autoPlay={true} style={styles.Cardcontainer}></LottieView>
      </View>

</View>
</TouchableOpacity>
    )
}

export default LottieScreen;


const styles=StyleSheet.create({

    Cardcontainer:{
  padding:200,
    },

    ViewContainer:{
        padding:10,
        paddingTop:150,
        flex:1,
        flexDirection:'row',

        color:'#1F6478'
    }
})