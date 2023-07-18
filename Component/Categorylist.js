import {View, Text, Image, ScrollView,StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import { ImageBackground } from 'react-native-web';
import { Ionicons , MaterialIcons , MaterialCommunityIcons} from '@expo/vector-icons';


const Categories = () => {
  return (
    <View>
      <ScrollView  showsHorizontalScrollIndicator={false}>
       {/* line to seperate */}
       <View style={css.line}></View>
    {/*Today special */}

       <View><Text style={{
    fontWeight: 'bold',
    fontSize: 20,
    marginTop:10,
    
    marginLeft:10,
    color:'green'
    
   }}>Vegg Item</Text><Text style={{marginBottom:20,marginLeft:10,color:'green'}}>Eat your green</Text></View>

   {/*Item section */}

   <View style={css.container}>
    <View style={{flex:1}}>
        <Image style={css.img} source={require('../Public/chowmin.jpg')}></Image>
    </View>
    <View style={{flex:2, marginLeft:5}}>
        <Text style={{fontSize:24,fontWeight:'400'}}> Chowmin</Text>
        <Text style={{fontSize:13,color:'green'}}>Burger house Chitwan</Text>
        <Text style={{fontSize:18, }}>NRP 80</Text>
        <Text style={{fontSize:13, }}>1 plate</Text>
        {/* Add to cart Section */}
        <View style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
            <View style={css.cart }>
            <View style={{flex:1 ,alignItems:'center'}}> <TouchableOpacity><MaterialIcons style={{backgroundColor:'white'}} name="remove"  size={20} color="black" /></TouchableOpacity></View>
            <View style={{flex:1,alignItems:'center',backgroundColor:'#3C4048'}}> <Text style={{color:'white',fontSize:20}}>1</Text></View>
            <View style={{flex:1 ,alignItems:'center'}}><TouchableOpacity> <Ionicons style={{ backgroundColor:'white'}} name="add" size={20} color="black" /></TouchableOpacity></View>
            </View>
          <TouchableOpacity>  <MaterialCommunityIcons style={{marginLeft:5}} name="cart-minus" size={30} color="black" /> </TouchableOpacity>
        </View>
    </View>

   </View>


    {/*Item section */}

    <View style={css.container}>
    <View style={{flex:1}}>
        <Image style={css.img} source={require('../Public/Burger.jpg')}></Image>
    </View>
    <View style={{flex:2, marginLeft:5}}>
        <Text style={{fontSize:25,fontWeight:'400'}}>Paneer Burger</Text>
        <Text style={{fontSize:13,color:'green'}}>Burger house Chitwan</Text>
        <Text style={{fontSize:18, }}>NRP 250</Text>
        <Text style={{fontSize:13, }}>1 piece</Text>
        {/* Add to cart Section */}
        <View style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
            <View style={css.cart }>
            <View style={{flex:1 ,alignItems:'center'}}> <TouchableOpacity><MaterialIcons style={{backgroundColor:'white'}} name="remove"  size={20} color="black" /></TouchableOpacity></View>
            <View style={{flex:1,alignItems:'center',backgroundColor:'#3C4048'}}> <Text style={{color:'white',fontSize:20}}>1</Text></View>
            <View style={{flex:1 ,alignItems:'center'}}><TouchableOpacity> <Ionicons style={{ backgroundColor:'white'}} name="add" size={20} color="black" /></TouchableOpacity></View>
            </View>
          <TouchableOpacity>  <MaterialCommunityIcons style={{marginLeft:5}} name="cart-minus" size={30} color="black" /> </TouchableOpacity>
        </View>
    </View>

   </View>
         

     {/*Item section */}

   <View style={css.container}>
    <View style={{flex:1}}>
        <Image style={css.img} source={require('../Public/momo.jpg')}></Image>
    </View>
    <View style={{flex:2, marginLeft:5}}>
        <Text style={{fontSize:27,fontWeight:'400'}}>Vegg Momo</Text>
        <Text style={{fontSize:15,color:'green'}}>Burger house Chitwan</Text>
        <Text style={{fontSize:20 }}>NRP 250</Text>
        <Text style={{fontSize:13, }}>1 piece</Text>
        {/* Add to cart Section */}
        <View style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
            <View style={css.cart }>
            <View style={{flex:1 ,alignItems:'center'}}> <TouchableOpacity><MaterialIcons style={{backgroundColor:'white'}} name="remove"  size={20} color="black" /></TouchableOpacity></View>
            <View style={{flex:1,alignItems:'center',backgroundColor:'#3C4048'}}> <Text style={{color:'white',fontSize:20}}>1</Text></View>
            <View style={{flex:1 ,alignItems:'center'}}><TouchableOpacity> <Ionicons style={{ backgroundColor:'white'}} name="add" size={20} color="black" /></TouchableOpacity></View>
            </View>
          <TouchableOpacity>  <MaterialCommunityIcons style={{marginLeft:5}} name="cart-minus" size={30} color="black" /> </TouchableOpacity>
        </View>
    </View>

   </View>
     {/*Item section */}

     <View style={css.container}>
    <View style={{flex:1}}>
        <Image style={css.img} source={require('../Public/Burger.jpg')}></Image>
    </View>
    <View style={{flex:2, marginLeft:5}}>
        <Text style={{fontSize:25,fontWeight:'400'}}>Paneer Burger</Text>
        <Text style={{fontSize:13,color:'green'}}>Burger house Chitwan</Text>
        <Text style={{fontSize:18, }}>NRP 250</Text>
        <Text style={{fontSize:13, }}>1 piece</Text>
        {/* Add to cart Section */}
        <View style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
            <View style={css.cart }>
            <View style={{flex:1 ,alignItems:'center'}}> <TouchableOpacity><MaterialIcons style={{backgroundColor:'white'}} name="remove"  size={20} color="black" /></TouchableOpacity></View>
            <View style={{flex:1,alignItems:'center',backgroundColor:'#3C4048'}}> <Text style={{color:'white',fontSize:20}}>1</Text></View>
            <View style={{flex:1 ,alignItems:'center'}}><TouchableOpacity> <Ionicons style={{ backgroundColor:'white'}} name="add" size={20} color="black" /></TouchableOpacity></View>
            </View>
          <TouchableOpacity>  <MaterialCommunityIcons style={{marginLeft:5}} name="cart-minus" size={30} color="black" /> </TouchableOpacity>
        </View>
    </View>

   </View>
     {/*Item section */}

     <View style={css.container}>
    <View style={{flex:1}}>
        <Image style={css.img} source={require('../Public/Burger.jpg')}></Image>
    </View>
    <View style={{flex:2, marginLeft:5}}>
        <Text style={{fontSize:25,fontWeight:'400'}}>Paneer Burger</Text>
        <Text style={{fontSize:13,color:'green'}}>Burger house Chitwan</Text>
        <Text style={{fontSize:18, }}>NRP 250</Text>
        <Text style={{fontSize:13, }}>1 piece</Text>
        {/* Add to cart Section */}
        <View style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
            <View style={css.cart }>
            <View style={{flex:1 ,alignItems:'center'}}> <TouchableOpacity><MaterialIcons style={{backgroundColor:'white'}} name="remove"  size={20} color="black" /></TouchableOpacity></View>
            <View style={{flex:1,alignItems:'center',backgroundColor:'#3C4048'}}> <Text style={{color:'white',fontSize:20}}>1</Text></View>
            <View style={{flex:1 ,alignItems:'center'}}><TouchableOpacity> <Ionicons style={{ backgroundColor:'white'}} name="add" size={20} color="black" /></TouchableOpacity></View>
            </View>
          <TouchableOpacity>  <MaterialCommunityIcons style={{marginLeft:5}} name="cart-minus" size={30} color="black" /> </TouchableOpacity>
        </View>
    </View>

   </View>
              
         
         
   
      </ScrollView>
    </View>
  );
};
const css = StyleSheet.create({
    line:{
        marginTop:5,
        width:'100vw',
        height:15,
        backgroundColor:"#f6f6f6"
    },
    img:{
        width:'100%',
        height:'100%',
        borderRadius:10,
        resizeMode:'cover'
    },
    container:{
        display:'flex',
        flexDirection:'row',
        width:'100vw',
        height:120,
        marginLeft:10,
        marginBottom:20
       

    },
    cart:{
        display:'flex',
        flexDirection:'row',
        width:90, 
        
        alignItems:'center',
         justifyContent:'space-evenly',
         border:'0.2px solid black',
         borderRadius:7 ,
         backgroundColor:'white'
       
    }

    })

export default Categories;