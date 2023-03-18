
import { useLinkProps } from '@react-navigation/native';
import React, { ImageBackground } from 'react-native'
import {StyleSheet,View, Button,Text} from 'react-native'
import LottieView from 'lottie-react-native'


export default function AttendanceCard({navigation}){
    return(


      <View>
        <View  color='#1F6478' style={style.Cardcontainer}>
           <LottieView source={require('../LottieFiles/114427-attendance-loader.json')}  autoPlay={true}></LottieView>
           <Text style={{fontSize:20, color:'black'}}>Student's Attendance Portal</Text>
        </View>
       
        </View>
    )
}

const style=StyleSheet.create({
    Cardcontainer: {
      flex: 1,
      backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        elevation:50,
        borderRadius:20,
        borderColor:'#007ACC',
        color:'#5388CE',    
        shadowOffset:'#33333',
        shadowOpacity:1,
        shadowColor:'#4C5053',
        paddingTop:200,

        margin:20,
        alignItems:'center'
        
        
        
      
      },

ViewContainer:{

},

              LottieContainer:{
                width:100,
              }
});