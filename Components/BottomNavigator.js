import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Ionicicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

//import screen
import Home from '../Screens/Home';
import Clinics from '../Screens/Clinics';
import Doctors from '../Screens/Doctors';
import LogOut from '../Screens/LogOut';
import Medicine_home from '../Screens/Medicine_home';
import Membership from '../Screens/Membership';
import Patholabs from '../Screens/Patholabs';
import ReferAndEarns from '../Screens/ReferAndEarns';
import MyOrders from '../Screens/MyOrders';
import Orderhistory from '../Screens/orderhistory';
const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  const DrawerItemListData = [
    {
      name: 'Membership',
      icon: 'crown',
      routeName: 'Membership',
    },
    {
      name: 'My Orders',
      icon: 'shopping-bag',
      routeName: 'MyOrders',
    },
    {
      name: 'Medicine Store',
      icon: 'pills',
      routeName: 'MedicinStore',
    },
    {
      name: 'Doctor',
      icon: 'user-md',
      routeName: 'Doctors',
    },
    {
      name: 'Pathalabs',
      icon: 'flask',
      routeName: 'Patholabs',
    },
    {
      name: 'Clinics',
      icon: 'clinic-medical',
      routeName: 'Clinics',
    },
    {
      name: 'Refers & Earns',
      icon: 'gift',
      routeName: 'ReferAndEarns',
    },
    {
      name: 'Logout',
      icon: 'sign-out-alt',
      routeName: 'LogOut',
    },
  ];

  // var currentRouteIndex = props.navigation.getState().index

  const [currentRouteIndex, setCurrentRouteIndex] = useState(0);

  

  return (
    <LinearGradient colors={['#009987', '#00E0C5']} style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <View style={{marginHorizontal: 10}}>
            <Image
              source={require('../Assets/Image/Image.png')}
              style={{borderRadius: 50, height: 70, width: 70}}
            />
          </View>
          <View style={{flex: 1, marginHorizontal: 10}}>
            <Text style={{color: 'white', letterSpacing: 0.3}}>
              Sagarika Mohanty
            </Text>
          </View>
        </View>
        <View style={{height: Dimensions.get('screen').height * 0.1}}></View>
        <DrawerContentScrollView>
          {DrawerItemListData.map((item, index) => {
            return (
              <DrawerItem
                label={item.name}
                key={index}
                icon={() => (
                  <FontAwesome5
                    name={item.icon}
                    size={17}
                    style={{
                      marginLeft: 10,
                      color: currentRouteIndex == index ? '#009987' : 'white',
                    }}
                  />
                )}
                activeBackgroundColor={'white'}
                onPress={() => {
                  setCurrentRouteIndex(index);
                  props.navigation.navigate(item.routeName);
                }}
                focused={currentRouteIndex == index ? true : false}
                labelStyle={{
                  fontWeight: 'bold',
                  color: currentRouteIndex == index ? '#000' : 'white',
                }}
                style={{
                  marginHorizontal: -2,
                  width: '90%',
                  marginVertical: 7,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              />
            );
          })}
        </DrawerContentScrollView>
      </View>
    </LinearGradient>
  );
};
const BottomNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        //     // headerStyle:
        //     // {
        //     //     backgroundColor: "white",
        //     // },
        //     // headeTintColor: "fff",
        //     // headerTitleStyle:
        //     // {
        //     //     fontWeight: "bold"
        //     // },
        //     // headerTitle: "",
        //     // //drawerPosition: "right"
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Membership" component={Membership} />
      <Drawer.Screen name="MyOrders" component={MyOrders} />
      <Drawer.Screen name="Medicine_home" component={Medicine_home} />
      <Drawer.Screen name="Doctors" component={Doctors} />
      {/* <Drawer.Screen name="Patholabs" component={Patholabs}
            /> */} 
      <Drawer.Screen name="Clinics" component={Clinics} />
      <Drawer.Screen name="ReferAndEarns" component={ReferAndEarns} />
      <Drawer.Screen name="LogOut" component={LogOut} />
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({});
export default BottomNavigator;
