
import React from 'react-native';
import { StyleSheet,View,Button,TextInput ,Text,TouchableOpacity,Image} from 'react-native';
import LottieView from 'lottie-react-native'
import LoginScreens1 from './LoginScreens1';
import Login from './Login'


const   ReadingSplash=({navigation})=>{
    return(
 <View style={styles.ViewContainer} >
     
       <View>
       <LottieView  source={require('../LottieFiles/ReadingLottie.json')} autoPlay={true} style={styles.Cardcontainer}></LottieView>
      </View>
     <View >
       <TouchableOpacity onPress={()=>(navigation.navigate('Login'))}>  
             <Text style={{fontWeight:'bold',fontSize:25, color:'#29819C'}}>                                              Skip</Text>
       </TouchableOpacity>

     </View>
      

</View>

    )
}

export default ReadingSplash;


const styles=StyleSheet.create({

  
    Cardcontainer:{
  padding:170,
  
    },

    ViewContainer:{
        padding:20,
        paddingBottom:50,
        flex:1,
        flexDirection:'row',

        color:'#1F6478'
    }
})