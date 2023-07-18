import { View,Image,StyleSheet,Text,Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign , MaterialIcons } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native-web'

const NavbarTop = () => {
  return (
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
      <View style={{
        flexDirection: "row", gap:13,
}}>
      <Image style={css.user} source={require('../Public/logo.png')}></Image>
       <Text style={css.txt}>Khana Finder</Text></View>
      <View style={{
        flexDirection: "row", gap:15,
       }}
      >
        {/* Search food bar */}
        <TextInput style={css.serchbar} placeholderTextColor='white' placeholder={'Search'}></TextInput>
       <TouchableOpacity> <AntDesign name="search1" size={24} color="white"  /></TouchableOpacity>
      <TouchableOpacity><AntDesign name="shoppingcart" size={24} color="black" /></TouchableOpacity>
    </View>
    </View>

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
      
  }
  })

export default NavbarTop