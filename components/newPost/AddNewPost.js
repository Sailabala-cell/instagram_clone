import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import FormikPostUploader from '../../components/newPost/FormikPostUploader'
export default function AddNewPost({navigation}) {
  return (
   <View style={styles.container}>
       <Header navigation={navigation}/>
       <FormikPostUploader navigation={navigation}/>
   </View>
  )
}

const Header = ({navigation}) =>{
    return(
        <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfhEi19WBrou6nXw_LpfxdH5Uidwua9h3NktJoYfarC3ZD6vMBoa8HAl3f4IuJ2Xfyd7c&usqp=CAU'}} style={{width:20,height:30}}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>New Post</Text>
        <Text></Text>
        </View>
    )
  
}


 
const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerText:{
         color:'white',
         zindex:'999',
         fontWeight:'400',
         fontSize:16,
         marginRight:5
    }
})