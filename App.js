import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//---------------------screen--------------------
import MainSplashScreen from './Screens/MainSplashScreen';
import Membership1 from './Screens/Membership1';
import Membership2 from './Screens/Membership2';
import Membership3 from './Screens/Membership3';
import Refer from './Screens/Refer';
import MedicineList from './Screens/MedicineList';
import Medicine2ByCategory from './Screens/Medicinedetails';
import AppointmentBook from './Screens/AppointmentBook';
import AppointmentVideo from './Screens/AppointmentVdo';
import Screen2 from './Screens/Mordercart';
import AddAddress from './Screens/AddAddress';
import AddressAndPayment1 from './Screens/AddAddress';
import AddressAndPayment2 from './Screens/AddressAndPayment2';
import AddressAndPayment3 from './Screens/AddressAndPayment3';

import AddressAndPayment4 from './Screens/AddressAndPayment4';
import AddressAndPayment5 from './Screens/AddressAndPayment5';
import AddressAndPayment6 from './Screens/AddressAndPayment6';

import Orderpayment from './Screens/Orderpayment';
import AmbulanceOrder1 from './Screens/AmbulanceOrder1';
import AmbulanceOrder2 from './Screens/AmbulanceOrder2';
import AmbulanceOrder3 from './Screens/AmbulanceOrder3';
import AmbulanceOrder4 from './Screens/AmbulanceOrder4';
import AmbulanceOrder5 from './Screens/AmbulanceOrder5';
import Home from './Screens/Home';
import Location from './Screens/Location_permission';
import Search_location from './Screens/Search_location';
import Profile_screen from './Screens/Profile_screen';
import Profile_edit from './Screens/profile_edit';
import Mrn_number1 from './Screens/Mrn_number1';
import Notification from './Screens/Notification';
import Login from './Screens/Auth';
import Medicine_home from './Screens/Medicine_home';
import Orderhistory from './Screens/orderhistory';
import Order from './Screens/orders';
import Orderheading from './Screens/orderhistab';
import Loginwithnumber from './Screens/Loginwithnumber';
import Splash from './Screens/Splash';
import Dinesh from './Screens/Log';
import Otp_verification from './Screens/Otp_verification';
import Wrong_otp from './Screens/Wrong_otp';
import Registration from './Screens/Registration';
import Prescription from './Screens/Prescription';
import Orderprice from './Screens/orderprice';
import Mapp from './Screens/map';
import Bill from './Screens/bill';
import Rate from './Screens/rate';
import Patholab_home from './Screens/Patholab_home';
import Doctor_home from './Screens/Doctor_home';
import Screen1ak from './Screens/Screen1ak';
import Medicinestoredetails from './Screens/Medicinestoredetails';
// import Mcart from './Screens/MCart';
import Prescriptionupload from './Screens/Prescriptionupload';
import Screen6ak from './Screens/MRN_Order';
import Mrnmedicinelist from './Screens/Mrnmedicinelist';
import Mrnaddress from './Screens/Mrnaddress';
import PAddAddress from './Screens/PAddAddress';
import Pslot from './Screens/Pslot';
import Screen14ak from './Screens/Screen14ak';
import Screen16ak from './Screens/Screen16ak';
import DoctorProfile from './Screens/DoctorProfile';
import CoupnsField from './Screens/CoupnsField';
import Patholabs from './Screens/Patholabs';
import Doctors from './Screens/Doctors';
import Appointment from './Screens/Appointment';
import Payment from './Screens/Payment';
import Apoointmentdetails from './Screens/Apoointmentdetails';
import BottomNavigator from './Components/BottomNavigator';
import Clinics from './Screens/Clinics';
import POrderTrackingScreen from './Screens/POrderTrackingScreen';
import CancelRide from './Screens/CancelRide';

// medicine flow

// import Screen2 from './Screens/MCart';
import OrderCart from './Screens/OrderCartScreen';
import PatholabListScreen from './Screens/PatholabListScreen';
import PatholabDetailes from './Screens/PatholabDetailes';
import MedicineStoreList from './Screens/PMedicineStoreList';
import Porderdetailes from './Screens/Porderdetailes';
import AllTestListScreen from './Screens/Palltest';
import PChangeAddress from './Screens/PChangeAddress';
import PatholabPayment from './Screens/PatholabPayment';
import POrder from './Screens/POrder';
import MedicinestoredetailsOrderByShop from './Screens/MedicineStoreDetailsOrderByShop';
import MedicineListByShop from './Screens/MedicineListByShop';
import Omicron from './Screens/Corona';
import Bookingdetailscreen from './Screens/Bookingdetailsscreen';
import Callcut from './Screens/PatientDetailsScreen';
import FeedbackScreen from './Screens/Feedback';
import Doctorvideo from './Screens/VideoCall';
import BookingD from './Screens/BookingDetailsMainScreen';


