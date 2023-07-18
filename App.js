import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect , useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from './Component/Homepage';
import Categories from './Component/Categories';
import Offer from './Component/Offer';
import CategoriesItem from './Component/CategoriesItem';
import SearchItem from './Component/SearchItem';
import CartItem from './Component/CartItem';
import Profile from './Component/Profile';
import SignUp from './Component/SignUp'
import Signin from './Component/Signin'
import DeliveryProfile from './Component/DeliveryProfile'
import RestaurantProfile from './Component/RestaurantProfile'
import AddRestaurantform from './Component/Form/AddRestaurantform'
import AddCategoryform from './Component/Form/AddCategoryform';
import AddItemform from './Component/Form/AddItemform';
import Veg from './Component/Veg';
import NonVeg from './Component/NonVeg';
// import Map from './Component/Map';
// import DeliveryMap from './Component/DeliveryMap';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileNavigator from './Component/ProfileNavigator';





const Stack = createStackNavigator();


export default function App() {
  
  const [userrole ,setuserrole] = useState();
//  AsyncStorage.removeItem('userRole')
//               .then(() => {
//                 console.log('User role removed successfully');
//               })
//               .catch((error) => {
//                 console.error('Error removing user role:', error);
//               });
//  AsyncStorage.removeItem('userId')
//               .then(() => {
//                 console.log('User Id removed successfully');
//               })
//               .catch((error) => {
//                 console.error('Error removing user Id:', error);
//               });
  //GetItem
  AsyncStorage.getItem('userRole')
  .then((userString) => {
    if (userString) {
      const user = JSON.parse(userString);
      const role = user.role;
      setuserrole(role);
     
      console.log('User role:', user);
     
    } else {
      console.log('User role not found');
      
    }
  })
  .catch((error) => {
    console.error('Error retrieving user role:', error);
  });


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

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }}/>
        <Stack.Screen name="CategoriesItem" component={CategoriesItem} options={{ headerShown: false }}/>
        <Stack.Screen name="Offer" component={Offer} options={{ headerShown: false }}/>
        <Stack.Screen name="SearchItem" component={SearchItem} options={{ headerShown: false }} />
        <Stack.Screen name="CartItem" component={CartItem} options={{ headerShown: false }}/>
        <Stack.Screen name="Veg" component={Veg} />
        <Stack.Screen name="NonVeg" component={NonVeg}/>

        <Stack.Screen name="ProfileNavigator" component={ProfileNavigator} options={{ headerShown: false }}/>
  
        {/* <Stack.Screen name="DeliveryProfile" component={DeliveryProfile} options={{ headerShown: false }}/>
       
        {
          userrole === 1? <Stack.Screen name="RestaurantProfile" component={RestaurantProfile} options={{ headerShown: false }} />:
          userrole === 2? <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>:
          userrole === 3? <Stack.Screen name="DeliveryProfile" component={DeliveryProfile} options={{ headerShown: false }}/>:
          <Stack.Screen name="Signin" component={Signin}  options={{ headerShown: false }}/>
          
        } */}
         <Stack.Screen
            name="Signin"
            component={Signin}
            options={{ headerShown: false }}
          />
        <Stack.Screen name="SignUp" component={SignUp}  options={{ headerShown: false }}/>
      
        <Stack.Screen name="AddRestaurantform" component={AddRestaurantform} />
        <Stack.Screen name="AddCategoryform" component={AddCategoryform} />
        <Stack.Screen name="AddItemform" component={AddItemform} />
        {/* <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="DeliveryMap" component={DeliveryMap} /> */}
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}
