import { View, Text ,StyleSheet ,Pressable, TextInput, Button ,Image , TouchableOpacity } from 'react-native'
import React , {useState} from 'react'
import { Entypo ,  Zocial} from '@expo/vector-icons'; 
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';






export default function Signinform({navigation}) {

    const [Email , setemail] = useState();
    const [Password , setpassword] = useState();
  
    
    const Signin= async ()=>{
      if(Email == ""){
        console.log("Empty Name field");
      }
      if(Password == ""){
        console.log("Empty Password field");
      }
      if(Email == "" || Password == ""){
        console.log("Fill all the field");
      }else{
        await axios.post('https://localhost:7222/api/Signup/SigninCustomer', {
          Email:Email,
          Password: Password,
       }, { headers: {
        'Content-Type': 'application/json'
      }})
        .then(response => {
           console.log('Response:', response.data);


          setemail();
          setpassword();
          var strinsg = JSON.stringify(response.data);
         var data = JSON.parse(strinsg);
         
        


           // Assuming you have a user object with a 'role' property
            const user = { role: data.role };

            // Convert the user object to a string
            const userString = JSON.stringify(user);

            // Store the user's role in AsyncStorage
            AsyncStorage.setItem('userRole', userString)
              .then(() => {
                console.log('User role stored successfully');
              })
              .catch((error) => {
                console.error('Error storing user role:', error);
              });
         
               
               // Assuming you have a user object with a 'role' property
            const id = { id: data.customerid };

            // Convert the user object to a string
            const userStrin = JSON.stringify(id);

            // Store the user's role in AsyncStorage
            AsyncStorage.setItem('userId', userStrin)
              .then(() => {
                console.log('User id stored successfully');
                navigation.navigate('Homepage')
                
              })
              .catch((error) => {
                console.error('Error storing user role:', error);
              });

             

              // AsyncStorage.removeItem('userRole')
              // .then(() => {
              //   console.log('User role removed successfully');
              // })
              // .catch((error) => {
              //   console.error('Error removing user role:', error);
              // });
          
          // Handle the response data
        })
        .catch(error => {
          // Handle the error
          console.error(error);
        });
      }
      
    }


    

  return (
    <View>
      <Text style={css.text}>Signin</Text>
      <TextInput value={Email} onChangeText={setemail} style={css.input} placeholderTextColor=" #cccccc" placeholder='Email'></TextInput>
      <TextInput secureTextEntry={true} value={Password} onChangeText={setpassword} style={css.input} placeholderTextColor=" #cccccc" placeholder='Password'></TextInput>
      <TouchableOpacity><Button  onPress={Signin} title='Signin'/></TouchableOpacity>

        <View style={{flexDirection: 'row', marginTop:40, alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            <View>
                <Text style={css.txt}>Sign in using</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>

      <View style={{display:'flex' , flexDirection:'row',margin:10,justifyContent:'space-between'}}>
        <TouchableOpacity> <Entypo name="facebook" size={50} color="#4267B2" /> </TouchableOpacity>
            </View>

      <Text style={css.alreadyaccount}>
        Already have an account ? Sign In  </Text>
    
      
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