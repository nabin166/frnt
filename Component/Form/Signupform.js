import { View, Text ,StyleSheet ,Pressable, TextInput, Button ,Image , TouchableOpacity , Picker } from 'react-native'
import React , {useState} from 'react'
import { Entypo ,  Zocial} from '@expo/vector-icons'; 
// import axios from 'axios';
import axios from 'react-native-axios';




export default function Signinform({navigation}) {

    const [Name , setname] = useState();
    const [Phoneno , setphoneno] = useState();
    const [Password , setpassword] = useState();
    const [Email, setemail] = useState();
    const [Selectrole, setSelected] = useState('volvo');

    const Array = [];
    console.log(Array);


    Array.push(Name);
    console.log(Array);  

    const Signup = async ()=>{
     
        if(Name == ""){
          console.log("Empty Name field");
        }
        if(Phoneno == "") {
          console.log("Empty Phoneno field");
        }
        if(Email == "") {
          console.log("Empty Email field");
        }
        if(Password == "") {
          console.log("Empty Password field");
        }
        if(Name == "" || Phoneno == "" || Password == "" || Email == ""){
          console.log("Fill all the field");
        }else{
         
         
          console.log("requestData");
      
         await axios.post('https://localhost:7222/api/Signup/CreateCustomer', {
              Name:Name,
             Email: Email,
             PhoneNo: Phoneno,
              Password: Password,
              Available: false,
              Role_Id:Selectrole
            
              
           }, { headers: {
            'Content-Type': 'application/json'
          }})
            .then(response => {
               console.log('Response:', response.data);


              setemail('');
              setname('');
              setpassword('');
              setphoneno('');
              
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
      <Text style={css.text}>Signup</Text>
      <TextInput value={Name} onChangeText={setname} style={css.input} placeholderTextColor=" #cccccc" placeholder='Name'></TextInput>
      
      <TextInput value={Phoneno} onChangeText={setphoneno} style={css.input} placeholderTextColor=" #cccccc" placeholder='Phoneno'></TextInput>
      <TextInput value={Email} onChangeText={setemail} style={css.input} placeholderTextColor=" #cccccc" placeholder='Email'></TextInput>
      <TextInput secureTextEntry={true} value={Password}  onChangeText={setpassword} style={css.input} placeholderTextColor=" #cccccc" placeholder='Password'></TextInput>
      <Picker
        selectedValue={Selectrole}
        onValueChange={setSelected}
      >
        <Picker.Item label="Client" value="2" />
        <Picker.Item label="Restaurant" value="1" />
        <Picker.Item label="Delivery" value="3" />
      </Picker>
      <TouchableOpacity ><Button onPress={Signup} title='Signup'>Sign Up</Button></TouchableOpacity>

        <View style={{flexDirection: 'row', marginTop:40, alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            <View>
                <Text style={css.txt}>Sign up using </Text>
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