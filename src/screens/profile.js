import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Profilcomp from '../components/profilecomp';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
import Icon1 from 'react-native-vector-icons/AntDesign';

const Profilescreen = ({navigation}) => {
  var api = [
    {
      // button:'Detect Current Location',
      loct: 'Kate Rose',
      icon: 'user',
      icon2: 'mail',
      mail: 'katerose@gmail.com',
      date: '01.01.1990',
      contact: '+91 7852979518',
      msg: '1234 5678 9010',
      icon3: 'calendar',
      icon4: 'smartphone',
      icon5: 'card-text-outline',
    },
  ];

  return (
    <ScrollView>
      <LinearGradient
        colors={['#009987', '#00E0C5', '#009987']}
        style={styles.contrainer}>
        <View style={styles.topdiv}>
          
          {/* backicon start */}
          <View style={styles.asmv1}>
            <View style={styles.iview1}>
              <TouchableOpacity style={styles.icview}>
                <Icon1
                  name="left"
                  onPress={() => {
                    navigation.goBack();
                  }}
                  size={20}
                />
              </TouchableOpacity>
              <View style={styles.editview}>
                <Text style={{color: 'white', fontWeight: '500'}}>EDIT</Text>
              </View>
            </View>
          </View>

          {/* back icon end */}

          <View style={styles.assumesec}>
            <View style={styles.mainsec}>
              <Image style={styles.img} source={require('../Assests/clinic.png')} />
              <View>
                <Text style={{color: 'white', fontSize: 17}}>
                  Lifecare Pathology
                </Text>
                <Text style={{color: 'white'}}>ID: CKARE001</Text>
              </View>
            </View>
          </View>
        </View>

        {/* white bar  */}
        <View style={styles.whitebar}>
          <TouchableOpacity onPress={() => navigation.navigate('Noti')}>
            {api.map(dinesh1 => {
              return <Profilcomp data={dinesh1} />;
            })}
          </TouchableOpacity>

          {/* button start  */}
          <View style={styles.mainview}>
            <View style={styles.detailsview}>
              <TouchableOpacity onPress={() => navigation.navigate('Noti')}>
                <LinearGradient
                  colors={['#00E0C5', '#009987']}
                  style={styles.linearGradient}>
                  <Text style={styles.buttonText}>Save</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          {/* button end  */}
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Profilescreen;

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: '#009987',
  },
  whitebar: {
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 30,
    paddingBottom: 50,
    justifyContent: 'space-between',
  },
  mainview: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  linearGradient: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    width: Dimensions.get('window').width * 0.8,
  },
  buttonText: {
    fontSize: 18,
    // fontFamily: 'Gill Sans',
    textAlign: 'center',
    // margin: 10,
    color: 'white',
    marginVertical: 10,
    backgroundColor: 'transparent',

    paddingVertical: 2,
  },

  backicon: {
    padding: 9,
    backgroundColor: '#EFF3FA',
    borderRadius: 30,
    marginRight: 24,
  },
  googleicon: {
    padding: 9,
    backgroundColor: '#EFF3FA',
    borderRadius: 25,
    marginRight: 24,
  },
  icondiv: {},
  firstmaindiv: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    width: Dimensions.get('window').width * 1,
    // borderWidth:1,
    paddingLeft: 20,
    marginTop: 20,
  },
  assumesec: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1,
  },
  mainsec: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.17,
    // borderWidth:6,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  img: {
    width: Dimensions.get('window').width * 0.27,
    height: Dimensions.get('window').height * 0.13,
    borderRadius: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  topdiv: {
    height: Dimensions.get('window').height * 0.3,
  },
  firstmaindiv: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    width: Dimensions.get('window').width * 1,
    // borderWidth:1,
    paddingLeft: 20,
    marginTop: 20,
  },
  asmv1: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  iview1: {
    width: Dimensions.get('screen').width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icview: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: 'white',
    width: 37,
    borderRadius: 30,
    height:37,
    backgroundColor: '#EFF3FA',
  },
  editview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
