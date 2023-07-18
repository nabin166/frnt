import { View, Text ,StyleSheet ,Pressable, TextInput, Button ,Image , TouchableOpacity , Picker } from 'react-native'
import React , {useState , useEffect} from 'react'
import { Entypo ,  Zocial} from '@expo/vector-icons'; 
// import axios from 'axios';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function  AddCategoryform({navigation}) {
  const [Name , setname] = useState();

    const [categoryid , setcategoryid] = useState();

    const [categ ,setcateg] = useState([]);


   useEffect((e)=>{
      axios
      .get('https://localhost:7222/api/Category/GetCategory')
      .then((response) => {
        console.log("Response:", response.data);
        
        
        
         setcateg(response.data);
        
      
        // Handle the response data
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
      

    }, []);
    console.log(categ);
    
 

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

      
       axios.post('https://localhost:7222/api/Category/CreateCategory', {
          CategoryName: Name
            
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
      <Text style={css.text}>Categories</Text>
      <TextInput value={Name} onChangeText={setname} style={css.input} placeholderTextColor=" #cccccc" placeholder='Name'></TextInput>
      <TouchableOpacity ><Button onPress={Add} title='Add Categories'>Add Categories</Button></TouchableOpacity>

     
    <View>{categ.map((item)=>{
      return (
        <Text key={item.category_Id}>{item.categoryName}</Text>
      )
      })}</View>
     
      
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