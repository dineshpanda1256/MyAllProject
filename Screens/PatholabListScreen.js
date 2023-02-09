import React from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapIcon from 'react-native-vector-icons/FontAwesome5';

const PatholabListScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.firstrowDiv}>
        <View>
          <AntDesign
            name="left"
            size={20}
            color="#666"
            style={styles.leftIcon}
            onPress={() => navigation.navigate('OrderCart')}
          />
        </View>
        <View>
          <Text style={styles.patholabsTxt}>Patholabs</Text>
        </View>
      </View>

      <View style={styles.location}>
        <View style={styles.pinicon}>
          <MapIcon name="map-pin" size={15} color="#009987" />
        </View>
        <View style={styles.address}>
          <Text style={styles.patiaTxt}>Patia, Bhubaneswar</Text>
        </View>
      </View>

      <View style={styles.secondRowDiv}>
        <View style={styles.secondRowTxtInputDiv}>
          <TextInput placeholder="Search Patholabs" />
        </View>
        <View>
          <AntDesign name="search1" size={20} color="#666" />
        </View>
      </View>

      <View style={{marginTop: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
          }}>
          <TouchableOpacity
            style={styles.imgDiv}
            onPress={() => navigation.navigate('PatholabDetailes')}>
            <Image
              source={require('../Assets/Image/Patholab1.png')}
              style={styles.img}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imgDiv}
            onPress={() => navigation.navigate('PatholabDetailes')}>
            <Image
              source={require('../Assets/Image/Patholab2.png')}
              style={styles.img}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
          }}>
          <TouchableOpacity
            style={styles.imgDiv}
            onPress={() => navigation.navigate('PatholabDetailes')}>
            <Image
              source={require('../Assets/Image/Patholab1.png')}
              style={styles.img}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imgDiv}
            onPress={() => navigation.navigate('PatholabDetailes')}>
            <Image
              source={require('../Assets/Image/Patholab2.png')}
              style={styles.img}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
          }}>
          <TouchableOpacity
            style={styles.imgDiv}
            onPress={() => navigation.navigate('PatholabDetailes')}>
            <Image
              source={require('../Assets/Image/Patholab1.png')}
              style={styles.img}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imgDiv}
            onPress={() => navigation.navigate('PatholabDetailes')}>
            <Image
              source={require('../Assets/Image/Patholab2.png')}
              style={styles.img}
            />
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  firstrowDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  leftIcon: {
    backgroundColor: '#EFF3FA',
    padding: 10,
    marginRight: 20,
    // marginVertical: 15,
    borderRadius: 30,
  },
  patholabsTxt: {
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 0.300349,
    color: '#222B45',
  },
  patiaTxt: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.300349,
    color: '#009987',
    marginLeft: 5,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginBottom: 20,
  },

  secondRowDiv: {
    width: Dimensions.get('screen').width * 0.9,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginRight: 20,
    backgroundColor: '#EFF3FA',
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#EFF3FA',
  },
  img: {
    width: 150,
    height: 130,
  },
  imgDiv: {
    width: Dimensions.get('screen').width * 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 20,
    padding: 5,
  },
});

export default PatholabListScreen;
