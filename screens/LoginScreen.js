import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/LoginForm'
const instagram_logo='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png'
const LoginScreen = ({navigation}) => (
    <View style={styles.container}>
    <View style={styles.logoContainer}>
        <Image source={{uri: instagram_logo ,height:100,width:100}}/>
    </View>
    <LoginForm navigation={navigation}/>
    </View>
  
)



export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:50,
        paddingHorizontal:12
    },
    logoContainer:{
        alignItems:'center',
        marginTop:60,
    }
})