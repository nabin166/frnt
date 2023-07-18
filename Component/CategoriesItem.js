import { View,Image,StyleSheet,Text,Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign , MaterialIcons ,Ionicons} from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native-web'
import NavbarTop from './NavbarTop'
import Catgorylist from './Categorylist';

const CategoriesItem = () => {
  return (
    <View>
         {/* Navbar Top component*/}
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
      <TouchableOpacity><Ionicons name="arrow-back-circle-outline" size={30} color="white" /></TouchableOpacity>
      
     <TouchableOpacity><AntDesign name="shoppingcart" size={30} color="black" /></TouchableOpacity>
   
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
     <View>
      <AntDesign name="home" size={30}  /><Text>Home</Text></View>
     <View> <MaterialIcons name="category" size={30} color="white" /><Text style={{color:'white'}}>category</Text></View>
     <View> <MaterialIcons name="local-offer" size={30} /><Text >Offer</Text></View>
     <View> <AntDesign name="setting" size={30} color="black" /><Text>Profile</Text></View>
     
    </View>

    </View>
     {/* line to seperate */}
     <View style={css.line}></View>
    {/* Offers item list of Discount */}
    <Catgorylist/>
    {/* only for margin purpose */}
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
    height:15,
    backgroundColor:"#f6f6f6"
},
 

  })
export default CategoriesItem