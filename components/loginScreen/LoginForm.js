import { StyleSheet, Text, View,TextInput, Pressable,Alert} from 'react-native'
import {firebase,db} from '../../firebase'
import React ,{useState} from 'react'
import { TouchableOpacity } from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator' 


const LoginForm = ({navigation}) => {
    const LoginFormSchema = Yup.object().shape({
        email:Yup.string().email().required('An email is required') ,
        password:Yup.string().required().min(8,'Your password has to be have at least 8 character')
     }) 
   
    const onLogin = async(email,password) =>{
        try{
           await firebase.auth().signInWithEmailAndPassword(email,password)
           console.log('success',email,password)
        }catch(error){
         alert(error.message)
        }
    }   
  
     return ( 
    <View style={styles.wrapper}>
   <Formik 
   initialValues={{email:'',password:''}}
   onSubmit={(values)=>{
      onLogin(values.email,values.password)
   }}
   validationSchema={LoginFormSchema}
   validateOnMount={true}
   >
   
    {({handleChange,handleBlur,handleSubmit,values,isValid}) =>(
      
    <>
    
    <View style={[styles.inputField,
    {
        borderColor:
        values.email.length < 1 || Validator.validate(values.email)  ? '#ccc':'red'}]}>
    
    <TextInput 
          placeholder='Phone number username or email'
          placeholderTextColor='#444'
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='emailAddress'
          autoFocus={true}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
      />
  
    </View>
    <View style={[styles.inputField,
    {
        borderColor:
       values.password.length < 1 || values.password.length>=6  ? '#ccc':'red'}]}>
    <TextInput 
          placeholder='Password'
          placeholderTextColor='#444'
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          keyboardType='email-address'
          textContentType='emailAddress'
          autoFocus={true}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
       
     />
     
    </View>
    <View style={{alignItems:'flex-end',marginBottom:30}}>
    <Text style={{color:'blue'}}>Forgot Password</Text>
    </View>
    
    <Pressable 
    titleSize={20} 
    style={[styles.button, { backgroundColor: isValid ? 'pink' : 'gray' }]}
    onPress={handleSubmit}
     >
        <Text style={styles.buttonText}>Log in</Text>
    </Pressable>
    
     <View style={styles.signupContainer}>
         <Text>Don't have an account? </Text>
         <TouchableOpacity onPress={()=>navigation.push('SignupScreen')}>
             <Text style={{color:'blue'}}>Sign Up</Text>
         </TouchableOpacity>
     </View>
     </>
    )}
     </Formik>
    </View>
  )
}



export default LoginForm

const styles = StyleSheet.create({
wrapper:{
marginTop:80
},

inputField:{
    borderRadius:4,
    padding:5,
    backgroundColor:'#FAFAFA',
    marginBottom:10,
    borderWidth:1,
},
button:{
        justifyContent:'center',
        minHeight:42,
        borderRadius:4,
    },
buttonText:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'600',
    color:'#fff',
    fontSize:20
},
signupContainer:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'center',
    marginTop:50,

}

})