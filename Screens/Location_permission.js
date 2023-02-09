import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Location_permission = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../Assets/Image/map_reg.png')} style={{width: Dimensions.get('screen').width*0.8, height: Dimensions.get('screen').height* 0.35}} />
        <Text style={styles.maptxt}>
          We just need to know where you are in order to find near by service
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Search_location')}>
          <Text style={styles.btntxt}>Select Location Manually</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient
            colors={['#00E0C5', '#009987']}
            style={[styles.linearGradient, styles.btn1]}>
            <Text style={styles.btntxt1}>Detect Current Location</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#fff',
  },
  maptxt: {
    width: Dimensions.get('window').width * 0.7,
    textAlign: 'center',
    marginTop:30,
  },
  btn: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#00E0C5',
    width: Dimensions.get('window').width * 0.9,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  btntxt: {
    color: '#009987',
  },
  btn1: {
    borderRadius: 50,
    backgroundColor: '#00E0C5',
    width: Dimensions.get('window').width * 0.9,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntxt1: {
    color: '#FFFFFF',
  },
});
export default Location_permission;
