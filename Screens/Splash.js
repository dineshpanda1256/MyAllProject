import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
import Icon1 from 'react-native-vector-icons/AntDesign';

const Splashscreen = ({navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={styles.contrainer}>
      <View style={styles.splashimgview}>
        <Image
          style={styles.splashimg}
          source={require('../Assets/Image/goimg.png')}
        />
      </View>

      <View style={styles.fdiv}>
        <Text style={styles.heading}>Let's get Started</Text>
        <Text style={styles.inserttext}>Let’s consult wit doctor now</Text>
      </View>

      <View style={{height: Dimensions.get('screen').height * 0.06}}></View>

      {/* button start  */}
      <View style={styles.mainview}>
        <View style={styles.detailsview}>
          <TouchableOpacity onPress={() => navigation.navigate('Dinesh')}>
            <LinearGradient
              colors={['#00E0C5', '#009987']}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      {/* button end  */}
    </ScrollView>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  splashimg: {
    width: Dimensions.get('screen').width * 1,
    height: Dimensions.get('screen').height * 0.5,
  },
  splashimgview: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 90,
  },
  fdiv: {
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 10,
    justifyContent: 'center',
    // marginVertical:40,
  },
  heading: {
    fontWeight: '500',
    fontSize: 26,
    color: 'black',
  },
  inserttext: {
    fontSize: 13,
    paddingTop: 5,
  },
});
