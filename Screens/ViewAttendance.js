import React from 'react-native'
import {StyleSheet,View, Button,Text,TouchableOpacity} from 'react-native'
import LottieView from 'lottie-react-native'


export default function ViewAttendance(){
    return(


        <View  color='#1F6478' style={style.Cardcontainer}>
      
     
        <LottieView source={require('../LottieFiles/78298-loginv2.json')}  autoPlay={true}></LottieView>
         <Text style={{ fontSize:20, color:'black'}}>Attendance Report</Text> 
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