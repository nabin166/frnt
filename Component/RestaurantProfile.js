import { View,Image,StyleSheet,Text,Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import { ScrollView, TextInput } from 'react-native-web'
import NavbarTop from './NavbarTop'
import Offeritem from './Offeritem';
import { AntDesign,Ionicons , MaterialIcons , MaterialCommunityIcons ,FontAwesome5 } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {

 

    //GetItem
    AsyncStorage.getItem('userRole')
    .then((userString) => {
      if (userString) {
        const user = JSON.parse(userString);
        const role = user.role;

        setuserrole(role);
       
        console.log('User role:', user);
       
      } else {
        console.log('User role not found');
        
      }
    })
    .catch((error) => {
      console.error('Error retrieving user role:', error);
    });

  

    const signout=()=>{

      console.log('signout');
         AsyncStorage.removeItem('userRole')
              .then(() => {
                console.log('User role removed successfully');
              })
              .catch((error) => {
                console.error('Error removing user role:', error);
              });
              AsyncStorage.removeItem('userId')
              .then(() => {
                console.log('User Id removed successfully');
              }).then(()=>{
                
              navigation.navigate('Homepage')
              }

              )
              .catch((error) => {
                console.error('Error removing user Id:', error);
              });

    }
 
  return (
    <View>
        {/* margin Top  */}
        <View style={{  marginBottom:40,}}></View>

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
      {/* <TouchableOpacity><Text style={{fontSize:20}}>Nabin Aryal</Text></TouchableOpacity> */}
      <TouchableOpacity onPress={signout}><Text style={{color:'white'}}>SignOut</Text></TouchableOpacity>
      
    
   
    </View>
     </View>
     
     {/* Navbar Top Signout */}
            
     {/* <View style={{
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
      <TouchableOpacity><Text style={{color:'white'}}>Login</Text></TouchableOpacity>
      
    
   
    </View>
     </View>
          */}
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


    {/* Cart map profile setting  */}
   <TouchableOpacity onPress={()=>{navigation.navigate("AddRestaurantform")}}><View style={css.profileSection}><AntDesign name="profile" style={{marginLeft:5}} size={54} color="black" />  <Text style={css.texts}>Add Restaurant</Text></View></TouchableOpacity> 
  
   <TouchableOpacity onPress={()=>{navigation.navigate("AddCategoryform")}} > <View  style={css.profileSection}> <AntDesign name="profile" style={{marginLeft:5}} size={54} color="black" /><Text style={css.texts}>Add Categories</Text></View></TouchableOpacity> 
 
  <TouchableOpacity onPress={()=>{navigation.navigate("AddItemform")}}> <View style={css.profileSection}> <AntDesign name="profile" style={{marginLeft:5}} size={54} color="black" /><Text style={css.texts}>Add Items</Text></View></TouchableOpacity> 
     
  <TouchableOpacity > <View style={css.profileSection}> <AntDesign name="profile" style={{marginLeft:5}} size={54} color="black" /><Text style={css.texts}>Details</Text></View></TouchableOpacity> 
     
    

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
profileSection:{
  width:'99vw',
  margin:3,
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  borderRadius:7,
  backgroundColor:'#F9F5F6',
  boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'


}
 

  })
export default Profile