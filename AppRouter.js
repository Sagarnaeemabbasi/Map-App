// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './Screens/Signup';
import Login from './Screens/Login';
import Home from './Screens/Home';
import {Image} from 'react-native';
import MapTabs from './Screens/UserScreens/Map';
function AppRouter() {
  const Stack = createNativeStackNavigator();
  function LogoTitle() {
    return (
      <Image
        style={{width: 50, height: 50}}
        // source={require('https://www.appfoundry.be/uploads/_1200x630_crop_center-center_none/react-cover.png')}
        source={{
          uri: 'https://www.appfoundry.be/uploads/_1200x630_crop_center-center_none/react-cover.png',
        }}
      />
    );
  }
  return (
    <>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            options={{
              // headerTitle: props => <LogoTitle {...props} />,
              // headerStyle: {
              //   backgroundColor: 'purple',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   textAlign: 'center',
              // },
              headerShown: false,
            }}
            //  options={({ route }) => ({ title: route.params.name })}
            name="home"
            component={Home}
          />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default AppRouter;
