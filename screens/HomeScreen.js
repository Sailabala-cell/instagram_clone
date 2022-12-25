import { StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import Stories from '../components/Home/Stories'
// import posts from '../data/posts'
import Post from '../components/Home/Post'
import { ScrollView } from 'react-native'
import { POSTS } from '../data/posts'
import BottomTabs, { bottomTabIcons } from '../components/Home/BottomTabs'
export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}/>
      <Stories/>
      {/* <posts/> */}
      <ScrollView  showsVerticalScrollIndicator={false} >
      {POSTS.map((post,index)=>(
        <Post post={post} key={index}/>
      ))}
      </ScrollView>
     <BottomTabs icons={bottomTabIcons}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
container:{marginLeft:280,
backgroundColor:'black',
flex:1,
width:'50%',


}
})