import {KeyboardAvoidingView, StyleSheet,View,Button,TextInput ,ImageBackground,Image,ScrollView, BackHandler,Text,TouchableOpacity} from 'react-native';
import Card  from './Card';
import React from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { moderateScale, verticalScale ,horizontalScale} from './Dimension';

const Login=({navigation})=>{
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
      
   <ScrollView scrollEnabled={false}>
   <View style={styles.ImageBackgroundcontainer}>
    
      <Card navigation={navigation} />
     
       </View>
 </ScrollView>
    )
}
export default Login;

const styles = StyleSheet.create({

    ImageBackgroundcontainer: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:'column',
      padding:moderateScale(60),
    
    
 
      justifyContent: 'center',
      paddingLeft:verticalScale(70),
      paddingRight:horizontalScale(70)

      
    },

    ImageContainer:{
      width:100,
      height:100,
      paddingRight:horizontalScale(10),
      paddingTop:moderateScale(10),
    },

    CardContainer:{
    
    },
  });