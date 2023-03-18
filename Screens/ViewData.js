
import { StyleSheet,View,Button,TextInput, ScrollView, TouchableOpacity} from 'react-native';
//Classes
import Class1 from './Class1';
import Class2 from './Class2';
import Class3 from './Class3';
import Class4 from './Class4';
import Class5 from './Class5';
import Class6 from './Class6';
import Class7 from './Class7';
import Class8 from './Class8';

//Card Components 
import Class1card from './Class1card'
import Class2card from './Class2card'
import Class3card from './Class3card'
import Class4card from './Class4card'
import Class5card from './Class5card'
import Class6card from './Class6card'
import Class7card from './Class7card'
import Class8card from './Class8card'
const ViewData=({navigation})=>{
 
    return(
  
      <View style={styles.ViewContainer} >

<View style={styles.ViewContainerNested}>
<TouchableOpacity onPress={()=>(navigation.navigate(Class1))}>
<Class1card/>
</TouchableOpacity >
<TouchableOpacity onPress={()=>(navigation.navigate(Class2))}>
<Class2card/>
</TouchableOpacity>
</View>
<View style={styles.ViewContainerNested}>
<TouchableOpacity onPress={()=>(navigation.navigate(Class3))}>
<Class3card/>
</TouchableOpacity>
<TouchableOpacity onPress={()=>(navigation.navigate(Class4))}>
<Class4card/>
</TouchableOpacity>
</View>
<View style={styles.ViewContainerNested}>
<TouchableOpacity onPress={()=>(navigation.navigate(Class5))}>
<Class5card/>
</TouchableOpacity>
<TouchableOpacity onPress={()=>(navigation.navigate(Class6))}>
<Class6card/>
</TouchableOpacity>
</View>
<View style={styles.ViewContainerNested}>
<TouchableOpacity onPress={()=>(navigation.navigate(Class7))}>
<Class7card/>
</TouchableOpacity>
<TouchableOpacity onPress={()=>(navigation.navigate(Class8))}>
<Class8card/>
</TouchableOpacity>

</View>

      </View> 
     
    )
}

const styles = StyleSheet.create({
  ViewContainer:{
flex:1,
paddingTop:10,
marginLeft:5,
margin:10,
  },
  ViewContainerNested:{
    flex:1,     
    paddingBottom:10,  
    
 flexDirection:'row'
      },
})
export default ViewData;