
import React from 'react';
import { StyleSheet,View,Button,TextInput ,Text,TouchableOpacity,Image, Alert, BackHandler} from 'react-native';
import LottieView from 'lottie-react-native'
import Login from './Login'
import ReadingSplash from './ReadingSplash';
import { useFocusEffect } from '@react-navigation/native';
import { moderateScale, verticalScale } from './Dimension';





const   SplashScreen=({navigation})=>{
 
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
        
 
 <View style={styles.MainContainer} >
       <View   style={styles.ViewCOntainer}>
      
       <LottieView  source={require('../LottieFiles/Books.json')} autoPlay={true} style={styles.Cardcontainer}>
       </LottieView>
       
    
      </View>
      <View>
      <TouchableOpacity onPress={()=>(navigation.navigate(Login))}>
      <Text style={styles.TextContainer}>                                                  Skip </Text>
      </TouchableOpacity> 
      </View>
      <Text style={{fontSize:20,paddingTop:500,fontStyle:'normal',marginTop:20,}}>
        It was no accident that the first word of the Quran to be revealed was: Read.
</Text>
    <TouchableOpacity onPress={()=>(navigation.navigate(ReadingSplash))} > 
       
  <LottieView source={require('../LottieFiles/67395-next.json')}  style={styles.ButtonContainer} autoPlay={true}></LottieView>
    </TouchableOpacity>
</View>


    )
}

export default SplashScreen;


const styles=StyleSheet.create({

    TextContainer:{
fontWeight:'bold',
fontSize:25,
color:'#29819C',
paddingTop:20,

    },
    MainContainer:{
    flex:1,
    flexDirection:'column'
    
},
    Cardcontainer:{
        padding:190,
        paddingTop:500,
          },
      
          ViewContainer:{
              padding:10,
              paddingTop:300,
              flex:1,
              flexDirection:'row',
      
              color:'#1F6478'
          },
          ButtonContainer: {
            borderRadius:50,
            paddingLeft:verticalScale(80),
            padding:moderateScale(10),
            
            width:200,
            
            
            },
           
})