import { View, Text ,StyleSheet ,Pressable, TextInput, Button ,Image , TouchableOpacity , Picker } from 'react-native'
import React , {useEffect, useState} from 'react'
import { Entypo ,  Zocial} from '@expo/vector-icons'; 
// import axios from 'axios';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function AddRestaurantform({navigation}) {

    const [Name , setname] = useState();
    const [User , userid] = useState();
    const [restu ,setrestu] = useState();


      //GetItem
   AsyncStorage.getItem('userId')
   .then((userString) => {
     if (userString) {
       const user = JSON.parse(userString);
       const id = user.id;

       axios
       .get('https://localhost:7222/api/Signup/'+id)
       .then((response) => {
         console.log("Response:", response.data);
         setrestu(response.data);
         // Handle the response data
       })
       .catch((error) => {
         // Handle the error
         console.error(error);
       });
      
       //console.log('User id:', id);
      
     } else {
       console.log('User role not found');
     }
   })
   .catch((error) => {
     console.error('Error retrieving user role:', error);
   });
  
 
  
   
 

    const Add = async ()=>{

  
     
        if(Name == ""){
          console.log("Empty Name field");
        }
      
       else{
         
         
                //GetItem
   AsyncStorage.getItem('userId')
   .then((userString) => {
     if (userString) {
       const user = JSON.parse(userString);
       const id = user.id;


       console.log("Checked :" + id)

       if(restu == null){
       axios.post('https://localhost:7222/api/Resturant/CreateRestaurant', {
              Customer_Id:id,        
              ResturantName:Name,
              Longitude:1, //Send Userid for update in section of Customer.
              Latitude:1
            
          }, { headers: {
            'Content-Type': 'application/json'
          }})
            .then(response => {
              console.log('Response:', response.data);


            
              setname('');
            
              // Handle the response data
            })
            .catch(error => {
              // Handle the error
              console.error(error);
            });
          }
      
      
       console.log(id);
      
     } else {
       console.log('User role not found');
     }
   })
   .catch((error) => {
     console.error('Error retrieving user role:', error);
   });

       


        }
      
      
    }
   
  


    

  return (
    <View>
      <Text style={css.text}>Add Restaurant</Text>
      <TextInput value={Name} onChangeText={setname} style={css.input} placeholderTextColor=" #cccccc" placeholder='Name'></TextInput>
      <TouchableOpacity ><Button onPress={Add} title='Add Restaurant'>Add Restaurant</Button></TouchableOpacity>
      
      <Text style={{fontSize:15, color:'green'}}>You Set Restaurant to {restu}</Text>
    </View>
  )
}
const css = StyleSheet.create({
    text:{
    
        fontWeight:'bold',
        fontSize:30
        
    },
    input:{
        border:"0.4px solid black",
        
        borderRadius:3,
        padding:3,
        marginTop:5,
        marginBottom:5,
        fontSize:25
         
    },
    txt:{
        width: 150,
         textAlign: 'center',
         fontSize:20,color:'black'
    },
    alreadyaccount:{
        fontSize:20,
        color:'black',
        bottom:"7px",
        position:'fixed',
        left:50
        
        
        

    },
    img:{
      height:60,
      width:60
    }
   
   
  
   
})