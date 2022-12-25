import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import SignupForm from '../components/signupScreen/SignupForm'
const instagram_logo='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png'
const SignupScreen = ({navigation}) => (
    <View style={styles.container}>
    <View style={styles.logoContainer}>
        <Image source={{uri: instagram_logo ,height:100,width:100}}/>
    </View>
    <SignupForm navigation={navigation}/>
    </View>
  
)



export default SignupScreen

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