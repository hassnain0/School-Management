import React ,{useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
import LottieView from 'lottie-react-native';
import SplashScreen from './SplashScreen';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './FireBase';

const   AnotherSplashScreen = ({ navigation }) => {
  useEffect(() => {

    setTimeout(() => {
      onAuthStateChanged(auth, (user) => {  
        if (user) {          
              navigation.replace("Home")
    }
    else{
      navigation.navigate(SplashScreen);
    }
   });
      
    }, 3000);

    return () => {
     
    };
  }, []);

  
  useEffect(()=>{
  
  })

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../LottieFiles/98297-book-idea.json')}
        autoPlay
        loop
      />
      <Text style={{ fontSize:30, color :'white', marginTop:450, color:'black'}}>   Government School </Text>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default AnotherSplashScreen;
