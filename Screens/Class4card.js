import React from 'react-native'
import {StyleSheet,View, Button,Text,TouchableOpacity} from 'react-native'
import LottieView from 'lottie-react-native'


export default function Class4card(){
    return(


        <View  color='#1F6478' style={style.Cardcontainer}>
    <LottieView source={require('../LottieFiles/7034-colourfull-number-4.json')}  autoPlay loop></LottieView>
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