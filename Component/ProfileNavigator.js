// import DeliveryProfile from './DeliveryProfile'
// import RestaurantProfile from './RestaurantProfile'
// import Profile from './Profile';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { useEffect , useState } from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// export default function ProfileNavigator() {
//     console.log("Clicked");
//   const [userRole, setUserRole] = useState();

//   useEffect(() => {
//     const fetchUserRole = async () => {

//         AsyncStorage.getItem('userRole')
//         .then((userString) => {
//           if (userString) {
//             const user = JSON.parse(userString);
//             const role = user.role;
//             setUserRole(role);
           
//             console.log('User role:', user);
           
//           } else {
//             console.log('User role not found');
            
//           }
//         })
//         .catch((error) => {
//           console.error('Error retrieving user role:', error);
//         });

//     };

//     fetchUserRole();
//   }, []);

  
//   return (
   
//     <Stack.Navigator>

//     {
//           userRole === 1? <Stack.Screen name="RestaurantProfile" component={RestaurantProfile} options={{ headerShown: false }} />:
//           userRole === 2? <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>:
//           userRole === 3? <Stack.Screen name="DeliveryProfile" component={DeliveryProfile} options={{ headerShown: false }}/>:
//           <Stack.Screen name="Signin" component={Signin}  options={{ headerShown: false }}/>
//         }
//       {/* {userRole === 'login' && (
//         <Stack.Screen name="Login" component={LoginScreen} />
//       )}
//       {userRole === 'restaurant' && (
//         <Stack.Screen
//           name="RestaurantProfile"
//           component={RestaurantProfileScreen}
//         />
//       )}
//       {userRole === 'delivery' && (
//         <Stack.Screen name="Delivery" component={DeliveryScreen} />
//       )}
//       {userRole === 'user' && (
//         <Stack.Screen name="UserProfile" component={UserProfileScreen} />
//       )} */}
//     </Stack.Navigator>
 
//   );
// }

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DeliveryProfile from './DeliveryProfile';
import RestaurantProfile from './RestaurantProfile';
import Profile from './Profile';
import Signin from './Signin'

const Stack = createStackNavigator();

export default function ProfileNavigator({navigation}) {
  const [userRole, setUserRole] = useState("ok");

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const userRoleString = await AsyncStorage.getItem('userRole');
        if (userRoleString) {
          const role = JSON.parse(userRoleString);
          const roles = role.role;
          setUserRole(roles);
          console.log(roles);
        } else {
          console.log('User role not found');
        }
      } catch (error) {
        console.error('Error retrieving user role:', error);
      }
    };

    fetchUserRole();
  }, []);

  if (userRole === null) {
    return null; // or you can show a loading screen
  }

  return (
  
      <Stack.Navigator>
        {userRole === 1 ? (
          <Stack.Screen
            name="RestaurantProfile"
            navigation={navigation}
            component={RestaurantProfile}
            options={{ headerShown: false }}
          />
        ) : userRole === 2 ? (
          <Stack.Screen
            name="Profile"
            navigation={navigation}
            component={Profile}
            options={{ headerShown: false }}
          />
        ) : userRole === 3 ? (
          <Stack.Screen
            name="DeliveryProfile"
            navigation={navigation}
            component={DeliveryProfile}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    
  );
}

