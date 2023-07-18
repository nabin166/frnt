import { View,Image,StyleSheet,Text,Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

import { ScrollView, TextInput } from 'react-native-web'
import NavbarTop from './NavbarTop'
import Offeritem from './Offeritem';
import { FontAwesome,AntDesign,Ionicons , MaterialIcons , MaterialCommunityIcons ,FontAwesome5 } from '@expo/vector-icons';
import Signupform from './Form/Signupform';


const Profile = ({navigation}) => {
  return (
    <View>
        {/* margin Top  */}
        <View style={{  marginBottom:40,}}></View>

     
     {/* Navbar Top Signout */}
            
     <View style={{
        height: "40px",
        width: "100vw", 
        backgroundColor:"#E2725B",
        position:'fixed',
        top:0,
        zIndex:10,
        

    }}>

    <View style={{
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop:7,
        marginLeft: 10,
        marginRight: 10,
    }}>
      <TouchableOpacity><Text style={{color:'white'}}>SignUp</Text></TouchableOpacity>
      <Text style={{fontSize:20,fontWeight:"bold"}}>Khana Finder</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('Signin')}} ><FontAwesome name="sign-in" size={10} color="black" /><Text >Login</Text></TouchableOpacity>
      
    
   
    </View>
     </View>
         
          {/* Navbar Bottom */}

     <View style={{
        height: 60,
        width: "100vw", 
        backgroundColor:"#E2725B",
        position:'fixed',
        bottom:0,
        zIndex:10,
        

    }}>

    <View style={{
        flexDirection: "row",
        width:'100%',
        justifyContent:"space-evenly",  
        alignItems:'center',paddingTop:5    
        
    }}>
      <TouchableOpacity onPress={()=>{navigation.navigate('Homepage')}}><View>
      <AntDesign name="home" size={30}  /><Text>Home</Text></View></TouchableOpacity>
      <TouchableOpacity  onPress={()=>{navigation.navigate('Categories')}} >  <View> <MaterialIcons name="category" size={30} color="black" /><Text>category</Text></View></TouchableOpacity>
     <TouchableOpacity onPress={()=>{navigation.navigate('Offer')}}><View> <MaterialIcons name="local-offer" size={30}  /><Text >Offer</Text></View></TouchableOpacity>
     <View> <AntDesign name="setting" size={30} color="white" /><Text style={{color:'white'}}>Profile</Text></View>
     
    </View>

    </View>

{/* SignUp form component of Form */}
<View style={{width:'100vw',padding:10}}>
    <Signupform />
</View>
   
    

    <View style={{  marginBottom:70,}}></View>
   
    
    </View>
  )
}

const css = StyleSheet.create({

    user:{
        width: "30px",
    height: "30px",
    },
    
    
    txt:{
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    serchbar:{
      width:110,
      border:'0.5px solid white',
      borderRadius:7,
      paddingLeft:3,
      fontSize:15
      
  },
  itemtext:{
    fontWeight: 'bold',
    fontSize: 20,
    textAlign:'center'
  },
  line:{
    marginTop:5,
    width:'100vw',
    height:1,
    backgroundColor:"black"
},
texts:{
    fontSize:25,
    marginLeft:10
},


  })
export default Profile