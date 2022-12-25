import {View, Image, StyleSheet,Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
    
    <TouchableOpacity>
    <Image
      style={styles.logo} 
      source={require('../../assets/logo.png')} />
    </TouchableOpacity>

    <View style={styles.iconsContainer}>
     <TouchableOpacity onPress={()=>navigation.push('NewPostScreen')}>
     <Image
         source={require('../../assets/add_icon.png')}
         style={styles.icon}
     />
     </TouchableOpacity>  
     <TouchableOpacity>
     <Image
         source={require('../../assets/like_icon.png')}
         style={styles.icon}
     />
     </TouchableOpacity>  
     <TouchableOpacity>
     <View style={styles.unreadBadge}>
      <Text style={styles.unreadBadgeText}>11</Text>
     </View>
    
    <Image
         source={require('../../assets/chat_icon.png')}
         style={styles.icon}
     />
     </TouchableOpacity>  
   
    </View>
    </View>
  )
}

export default Header
const styles = StyleSheet.create({
    container:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    marginHorizontal:20
    },
  logo:{
      width:100,
      height:50,
      resizeMode:'contain',
  },
  iconsContainer:{
    flexDirection:'row'
  },
  icon:{
      width:30,
      height:30,
      marginLeft:10,
      resizeMode:'contain'
  },
  unreadBadge:{
      backgroundColor:"#FF3250",
      position:'absolute', 
      left:20,
      bottom:18,
      width:25,
      height:15,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      zIndex:100

  },
  unreadBadgeText:{
    color:'white',
    fontWeight:'600'
  }
})