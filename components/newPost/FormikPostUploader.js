import { StyleSheet, Text, View,Image,Button , TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup' 
import { TextInput } from 'react-native-web'
import { NavigationActions } from 'react-navigation';
import HomeScreen from '../../screens/HomeScreen'
import validUrl from 'valid-url'

const PLACEHOLDER_IMG=
'https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg'
const uploadPostSchema = Yup.object().shape({
   imageUrl:Yup.string().url().required('A url is required') ,
   caption:Yup.string().max(2200,'Caption has reached the character limit')
})

export default function FormikPostUploader({ navigation}) {
const [thumbnailUrl,setThumbnailUrl]=useState(PLACEHOLDER_IMG)
  
return (
   <Formik
   initialValues={{caption:'',imageUrl:''}}
   onSubmit={function (values){console.log(values)
   navigation.goBack()
   }
   }
   validationSchema={uploadPostSchema}
  
   validateOnMount={true}
>
    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid,}) => 
    <>
        <View style={{margin:20,justifyContent:'space-between',flexDirection:'row'}}>
            <Image 
            source={{uri:validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG}} 
            style={{width:100,height:100}}/>
        
        <View style={{flex:1,marginLeft:10}}>
        <TextInput 
        style={{color:'white',fontSize:20}} 
        placeholder='Write a caption...' 
        placeholderTextColor='gray' 
        multiline={true}
        onChangeText={handleChange('caption')}
        onBlur={handleBlur('caption')}
        value={values.caption}
        />
        </View>
        
        </View>
        <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    shadowColor: 'white',
    shadowOffset: { width:2, height:2},
    shadowOpacity: 2,
    shadowRadius: 7,  
    elevation: 10
  }}
/>
        <TextInput
        style={{color:'white',fontSize:18}} 
        onChange={e => setThumbnailUrl(e.nativeEvent.text)}
        placeholder='Enter Image Url' 
        placeholderTextColor='gray'
        onChangeText={handleChange('imageUrl')}
        onBlur={handleBlur('imageUrl')}
        value={values.imageUrl}    
        />
        
      {
          errors.imageUrl && (
              <Text style={{fontSize:10, color:'red'}}>{errors.imageUrl}</Text>
          )
      }  

      <Button type='submit' onPress={handleSubmit} title='Share' disabled={!isValid}/>
     
    </>
    
    
    }
       
   </Formik>
  )
}

const styles = StyleSheet.create({})