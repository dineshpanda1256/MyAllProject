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
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapIcon from 'react-native-vector-icons/FontAwesome5';

const AllTestListScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.firstrowDiv}>
          <View>
            <AntDesign
              name="left"
              size={20}
              color="#666"
              style={styles.leftIcon}
              onPress={() => navigation.navigate('MedicineStoreList')}
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
        <TouchableOpacity style={styles.div2}>
          <View style={styles.thyroid}>
            <View style={styles.Row1}>
              <View>
                <Text style={styles.txt9}>Complete Blood Count (CBC)</Text>
              </View>
              <View>
                <Text style={styles.txt10}>
                  Price : ₹ 350.00<Text style={styles.clr}> 10% off</Text>
                </Text>
              </View>
            </View>
            <View style={styles.Row2}>
              <View style={styles.deleteIcon}>
                <AntDesign name="delete" size={12} color="#01B8A1" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.div2}>
          <View style={styles.thyroid}>
            <View style={styles.Row1}>
              <View>
                <Text style={styles.txt9}>
                  Thyroid Stmulating Hormone (TSH)
                </Text>
              </View>
              <View>
                <Text style={styles.txt10}>
                  Price : ₹ 350.00<Text style={styles.clr}> 10% off</Text>
                </Text>
              </View>
            </View>
            <View style={styles.Row2}>
              <View style={styles.deleteIcon}>
                <AntDesign name="delete" size={12} color="#01B8A1" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.div2}>
          <View style={styles.thyroid}>
            <View style={styles.Row1}>
              <View>
                <Text style={styles.txt9}>Liver Function Test</Text>
              </View>
              <View>
                <Text style={styles.txt10}>
                  Price : ₹ 350.00<Text style={styles.clr}> 10% off</Text>
                </Text>
              </View>
            </View>
            <View style={styles.Row2}>
              <View style={styles.deleteIcon}>
                <AntDesign name="delete" size={12} color="#01B8A1" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.div2}>
          <View style={styles.thyroid}>
            <View style={styles.Row1}>
              <View>
                <Text style={styles.txt9}>Thyphoid</Text>
              </View>
              <View>
                <Text style={styles.txt10}>
                  Price : ₹ 350.00<Text style={styles.clr}> 10% off</Text>
                </Text>
              </View>
            </View>
            <View style={styles.Row2}>
              <View style={styles.deleteIcon}>
                <AntDesign name="delete" size={12} color="#01B8A1" />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View style={{height: Dimensions.get('window').height * 0.4}}></View>

        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => navigation.navigate('Porderdetailes')}>
          <LinearGradient
            colors={['#00E0C5', '#009987']}
            style={styles.takeFreeTrialBtnDiv}>
            <View style={styles.takeFreeTrialBtn}>
              <Text style={styles.takeFreeTrialBtnTxt}>Book Now</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
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
    marginLeft: 15,
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
  deleteIcon: {
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 2,
    padding: 1,
  },

  backIconBackground: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#EFF3FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Row2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  clr: {
    color: '#009987',
  },
  txt9: {
    color: '#222222',
    marginLeft: 15,
    marginTop: 7,
    fontSize: 11,
  },
  txt10: {
    color: '#222222',
    marginLeft: 15,
    marginTop: 5,
    fontSize: 9,
  },
  thyroid: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  div2: {
    paddingRight: 15,
    borderWidth: 1,
    borderColor: '#15dcd3',
    width: Dimensions.get('window').width * 0.9,
    marginHorizontal: 15,
    borderRadius: 10,
    height: 50,
    marginTop: 15,
    marginVertical: 2,
    borderColor: '#E1E1E1',
  },
  address: {
    marginTop: 8,
  },
  container: {
    backgroundColor: '#FFFEFF',
    flex: 1,
  },
  icon: {
    marginLeft: 20,
    marginTop: 25,
  },

  btn1: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  btn: {
    borderRadius: 20,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.1,
    marginTop: 230,
  },
  img1: {
    marginLeft: 120,
  },
  img2: {
    marginLeft: 90,
  },
  img3: {
    marginLeft: 170,
  },
  img4: {
    marginLeft: 169,
  },
  takeFreeTrialBtnDiv: {
    marginTop: 10,
    width: Dimensions.get('screen').width * 0.85,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 20,
  },
  takeFreeTrialBtn: {
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  takeFreeTrialBtnTxt: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
    color: '#fff',
    // textShadowOffset: 5,
  },
});

export default AllTestListScreen;
