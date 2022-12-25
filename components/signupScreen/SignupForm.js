import { StyleSheet, Text, View,TextInput, Pressable} from 'react-native'
import React ,{useState,useEffect} from 'react'
import { TouchableOpacity } from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator' 
import {firebase,db} from '../../firebase'
import * as corsModule from 'cors'



const SignupForm = ({navigation}) => {
    const SignupFormSchema = Yup.object().shape({
        email:Yup.string().email().required('An email is required') ,
        username:Yup.string().required().min(2,'Ausername is required'),
        password:Yup.string().required().min(6,'Your password has to be have at least 6 character')
     }) 

     const getRandomProfilePicture = async()=>{
         const response = await fetch('https://randomuser.me/api')
         const data=await response.json()
         return data.results[0].picture.large
     }
    ;
    
     const onSignup = async (email,password,username)=>{
         try{
       const authUser= await firebase.auth().createUserWithEmailAndPassword(email,password)
             console.log(authUser.uid)
         db.collection('users').add({
             owner:authUser.uid,
             username:username,
             email:authUser.email,
             profile_picture: await getRandomProfilePicture(),
            }) 
         console.log('success2',email,password)
         }catch(error){
              alert(error.message)
         }
     }
  return (
    <View style={styles.wrapper}>
    <Formik 
    initialValues={{email:'',username:'',password:''}}
    onSubmit={(values)=>{
        onSignup(values.email,values.password,values.username)
    }}
    validationSchema={SignupFormSchema}
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
          values.username.length < 1 || values.username.length>5  ? '#ccc':'red'}]}>
      
      <TextInput 
            placeholder='Username'
            placeholderTextColor='#444'
            autoCapitalize='none'
            textContentType='username'
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
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
          <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
      
       <View style={styles.signupContainer}>
           <Text>Don't have an account? </Text>
           <TouchableOpacity onPress={()=>navigation.goBack()}>
               <Text style={{color:'blue'}}>LogIn</Text>
           </TouchableOpacity>
       </View>
       </>
      )}
       </Formik>
      </View>
    )
  }
  
  
  
  export default SignupForm
  
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