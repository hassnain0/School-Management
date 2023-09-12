
import React from 'react-native';
import { StyleSheet,View,Button,TextInput ,Text,TouchableOpacity,Image} from 'react-native';
import LottieView from 'lottie-react-native'
import Login from './Login'


const   ReadingSplash=({navigation})=>{
    return(
 <View style={styles.ViewContainer} >
     
       <View>
       <LottieView  source={require('../LottieFiles/ReadingLottie.json')} autoPlay={true} style={styles.Cardcontainer}></LottieView>
      </View>
     <View >
       <TouchableOpacity onPress={()=>(navigation.navigate('Login'))}>  
             <Text style={styles.TextContainer}>Skip</Text>
       </TouchableOpacity>

     </View>
      

</View>

    )
}

export default ReadingSplash;


const styles=StyleSheet.create({
  TextContainer:{
    alignSelf:'flex-end',
    fontWeight:'bold',
    fontSize:30,
    paddingLeft:280,
    color:'#29819C',
    paddingTop:3,
        },
  
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