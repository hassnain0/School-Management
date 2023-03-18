
import React from 'react-native';
import { StyleSheet,View,Button,TextInput ,Text,TouchableOpacity,Image,KeyboardAvoidingView} from 'react-native';
import AddTeacher from './AddTeacher';
import Home from './Home'
import LottieView from 'lottie-react-native'
import SignUP from './SignUP'
import Login from './Login';
const   LoginScreens1=({navigation})=>{
    return(
        
        <KeyboardAvoidingView>
 <TouchableOpacity onPress={()=>(navigation.navigate('Login'))}>
 <View style={styles.ViewContainer} >
       <View>
       <LottieView  source={require('../LottieFiles/Form.json')} autoPlay={true} style={styles.Cardcontainer}></LottieView>
      </View>

</View>
</TouchableOpacity>
</KeyboardAvoidingView>
    )
}

export default LoginScreens1;


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