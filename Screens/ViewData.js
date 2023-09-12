import { StyleSheet,View,TouchableOpacity,BackHandler, ScrollView,Text, Alert,Image} from 'react-native';
import React from 'react'
import LottieView from 'lottie-react-native';
import Utils from './Toast';
import { db } from './FireBase';
import Class from './Class';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
 
const ViewData=({navigation})=>{


  const MoveScreen = async (Class) => {
    
  
    try {
      const collectionRef = db
  .collection('Admission')
  .where('Status', '==', 'Enrolled').where('Class','==',Class);
      const snapshot = await collectionRef.get();
      
      if(snapshot.empty){
        Utils.errorMsg("Record not found ")
        return;
      }
      const data = snapshot.docs.map((doc) => doc.data());


      console.log(data)
      navigation.navigate('Class', {
        TableData: data,
      });
      
    } catch (error) {
      console.log(error);  
    }
  };
  
  const lottieAddresses = [
    {
      onPress: () =>MoveScreen('1'),
      title: 'Class One',
      myPath: require('../LottieFiles/7031-colourfull-number-1.json'),
    },
  {
    onPress:() =>MoveScreen('2'),
    title: 'Class Two',
    myPath: require('../LottieFiles/7032-colourfull-number-2 (1).json')
  },
  {
    onPress: () =>MoveScreen('3'),
    title: 'Class Three',
    myPath: require('../LottieFiles/7033-colourfull-number-3.json')
  },
  {
    onPress:() => MoveScreen('4'),
    title: 'Class Four',
    myPath: require('../LottieFiles/7034-colourfull-number-4.json')
  },
  {onPress:() => MoveScreen('5'),
    title: 'Class Five',
    myPath: require('../LottieFiles/7035-colourfull-number-5.json')
  },
  {
    onPress:() => MoveScreen('6'),
    title: 'Class Six',
    myPath: require('../LottieFiles/7036-colourfull-number-6.json')
  },
  {
    onPress:() => MoveScreen('7'),
    title: 'Class Seven',
    myPath: require('../LottieFiles/7037-colourfull-number-7.json')
  },
  {
    onPress:() => MoveScreen('8'),
    title: 'Class Eight',
    myPath: require('../LottieFiles/7038-colourfull-number-8.json')
  }
];

const renderCards = () => {
  return lottieAddresses.map((address, index) => (
    <TouchableOpacity key={index} onPress={address.onPress}>
      <ClassComponent title={address.title} myPath={address.myPath} />
    </TouchableOpacity>
  ));
};

return (
  <View>
  <ScrollView>
    {renderCards()}
    
  </ScrollView>
  <Toast ref={(ref)=>Toast.setRef(ref)}/>
  </View>
);
}
function ClassComponent({ title, myPath }) {
  return (
    <View style={styles.Cardcontainer}>
      <LottieView source={myPath} autoPlay loop />
    </View>
  );
}

export default ViewData;

const styles=StyleSheet.create
  ({
    ImageBackgroundcontainer: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:'column',
      padding:10,
      

 
      justifyContent: 'center',
    
      
    },
    
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
      LottieContainer:{
                width:100,
              },
    title: {
      fontSize: 20,
      color: 'black',
      textAlign:'center',
    },
    ImageContainer:{
      width:100,
      height:100,
      paddingRight:10,
      paddingTop:10,
    },

   } );

