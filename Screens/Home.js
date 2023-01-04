import React from 'react';
import 'react-native-gesture-handler';
import EmployeeId from './EmployeeScreens/EmployeeId';
import ResgisteredVehicles from './UserScreens/ResgisteredVehicles';
import Vehicles from './UserScreens/Vehicles';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {Text, View} from 'react-native';
import Location from './UserScreens/Location';
import Map from './UserScreens/Map';

export default function Home({navigation}) {
  const RouteArray = [
    {
      name: 'Employer Id',
      navigate: 'employeeId',
    },
    {
      name: 'Registered Vehicles',
      navigate: 'registeredVehicles',
    },
    {
      name: 'Vehicles',
      navigate: 'vehicles',
    },
  ];
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName="Employer Id"
          // tabBar={()=><View style={{backgroundColor:"black"}}><Text>Text</Text></View>} // want to how your custom tabbar
          // detachInactiveScreens={false}
          // backBehavior='history'      // It fires when we click back button
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Employer Id') {
                iconName = 'person';
                color = 'purple';
              } else if (route.name === 'Vehicles') {
                iconName = 'local-taxi';
                color = 'purple';
              } else if (route.name === 'Registered Vehicles') {
                iconName = 'commute';
                color = 'purple';
              } else if (route.name === 'Location') {
                iconName = 'navigation';
                color = 'purple';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={30} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: 'darkblue',
            tabBarInactiveTintColor: 'black',
          })}>
          {/* options={{ tabBarBadge: 3 }}   This will use for show notifications as badge  */}
          <Tab.Screen
            options={{
              // title: 'appbabar' custom title
              tabBarLabel: 'apbar',
              headerShown: false,
            }}
            name="Employer Id"
            component={EmployeeId}
          />
          <Tab.Screen
            options={{headerShown: false}}
            name="Vehicles"
            component={Vehicles}
          />
          <Tab.Screen
            options={{headerShown: false}}
            name="Registered Vehicles"
            component={ResgisteredVehicles}
          />
          <Tab.Screen
            options={{headerShown: false}}
            name="Location"
            component={Location}
          />
          <Tab.Screen
            name="appMap"
            options={{tabBarShowLabel: false, headerShown: true}}
            component={Map}
            style={{display:'none'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>

  );
}
