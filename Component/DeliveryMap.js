
// import { View, Text , Image, Button, SafeAreaView , TouchableOpacity} from 'react-native'
// import React, { useState } from 'react'
//  import MapView ,{ Marker } from 'react-native-maps';
//  import { Ionicons , MaterialIcons , AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';

// const DeliveryMap = () => {

//   const [coordinates, setCoordinates] = useState(null);
  

//    const handleMapPress = event => {
//     const latitude = event.nativeEvent.coordinate.latitude;
//     const longitude = event.nativeEvent.coordinate.longitude;
//     console.log('Latitude:', latitude);
//     console.log('Longitude:', longitude);
//     setCoordinates({ latitude, longitude });
   
   
   
//   };
//   return (
//     <View>

//       <View style={{height:80,backgroundColor:'#E2725B' ,display:'flex',justifyContent:'space-between'}}>
//          <Text style={{position:'absolute',bottom:0 , fontSize:24,color:'white'}}>-back</Text>
//          <Text style={{position:'absolute',bottom:0,left:'40%' , fontSize:24,color:'white'}}>Map</Text>
//          <Text style={{position:'absolute',bottom:0 ,right:0, fontSize:24,color:'white'}}> <MaterialCommunityIcons style={{marginLeft:5}} name="cart-minus" size={30} color="black" />
//        </Text>

//       </View>
     
//       {/* Map section */}
//          <View >
//          <MapView style={{height:500}} 
        
//          onPress={handleMapPress}   
//          zoomEnabled={true}
//          zoomControlEnabled={true}
//            initialRegion={{
//     latitude: 27.69431289719446,
//     longitude: 84.42155007272959,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   }}>
  
//   {coordinates && (
//           <Marker coordinate={coordinates} ><Image style={{height:70,width:70}} source={require('../Public/mapicon.png')}></Image></Marker>
//         )}
//   </MapView>
//   <Button color='#E2725B' title="Proceed"  />


//         </View>

//         {/* Tracking section */}
//        <View style={{display:'flex',flexDirection:'row',marginTop:30,justifyContent:'space-evenly',alignItems:'center'}}>
//         <Text style={{fontSize:15}}>Check In</Text>
//         <AntDesign name="rightcircle" size={24} color="orange" />
//         <View style={{backgroundColor:'black' ,height:2,width:50}}></View>
//         <Text  style={{fontSize:15}}>On the way</Text>
//         <AntDesign name="rightcircle" size={24} color="black" />
//         <View style={{backgroundColor:'black' ,height:2,width:50}}></View>
//         <Text  style={{fontSize:15}}>Received</Text>
//         <AntDesign name="rightcircle" size={24} color="black" />
//        </View>
//        {/* From where Item picked */}
//        <Text style={{marginLeft:10,fontSize:22,marginTop:10,fontWeight:'bold'}}>Pick from</Text>
//        <Text style={{marginLeft:10,fontSize:20,color:'red',marginTop:10}}>Lime and Lemon (Chitwan Branch)</Text>
//        <Text style={{marginLeft:10,fontSize:20,color:'green',marginTop:2}}>Bharat Bhandari (12:55 sunday)</Text>
      
//     </View>
//   )
// }

// export default DeliveryMap
