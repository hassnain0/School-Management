import React from 'react-native'
import {StyleSheet,View, Button,Text,TouchableOpacity} from 'react-native'
import LottieView from 'lottie-react-native'


export default function Class3card(){
    return(


        <View  color='#1F6478' style={style.Cardcontainer}>
    <LottieView source={require('../LottieFiles/7033-colourfull-number-3.json')}  autoPlay loop></LottieView>
        </View>
    )
}

const style=StyleSheet.create({
    Cardcontainer: {
      flex: 1,
      backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        elevation:10,
        borderRadius:20,
        borderColor:'#007ACC',
        color:'#5388CE',    
        // shadowOffset:'#',
        shadowOpacity:1,
        shadowColor:'#4C5053',
        paddingTop:150,
        paddingLeft:150,
        margin:20,
        alignItems:'center'
        
      
      },

ViewContainer:{

},

              LottieContainer:{
                width:100,
              }
});