import { StyleSheet, Text, View,Image } from 'react-native'
import React ,{useState} from 'react'
import { TouchableOpacity } from 'react-native'


export const bottomTabIcons = [
    {
        name:'Home',
        inactive:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThBd4sij1acmXXZEMp0CDe4E0oxYUIcwR5FJ3bv-_2LO7lS7USREMkxwgCSSpzctIBg4M&usqp=CAU',
        active:'https://media.istockphoto.com/vectors/red-home-icon-neon-light-on-black-wall-vector-id1143497284?k=20&m=1143497284&s=612x612&w=0&h=AWAQb-vQWBvLp7lJjaXYumM11bC3ICkNzrq-rt1ueHo='
    },{
        name:'Search',
        inactive:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbshkmvYScbPiBa-bII3TSwqnsW4mG31ky4nIuMxXlnfy58EOAuE1KwHtpJ5awRTOvqA&usqp=CAU',
        active:'https://media.istockphoto.com/vectors/magnifier-icon-elements-of-web-in-neon-style-icons-simple-icon-for-vector-id1083923116?k=20&m=1083923116&s=170667a&w=0&h=sqFA4Dy3yqWZfensNyzi16hXBHNAF_IkP7decPsXeR4='
    },{
        name:'Reels',
        inactive:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKnmfPRKQXrpmGzJkQCpA_-mddqLMwCjQcgtaKDW3OYoFx7oAxKOcEAZsSZX2MH_LYQY&usqp=CAU',
        active:'https://consideringapple.com/wp-content/uploads/2021/01/camera-icon-neon.jpg'
    },{
        name:'Shop',
        inactive:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLkpMBurx44L2_L8nyg2yGfdO3We6zU1HQlsZ86F2kDt2_GmnR8uy82DVLAgaS3xXbWm8&usqp=CAU',
        active:'https://media.istockphoto.com/vectors/bright-vector-neon-grocery-cart-on-a-black-background-vector-id1165080116?k=20&m=1165080116&s=170667a&w=0&h=AF0ySvNXLON2BgVnaOw9IDcPvpxy4fSUEpLsyqbzsAg='
    },{
        name:'profile',
        inactive:'https://c4.wallpaperflare.com/wallpaper/148/134/516/funny-icon-symbol-button-wallpaper-preview.jpg',
        active:'https://c4.wallpaperflare.com/wallpaper/69/447/600/green-circle-wallpaper-thumb.jpg'
    }
]


const BottomTabs =({icons})=>{
    const [activeTab,setActiveTab]=useState('Home')
    
    const Icon = ({icon}) => (
       <TouchableOpacity onPress={() =>setActiveTab(icon.name)}>
           <Image source={{uri:activeTab===icon.name?icon.active:icon.inactive}} 
           style={[  
            
            styles.icon,
            icon.name==='profile'?styles.profilePic:null
           ]}/>
          
       </TouchableOpacity>
    )
    return (
        <View style={styles.wrapper}>
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
        <View style={styles.container}>
            {icons.map((icon,index)=>(
              <Icon key={index} icon={icon} /> 
            ))}
        </View>
        </View>   
    )
    }

  

export default BottomTabs;
   
const styles = StyleSheet.create({
    icon:{
        height:28,
        width:28,
        zindex:100
    },
    container:{
    flexDirection:'row',
    justifyContent:'space-around',
    height:50,
    paddingTop:10
    },
    wrapper:{
       backgroundColor:'#000',
        zindex:999,
      },
    profilePic: {
        borderRadius:50
    }

   

})