const Stack = createNativeStackNavigator();
function App() {
  const [showSplashscreen, setshowSplashscreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowSplashscreen(false);
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search_location' screenOptions={{ headerShown: false }}>
        {showSplashscreen ? (
          <Stack.Screen
            name="MainSplashScreen"


            component={MainSplashScreen}
            options={{ headerShown: false }}
          />
        ) : null}
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MedicineListByShop"
          component={MedicineListByShop}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bookingdetailscreen"
          component={Bookingdetailscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Omicron" component={Omicron} />
        <Stack.Screen name="Refer" component={Refer} />
        <Stack.Screen name="PatholabPayment" component={PatholabPayment} />
        <Stack.Screen
          name="POrder"
          options={{ headerShown: false }}
          component={POrder}
        />
        <Stack.Screen
          name="Membership1"
          component={Membership1}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AppointmentVideo"
          component={AppointmentVideo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AppointmentBook"
          component={AppointmentBook}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="POrderTrackingScreen"
          component={POrderTrackingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddressAndPayment1"
          component={AddressAndPayment1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Porderdetailes"
          component={Porderdetailes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PAddAddress"
          component={PAddAddress}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PChangeAddress"
          component={PChangeAddress}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MedicineStoreList"
          component={MedicineStoreList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PatholabDetailes"
          component={PatholabDetailes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrderCart"
          component={OrderCart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PatholabListScreen"
          component={PatholabListScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Medicine2ByCategory"
          component={Medicine2ByCategory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Membership2"
          component={Membership2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Membership3"
          component={Membership3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MedicineList"
          component={MedicineList}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Doctorvideo"
          component={Doctorvideo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Callcut"
          component={Callcut}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FeedbackScreen"
          component={FeedbackScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BookingD"
          component={BookingD}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Medicinedetails"
          component={Medicinedetails}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Mordercart"
          component={Mordercart}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="AddAddress"
          component={AddAddress}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddressAndPayment2"
          component={AddressAndPayment2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddressAndPayment3"
          component={AddressAndPayment3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddressAndPayment4"
          component={AddressAndPayment4}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddressAndPayment5"
          component={AddressAndPayment5}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddressAndPayment6"
          component={AddressAndPayment6}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Orderpayment"
          component={Orderpayment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AmbulanceOrder1"
          component={AmbulanceOrder1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AmbulanceOrder2"
          component={AmbulanceOrder2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AmbulanceOrder3"
          component={AmbulanceOrder3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AmbulanceOrder4"
          component={AmbulanceOrder4}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AmbulanceOrder5"
          component={AmbulanceOrder5}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CancelRide"
          component={CancelRide}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MedicinestoredetailsOrderByShop"
          component={MedicinestoredetailsOrderByShop}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search_location"
          component={Search_location}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile_edit"
          component={Profile_screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile_screen"
          component={Profile_edit}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mrn_number1"
          component={Mrn_number1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dinesh"
          component={Dinesh}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Loginwithnumber"
          component={Loginwithnumber}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Otp_verification"
          component={Otp_verification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Wrong_otp"
          component={Wrong_otp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Medicine_home"
          component={Medicine_home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Orderhistory"
          component={Orderhistory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Order"
          component={Order}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Prescription"
          component={Prescription}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Orderheading"
          component={Orderheading}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Orderprice"
          component={Orderprice}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mapp"
          component={Mapp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bill"
          component={Bill}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Rate"
          component={Rate}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Patholab_home"
          component={Patholab_home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Doctor_home"
          component={Doctor_home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen1ak"
          component={Screen1ak}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Medicinestoredetails"
          component={Medicinestoredetails}
        />
        {/* <Stack.Screen name="Mcart" component={Mcart} /> */}
        <Stack.Screen
          name="Prescriptionupload"
          component={Prescriptionupload}
        />
        <Stack.Screen name="MRNOrder" component={Screen6ak} />
        <Stack.Screen
          name="Mrnmedicinelist"
          component={Mrnmedicinelist}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mrnaddress"
          component={Mrnaddress}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AllTestListScreen" component={AllTestListScreen} />
        <Stack.Screen name="Pslot" component={Pslot} />
        <Stack.Screen name="Screen14ak" component={Screen14ak} />
        <Stack.Screen name="Screen16ak" component={Screen16ak} />
        <Stack.Screen name="Patholabs" component={Patholabs} />
        <Stack.Screen name="Doctors" component={Doctors} />
        <Stack.Screen name="profile" component={DoctorProfile} />
        <Stack.Screen
          name="CoupnsField"
          component={CoupnsField}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen
          name="Apoointmentdetails"
          component={Apoointmentdetails}
        />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Clinics" component={Clinics} />
        {/* <Stack.Screen name="PatholabDetailes" component={PatholabDetailes} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
