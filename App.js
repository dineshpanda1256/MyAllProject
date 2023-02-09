// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Noti from './src/screens/Notification';
import Profilescreen from './src/screens/profile';
import Otp from './src/screens/otpverification';
import Search_location from './src/screens/locationmenu';
import Ifcuts from './src/screens/Ifcallcuts';
import Ifcutsinthemiddle from './src/screens/ifcallcuts1';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Otp"
        headerShown={false}
        screenOptions={{headerTitle: 'Test', headerShown: false}}>
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Search_location" component={Search_location} />
        <Stack.Screen name="Ifcutsinthemiddle" component={Ifcutsinthemiddle} />
        <Stack.Screen name="Ifcuts" component={Ifcuts} />
        <Stack.Screen name="Profilescreen" component={Profilescreen} />
        <Stack.Screen name="Noti" component={Noti} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
