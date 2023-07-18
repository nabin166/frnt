import {View, Text, Image, ScrollView,StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React ,{useEffect , useState} from 'react';
import { ImageBackground } from 'react-native-web';
import { Ionicons , MaterialIcons , MaterialCommunityIcons} from '@expo/vector-icons';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Categories = () => {
  const [TodaySpecial , settodayspecial] = useState([]);
  // const [count , setcount] = useState(0);
  
  const [counts, setCounts] = useState([]);
  const [foodi , setfoodi] =useState();
  const [cnt,setcnt] = useState();

   //GetItem
   AsyncStorage.getItem('userId')
   .then((userString) => {
     if (userString) {
       const user = JSON.parse(userString);
       const id = user.id;
      
       console.log('User id:', id);
      
     } else {
       console.log('User role not found');
     }
   })
   .catch((error) => {
     console.error('Error retrieving user role:', error);
   });



  if(cnt != null && foodi != null){
  console.log(cnt +""+foodi);}
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
     .get('https://localhost:7222/api/Fetchdata/TodaySpecial')
     .then((response) => {
       console.log("Response:", response.data);
       
       
       
        settodayspecial(response.data);
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
    
   }}>Todayspecial</Text></View>

   {/*Item section */}

   <View>{TodaySpecial.map((item , index)=>{

  const count = counts[index];
  
    return (
      
      <View style={css.container}>
      <View style={{flex:1}}>
          <Image style={css.img} source={({uri:item.fimage})}></Image>
      </View>
      <View style={{flex:2, marginLeft:5}}>
          <Text key={index} style={{fontSize:24,fontWeight:'400'}}>{item.fname}</Text>
          <Text key={index} style={{fontSize:13,color:'green'}}>{item.rname}</Text>
          <Text y style={{fontSize:18, }}>{item.fprice}</Text>
          <Text style={{fontSize:13, }}>1 plate</Text>
          {/* Add to cart Section */}
          <View style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
              <View style={css.cart }>
              <View style={{flex:1 ,alignItems:'center'}}> <TouchableOpacity  onPress={()=>decrementCount(index)}><MaterialIcons style={{backgroundColor:'white'}} name="remove"  size={20} color="black" /></TouchableOpacity ></View>
              <View style={{flex:1,alignItems:'center',backgroundColor:'#3C4048'}}> <Text style={{color:'white',fontSize:20}}>{count}</Text></View>
              <View style={{flex:1 ,alignItems:'center'}}><TouchableOpacity onPress={()=>incrementCount(index)}> <Ionicons style={{ backgroundColor:'white'}} name="add" size={20} color="black" /></TouchableOpacity></View>
              </View>
            <TouchableOpacity key={index} onPress={(index)=>{ setfoodi(item.fid); setcnt(count)}}>  <MaterialCommunityIcons style={{marginLeft:5}} name="cart-minus" size={30} color="black" /> </TouchableOpacity>
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