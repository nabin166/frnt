import { View,Image,StyleSheet,Text,Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign , MaterialIcons } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native-web'
import NavbarTop from './NavbarTop';

const Categories = ({navigation}) => {
  return (
    <View>
           {/* Navbar Top component*/}
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
     <TouchableOpacity onPress={()=>{navigation.navigate('Homepage')}}>  <View>
      <AntDesign name="home" size={30}  /><Text>Home</Text></View></TouchableOpacity> 
    <TouchableOpacity  ><View> <MaterialIcons name="category" size={30} color="white" /><Text  style={{color:'white'}}>category</Text></View></TouchableOpacity> 
    <TouchableOpacity onPress={()=>{navigation.navigate('Offer')}}>  <View> <MaterialIcons name="local-offer" size={30} color="black" /><Text>Offer</Text></View></TouchableOpacity> 
    <TouchableOpacity onPress={()=>{navigation.navigate('ProfileNavigator')}}>  <View> <AntDesign name="setting" size={30} color="black" /><Text>Profile</Text></View></TouchableOpacity> 
     
    </View>

    </View>
    {/* Object Sections in Grid*/}

    <ScrollView style={{marginTop:50}}>
    <View style={{display:'grid' , gridTemplateColumns:'auto auto ' ,width:'100vw'}} >
    
      <View style={css.flex1} > <TouchableOpacity onPress={()=>{navigation.navigate('NonVeg')}}>
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
       <View style={css.flex1} > <TouchableOpacity>
          <View style={css.itemback}> <Image style={css.items} source={require('../Public/ham.png')}></Image> </View>
           <Text style={css.itemtext}>Grilled </Text></TouchableOpacity>
       </View>  
       <View style={css.flex1}><TouchableOpacity>
        <View style={css.itemback}>  <Image style={css.items} source={require('../Public/leaf.png')}></Image></View>
           <Text style={css.itemtext}>Vegan </Text></TouchableOpacity> 
       </View > 
       <View style={css.flex1}><TouchableOpacity> 
       <View style={css.itemback}>   <Image style={css.items} source={require('../Public/wine.png')}></Image></View>
           <Text style={css.itemtext}>ColdDrink</Text></TouchableOpacity> 
       </View >
       
   </View>
    </ScrollView>

    {/* Offer image */}

     {/* Offer Image section */}
 <View style={css.offerimage}>

<Image style={css.offerbackground} source={require('../Public/offer1.jpeg')}>

</Image></View>
<View style={{  marginBottom:70,}}></View>
    
    </View>
  );
};

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
flex1:{
  flex:1,
  flexDirection:'column',
  alignItems:'center',

},
itemback:{
  width: '40vw',
  height: 150,
  backgroundColor:'#E2725B',
  justifyContent:'center',
  alignItems:'center',
  alignContent:'center',
  borderRadius:'9%'
  

},
items:{
  width: 70,
  height: 70,
 
  
  
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
})
export default Categories;