import { View,Image,StyleSheet,Text,Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Touchable } from 'react-native'
import Todayspecial from './Todayspecial'
import DiscountItem from './DiscountItem'
import { AntDesign , MaterialIcons } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native-web'
import NavbarTop from './NavbarTop'
import axios from 'react-native-axios';
const Homepage = ({navigation}) => {

   

  return (
    <View>
        {/* Navbar Top Component (NavbarTop)*/}
        <NavbarTop/>
    
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
      <AntDesign name="home" size={30} color="white" /><Text style={{color:'white'}}>Home</Text></View>
      <TouchableOpacity  onPress={()=>{navigation.navigate('Categories')}} > <View> <MaterialIcons name="category" size={30} color="black" /><Text>category</Text></View></TouchableOpacity>
      <TouchableOpacity  onPress={()=>{navigation.navigate('Offer')}} ><View> <MaterialIcons name="local-offer" size={30} color="black" /><Text>Offer</Text></View></TouchableOpacity>
    <TouchableOpacity  onPress={()=>{navigation.navigate('ProfileNavigator')}} > <View> <AntDesign name="setting" size={30} color="black" /><Text>Profile</Text></View></TouchableOpacity>
     
    </View>

    </View>
    {/* Offer Image section */}
    <View style={css.offerimage1}>

        <Image style={css.offerbackground} source={require('../Public/order1.png')}>

        </Image>

    </View>

{/* Categories */}
  <View><Text style={{
    fontWeight: 'bold',
    fontSize: 20,
    marginTop:10,
    marginBottom:10,
    marginLeft:10
    
   }}>Categories</Text></View>

   
    <View style={{display:'flex' , flexDirection:'row' , alignItems:'center'}} >
    
     <View style={css.flex1} > 
     <TouchableOpacity onPress={()=>{navigation.navigate('NonVeg')}}>
           <View style={css.itemback}> <Image style={css.items} source={require('../Public/ham.png')}></Image> </View>
            <Text style={css.itemtext}>Non Veg </Text></TouchableOpacity>
        </View>  
        <View style={css.flex1}><TouchableOpacity onPress={()=>{navigation.navigate('Veg')}}>
         <View style={css.itemback}>  <Image style={css.items} source={require('../Public/leaf.png')}></Image></View>
            <Text style={css.itemtext}>Veg </Text></TouchableOpacity> 
        </View > 
        <View style={css.flex1}><TouchableOpacity> 
        <View style={css.itemback}>   <Image style={css.items} source={require('../Public/wine.png')}></Image></View>
            <Text style={css.itemtext}>Liquors</Text></TouchableOpacity> 
        </View > 
       
    
         
    </View>
    

{/* Catlists */}
<Todayspecial/>

 {/* Offer Image section */}
 <View style={css.offerimage}>

<Image style={css.offerbackground} source={require('../Public/Discountpic.jpg')}>

</Image>

</View>

{/* sdff */}

<DiscountItem/>
<View style={{  marginBottom:45,}}></View>
    
 
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
    fontWeight: 500,
    fontSize: 15,
    textAlign:'center'
},
flex1:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',

},
itemback:{
    width: 100,
    height: 100,
    backgroundColor:'#E2725B',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    borderRadius:'9%'
    

},
offerimage1:{
   
    height:160,
    marginTop:45,
    borderRadius:20,
    backgroundImage:''
    
},
offerimage:{
   
    height:160,
    marginTop:10,
    borderRadius:20,
       
},
offerbackground:{
   
    height:140,
    resizeMode:'cover',
    margin:6,
    borderRadius:20,
    justifyContent:'center',
},


items:{
    width: 70,
    height: 70,
   
    
    
    },
  


})
export default Homepage