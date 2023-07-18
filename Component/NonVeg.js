import {View, Text, Image, ScrollView,StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React ,{useEffect , useState} from 'react';
import { ImageBackground } from 'react-native-web';
import { Ionicons , MaterialIcons , MaterialCommunityIcons} from '@expo/vector-icons';
import axios from 'react-native-axios';


const Categories = () => {
  const [nonveg , setnonveg] = useState([]);

  const [counts, setCounts] = useState([]);

  const incrementCount = (index) => {
    const updatedCounts = [...counts];
    updatedCounts[index] += 1;
    setCounts(updatedCounts);
  };

  const decrementCount = (index) => {
    const updatedCounts = [...counts];
    if (updatedCounts[index] > 0) {
      updatedCounts[index] -= 1;
      setCounts(updatedCounts);

    }
  };

  useEffect( ()=>{
     axios
     .get('https://localhost:7222/api/Fetchdata/NonVeg')
     .then((response) => {
       console.log("Response:", response.data);
       
       
       
        setnonveg(response.data);
        console.log(response.data);
        setCounts(Array(response.data.length).fill(0));
       
     
       // Handle the response data
     })
     .catch((error) => {
       // Handle the error
       console.error(error);
     });},[])

  return (
    <View>
      <ScrollView  showsHorizontalScrollIndicator={false}>
       {/* line to seperate */}
       <View style={css.line}></View>
    {/*Today special */}

       <View><Text style={{
    fontWeight: '400',
    fontSize: 20,
    marginTop:10,
    marginBottom:20,
    marginLeft:10
    
   }}>Non Veg</Text></View>

   {/*Item section */}

   <View>{nonveg.map((item , index)=>{
    const count = counts[index];
    return (
      <View style={css.container}>
      <View style={{flex:1}}>
          <Image style={css.img} source={({uri:item.fimage})}></Image>
      </View>
      <View style={{flex:2, marginLeft:5}}>
          <Text style={{fontSize:24,fontWeight:'400'}}>{item.fname}</Text>
          <Text style={{fontSize:13,color:'green'}}>{item.rname}</Text>
          <View style={{display:'flex',flexDirection:'row',alignItems:"center"}}><Text style={{fontSize:15, color:'red', textDecorationLine:'line-through'}}>{item.fprice}</Text> <Text style={{fontSize:20, color:'black'}}>{(item.fprice - (item.fdiscount/100 )* item.fprice)}</Text></View>
       
          <Text style={{fontSize:13, }}>1 plate</Text>
          {/* Add to cart Section */}
          <View style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
              <View style={css.cart }>
              <View style={{flex:1 ,alignItems:'center'}}> <TouchableOpacity onPress={()=>decrementCount(index)}><MaterialIcons style={{backgroundColor:'white'}} name="remove"  size={20} color="black" /></TouchableOpacity></View>
              <View style={{flex:1,alignItems:'center',backgroundColor:'#3C4048'}}> <Text style={{color:'white',fontSize:20}}>{count}</Text></View>
              <View style={{flex:1 ,alignItems:'center'}}><TouchableOpacity onPress={()=>incrementCount(index)}> <Ionicons style={{ backgroundColor:'white'}} name="add" size={20} color="black" /></TouchableOpacity></View>
              </View>
            <TouchableOpacity>  <MaterialCommunityIcons style={{marginLeft:5}} name="cart-minus" size={30} color="black" /> </TouchableOpacity>
          </View>
      </View>
  
     </View>)
   })}</View>

   


        
         
         
   
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