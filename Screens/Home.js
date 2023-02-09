import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Docters from '../Components/Doctor';
import Searchicon from 'react-native-vector-icons/Ionicons';
import Clinics from '../Components/Clinics';
import MedicineShop from '../Components/MedicineShop';
import BottomNavigator from '../Components/BottomNavigator';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Home = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.menuicon}>
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
          <Image source={require('../Assets/Image/menu_icon.png')} style={{width: 15, height: 15}}/>
        </TouchableOpacity>
        {/* <BottomNavigator /> */}
        <View style={styles.icon}>
          <TouchableOpacity
            style={{marginRight: 20}}
            onPress={() => navigation.navigate('POrderTrackingScreen')}>
            <Image source={require('../Assets/Image/Ambulance_icon.png')} style={styles.iconsImg} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image source={require('../Assets/Image/Notification_icon.png')} style={styles.iconsImg} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 20,
        }}>
        <FontAwesome5 name='map-pin' size={15} color="#009987" />
        <Text style={styles.text1}>Patia,Bhubaneswar</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#EFF3FA',
          marginHorizontal: 10,
          marginVertical: 10,
          borderRadius: 10,
          width: Dimensions.get('screen').width * 0.95,
        }}>
        <TextInput
          style={{width: Dimensions.get('window').width - 100}}
          placeholder="Search Location"></TextInput>
        <TouchableOpacity>
          <Searchicon size={20} name="ios-search-sharp" />
        </TouchableOpacity>
      </View>
      
        <View style={styles.banner}>
          <Image
            style={styles.banner_img}
            source={require('../Assets/Image/banner.png')}
          />
        </View>
        <View style={styles.Serviceview}>
          <TouchableOpacity
            style={styles.Service}
            onPress={() => {
              navigation.navigate('Medicine_home');
            }}>
            <Image source={require('../Assets/Image/medicine.png')} style={{width: 90, height: 83, marginTop: 15, marginBottom: 2}}></Image>
            <Text style={styles.Servicetxt}>Medicine</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Service}
            onPress={() => {
              navigation.navigate('PatholabListScreen');
            }}>
            <Image source={require('../Assets/Image/patholab.png')}></Image>
            <Text style={styles.Servicetxt}>Patholab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Service}
            onPress={() => {
              navigation.navigate('Doctor_home');
            }}>
            <Image source={require('../Assets/Image/doctor.png')}></Image>
            <Text style={styles.Servicetxt}>Doctor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Service}
            onPress={() => {
              navigation.navigate('Clinics');
            }}>
            <Image source={require('../Assets/Image/clinic.png')}></Image>
            <Text style={styles.Servicetxt}>Clinic</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text2}>Doctor Near By You</Text>

        <ScrollView horizontal={true} style={{marginBottom: 20}} showsHorizontalScrollIndicator={false}>
          <Docters
            name={'Dr.Kate Rose'}
            post={'Pediatrician'}
            img={require('../Assets/Image/doc1.png')}
          />
          <Docters
            name={'Dr. Kayle Bush'}
            post={'Cadiologist'}
            img={require('../Assets/Image/doc2.png')}
          />
          <Docters
            name={'Dr.Kate Rose'}
            post={'Pediatrician'}
            img={require('../Assets/Image/doc1.png')}
          />
          <Docters
            name={'Dr. Kayle Bush'}
            post={'Cadiologist'}
            img={require('../Assets/Image/doc2.png')}
          />
        </ScrollView>

        <Text style={styles.text2}>Clinics Near By You</Text>
        <ScrollView horizontal={true} style={{marginBottom: 20}} showsHorizontalScrollIndicator={false}>
          <Clinics
            clinicname={'Homeopathetic Clinic'}
            clinicplace={'Nandan Vihar,patia'}
            img={require('../Assets/Image/clinic1.png')}></Clinics>
          <Clinics
            clinicname={'Sai Clinic'}
            clinicplace={'Nandan Vihar,patia'}
            img={require('../Assets/Image/clinic2.png')}></Clinics>
          <Clinics
            clinicname={'Homeopathetic Clinic'}
            clinicplace={'Nandan Vihar,patia'}
            img={require('../Assets/Image/clinic1.png')}></Clinics>
        </ScrollView>

        <Text style={styles.text2}>Patholab Near By You </Text>
        <ScrollView style={styles.labview} horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.labimgview}
            onPress={() => {
              navigation.navigate('Patholab_home');
            }}>
            <Image
              style={styles.labimg}
              source={require('../Assets/Image/Patholab1.png')}></Image>
          </TouchableOpacity>
          <View style={styles.labimgview}>
            <Image
              style={styles.labimg}
              source={require('../Assets/Image/Patholab2.png')}></Image>
          </View>
          <View style={styles.labimgview}>
            <Image
              style={styles.labimg}
              source={require('../Assets/Image/Patholab1.png')}></Image>
          </View>
          <View style={styles.labimgview}>
            <Image
              style={styles.labimg}
              source={require('../Assets/Image/Patholab2.png')}></Image>
          </View>
        </ScrollView>

        <Text style={styles.text2}>Medicine Shop Near By You</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <MedicineShop
            shopname={'Apollo Medicine Store'}
            img={require('../Assets/Image/medicinestore.png')}></MedicineShop>
          <MedicineShop
            shopname={'Apollo Medicine Store'}
            img={require('../Assets/Image/medicinestore.png')}></MedicineShop>
          <MedicineShop
            shopname={'Apollo Medicine Store'}
            img={require('../Assets/Image/medicinestore.png')}></MedicineShop>
        </ScrollView>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconsImg: {
    width: 20,
    height: 20
  },
  menuicon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  icon: {
    flexDirection: 'row',
  },

  text1: {
    color: '#009987',
    marginLeft: 5,
    fontWeight: 'bold',
    fontFamily: 'Mulish',
  },
  search: {
    padding: 8,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#EFF3FA',
  },
  banner: {
    
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  banner_img: {
    width: Dimensions.get('screen').width * 0.95,
    height: 160,
    borderRadius: 10
  },
  Service: {
    alignItems: 'center',
  },
  Serviceview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  Servicetxt: {
    color: '#009987',
    fontWeight: 'bold',
    fontFamily: 'Mulish',
  },
  text2: {
    fontWeight: '600',
    color: '#232323',
    fontSize: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    fontFamily: 'Mulish'
  },
  labview: {
    marginBottom: 10,
    marginLeft: 15,
  },
  labimgview: {
    paddingVertical: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    borderRadius: 10,
    justifyContent: 'center',
  },
  labimg: {
    width: 150,
    height: 130,
  },
});

export default Home;