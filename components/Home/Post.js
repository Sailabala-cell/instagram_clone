import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
 
const postFooterIcons = [
    {
        name:'Like',
        imageUrl:'https://i.pinimg.com/736x/76/21/30/762130da45a6cc2aaa2f2fc0b20b43b6.jpg',
        likedImageUrl:'https://wallpaperaccess.com/full/3218545.jpg'
    },
    {
        name:'Comment',
        imageUrl:'https://www.shareicon.net/data/2017/05/30/886562_message_512x512.png'
    },{
        name:'Share',
        imageUrl:'https://png.pngtree.com/png-vector/20190329/ourlarge/pngtree-vector-paper-plane-icon-png-image_889384.jpg'
    },{
        name:'Save',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hr02RGJ9vLTgP8jEsEwWgMDwA6ruXi2nf1EUP5Apb8kNHug86MokyRX13Q1ZLVBqHFw&usqp=CAU'
    }
]



export default function Post({post}) {
  return (
    <View style={{marginBottom:30}}>
  <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    shadowColor: 'white',
    shadowOffset: { width:0, height:2},
    shadowOpacity: 2,
    shadowRadius: 7,  
    elevation: 10
  }}
/>
<PostHeader post={post}/>
<PostImage post={post}/>
<View style={{marginHorizontal:15,marginTop:10}}>
<PostFooter/>
<Likes post={post}/>
<Captions post={post}/>
<CommentSection post={post}/>
<Comments post={post}/>
</View>

     </View>
  )
}

const PostHeader = ({post}) =>(
    <View style={{
        flexDirection:'row', 
        justifyContent:'space-between',
        margin:5,
        alignItems:'center'}}>
       <View style={{flexDirection:'row',alignItems:'center'}}>
           <Image source={{uri:post.profile_picture}} style={styles.story}/>
           <Text style={{color:'white', marginLeft:5, 
           fontWeight:'700'}}>{post.user}</Text>
       </View>
       
       <Text style={{color:'white',fontWeight:'900'}}>...</Text>
    
    </View>
    )

    const PostImage=({post})=>(
        <View style={{
            width:'100%',
            height:450,
        }}>
         <Image 
            source={{uri:post.imageUrl}}
            style={{height:'100%', resizeMode:'cover'}}
        />
        </View>
       
    )

    const PostFooter = () => (
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={styles.lefFooterIconsContainer}> 
          <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl}/>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl}/>
            <Icon imgStyle={styles.shareIcon} imgUrl={postFooterIcons[2].imageUrl}/>
          </View>
            <View>
                <Icon imgStyle={styles.saveIcon} imgUrl={postFooterIcons[3].imageUrl}/>
            </View>
        </View>
    
    )
    
    const Icon = ({imgStyle,imgUrl})=>(
        <TouchableOpacity>
            <Image style={imgStyle} source={{uri:imgUrl}}/>
        </TouchableOpacity>
    )

    const Likes=({post})=>(
        <View style={{flexDirection:'row',marginTop:4}}>
        <Text style={{color:'white', fontWeight:'600',marginLeft:6 }}>{post.likes.toLocaleString('en')} likes</Text>
        </View>
        
    )
    
    const Captions=({post})=>(
        <View style={{marginTop:5}}>
        <Text style={{color:'white'}}>
        <Text style={{fontWeight:'600', marginRight:5}}>{post.user}</Text> 
        <Text> {post.caption}</Text>
        </Text>
        </View>
       
    )

    const CommentSection = ({post}) => (
        <View style={{marginTop:6}}>
         {   !!post.comments.length && 
         <Text style={{color:'gray'}}>
         View {post.comments.length > 1 ? 'all' : ''}  {post.comments.length} {post.comments.length >1 ? 'comments':'comment'}
         </Text>}
        </View>
       
    ) 

    const Comments = ({post}) => (
        <>
            {post.comments.map((comment,index)=>(
                <View key={index} style={{flexDirection:'row', marginTop:5}}> 
                    <Text style={{color:'white'}}>
                        <Text style={{fontWeight:'600'}}>{comment.user} </Text>
                        <Text>{comment.comment}</Text>
                    </Text>
                </View>
            ))}
        </>
    )


const styles = StyleSheet.create({
    story:{
        width:35,
        height:35,
        borderRadius:50,
        marginLeft:6,
        borderWidth:1.6,
        borderColor:'#F77737'
         }, 
         footerIcon:{
             width:40,
             height:40,
             zIndex:100,
             margin:-3,
         },
         shareIcon:{
             width:33,
             height:33,
         },
         saveIcon:{
             marginTop:6,
            width:27,
            height:26,
         },
         lefFooterIconsContainer : {
             flexDirection:'row',
             width:'32%',
             justifyContent:'space-between'
         }
})