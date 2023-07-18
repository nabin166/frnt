import { View, Text ,StyleSheet ,Pressable, TextInput, Button ,Image , TouchableOpacity , Picker } from 'react-native'
import React , {useState , useEffect} from 'react'
import { Entypo ,  Zocial} from '@expo/vector-icons'; 
// import axios from 'axios';
import axios from 'react-native-axios';
import * as ImagePicker from 'expo-image-picker';
import fileHandler from '../Filehandler';




import AsyncStorage from '@react-native-async-storage/async-storage';







export default function AddItemform({navigation}) {


    
    const [foodname , setfoodname] = useState();
    const [pic,setpic] = useState();
    const [foodprice , setfoodprice] = useState();
    const [foodimage , setfoodimage] = useState();
    const [fooddescription , setfooddescription] = useState();
    const [discountpercent , setdiscountpercent] = useState();
    const [restaurantid , setrestaurantid] = useState();
    const [categoryid , setcategoryid] = useState();
    const [SelectedImage , setSelectedImage] = useState();
    const [productImage, setProductImage] = useState({
      name: '',
      file: '',
    });
  

    const [restu ,setrestu] = useState();
    const [categ ,setcateg] = useState([]);

    const [hasGallaeryPermission,setHasGalleryPermission] = useState(null);
    const [image , setImage] = useState(null);

    useEffect(()=>{(async ()=>{
      const gallaryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(gallaryStatus.status === 'granted');
    })();},[]);

   const handleImagePicker = async ()=>{
      let result  = await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.Images,
        aspect:[4,3],
        quality:1,
      });

      console.log(result);

      if(!result.canceled){
        setImage(result.uri);
        const imagePath = response.uri;
        const imageName = response.fileName || 'image.jpg';

        // Create the destination path
        const destPath = `${RNFS.DocumentDirectoryPath}/images/${imageName}`;

        console.log(destPath);
        console.log("hello ");

        // Move the image to the destination folder
        RNFS.moveFile(imagePath, destPath)
          .then(() => {
            console.log('Image moved to:', destPath);
          })
          .catch((error) => {
            console.log('Error moving image:', error);
          });
        console.log(imageName);
      }
    };

    if(hasGallaeryPermission === false){
      return <Text>No access ti internal storage</Text>
    }
     console.log(Image);

//Resturant fetch
       //GetItem
   AsyncStorage.getItem('userId')
   .then((userString) => {
     if (userString) {
       const user = JSON.parse(userString);
       const id = user.id;

       axios
       .get('https://localhost:7222/api/Resturant/'+id)
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
  
//Category fetch
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

    //Items fetch
   useEffect((e)=>{
    axios
    .get('https://localhost:7222/api/FoodItem')
    .then((response) => {
      console.log("Response:", response.data);
      
      
      
       setpic(response.data[0].foodImage);
      
    
      // Handle the response data
    })
    .catch((error) => {
      // Handle the error
      console.error(error);
    });
    

  }, []);
 

    const Add = async ()=>{

      console.log(categoryid);
     
        if(foodname == ""){
          console.log("Empty foodName field");
        }
        if(foodprice == ""){
          console.log("Empty Foodprice");
        }
        if(fooddescription == ""){
          console.log("Empty foodDescription field");
        }
        if(discountpercent == ""){
          console.log("Empty Discount Percent");
        }
        if(categoryid == ""){
          console.log("Empty Category id");
        }
        if(foodname == "" || fooddescription ==""||foodprice == "" || discountpercent == "" || categoryid == "" || image =="" ){
          console.log("Fill the form properly");
        }
      
       else{
         console.log(image);
         console.log(categoryid);
          console.log(foodname + foodprice + fooddescription + discountpercent + categoryid + restu);
      
         await axios.post('https://localhost:7222/api/FoodItem/CreateFoodItem', {
              FoodName:foodname,
              FoodPrice:foodprice,
              FoodDescription:fooddescription,
              DiscountPercent:discountpercent,
              Category_Id: categoryid,
              Resturant_Id:restu,
              foodimage: image
            
           }, { headers: {
            'Content-Type': 'application/json'
          }})
            .then(response => {
               console.log('Response:', response.data);

               setfoodname("");
               setfooddescription("");
               setfoodprice("");
               setfoodimage("");
               setcategoryid("");
               setrestaurantid("");
               setdiscountpercent("");
               setImage("");

              // Handle the response data
            })
            .catch(error => {
              // Handle the error
              console.error(error);
            });


        }
      
      
    }
    ///Image handle
   
  


    

  return (
    <View>
      {/* <Image style={{height:100,width:100}} source={{uri:pic}}></Image> */}
      {image != null?(<Image style={{height:100,width:100}} source={{uri:image}}></Image>):(<Text>Hello</Text>)}
     
      <Text style={css.text}>Add FoodItems</Text>
      <TextInput value={foodname} onChangeText={setfoodname} style={css.input} placeholderTextColor=" #cccccc" placeholder='foodname'></TextInput>
      <TextInput value={foodprice} onChangeText={setfoodprice} style={css.input} placeholderTextColor=" #cccccc" placeholder='foodprice'></TextInput>
      <TextInput value={fooddescription} onChangeText={setfooddescription} style={css.input} placeholderTextColor=" #cccccc" placeholder='fooddescription'></TextInput>
      <TextInput value={discountpercent} onChangeText={setdiscountpercent} style={css.input} placeholderTextColor=" #cccccc" placeholder='discount in percent %'></TextInput>
      
      <Picker
         selectedValue={categoryid}
         onValueChange={(value) => {
          setcategoryid(value);
          console.log(value); }}
      >
        <Picker.Item color='#FDCEDF' label={"Select category Name"}  />
        {categ.map((item)=>{
      return (
        <Picker.Item key={item.category_Id} label={item.categoryName}  value={item.category_Id}/>
      )
      })}
      </Picker>
      <Button color='orange' title="Select Image" onPress={handleImagePicker} />

      <TouchableOpacity ><Button onPress={Add} title='Add Fooditems'>Add FoodItems</Button></TouchableOpacity>

      
    
      
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