import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView,Image, StyleSheet,LinearLayout} from 'react-native'
import { USERS } from '../../data/users'
// import { VERTICAL } from 'react-native/Libraries/Components/ScrollView/ScrollViewContext'


const Stories = () => {
  return (
    
    <View style={{marginBottom:13,}} >
    <ScrollView   horizontal={true}  showsVerticalScrollIndicator={false} 
    style={styles.scl}>
     {USERS.map((story1,index)=>(
           <View key={index} style={{textAlign:'center'}}>
           <Image source={{uri:story1.image}}
            style={styles.story}  />
            <Text style={{color:'white',justifyContent:'space-evenly',}}>
            {story1.user.length > 12 ? story1.user.slice(0,12).toLowerCase()+'...'
            : story1.user.toLowerCase()}</Text>
            </View>
           )) }
           </ScrollView>
           
   </View>
    )
}

export default Stories

const styles = StyleSheet.create({
  story:{
      width:70,
      height:70,
      borderRadius:50,
      zIndex:100,
      margin:10,
      borderWidth:3,
      borderColor:'#F77737'
       },
    
   

})