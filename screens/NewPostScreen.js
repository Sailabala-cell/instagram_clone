import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'
export default function NewPostScreen({navigation}) {
  return (
    <SafeAreaView style={{marginLeft:280,backgroundColor:'black',
    flex:1,
    width:'50%'}}>
      <AddNewPost navigation={navigation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})