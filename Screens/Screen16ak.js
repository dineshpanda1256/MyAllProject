import React from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/AntDesign';

const Screen4 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.heading}>
          <View>
            <Image
              onPress={() => navigation.navigate('Screen1')}
              source={require('../Assets/Image/backicon.png')}
            />
          </View>
          <View>
            <Text style={styles.Add}>Add new address</Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View>
            <Image
              style={styles.mapimage}
              source={require('../Assets/Image/map.png')}
            />
          </View>
        </View>

        <View>
          <Text style={styles.comment}>Full Name</Text>
        </View>
        <View style={styles.search}>
          <TextInput
            style={styles.placeholder}
            placeholder="Sagarika Mohanty"></TextInput>
        </View>
        <View>
          <Text style={styles.comment}>Address</Text>
        </View>
        <View style={styles.search1}>
          <TextInput style={styles.placeholder}></TextInput>
        </View>
        <View>
          <Text style={styles.comment}>District</Text>
        </View>
        <View style={styles.search2}>
          <TextInput style={styles.placeholder}></TextInput>
        </View>
        <View>
          <Text style={styles.comment}>City</Text>
        </View>
        <View style={styles.search2}>
          <TextInput style={styles.placeholder}></TextInput>
        </View>
        <View style={styles.mainrow}>
          <View>
            <View style={styles.State}>
              <Text style={styles.state}>State</Text>
            </View>
            <View style={styles.searchbox}>
              <TextInput style={styles.placeholder}></TextInput>
            </View>
          </View>
          <View>
            <View style={styles.Pin}>
              <Text style={styles.pin}>Pin Code</Text>
            </View>
            <View style={styles.searchbox}>
              <TextInput style={styles.placeholder}></TextInput>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.comment}>Phone Number</Text>
        </View>
        <View style={styles.search2}>
          <TextInput style={styles.placeholder}></TextInput>
        </View>

        <View style={{alignItems: 'center'}}>
          <LinearGradient style={styles.btn} colors={['#00E0C5', '#009987']}>
            <TouchableOpacity>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={styles.btn1}
                  onPress={() => navigation.navigate('Screen5')}>
                  Add Address
                </Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  State: {
    marginLeft: 18,
  },
  state: {
    fontSize: 12,
    color: '#000000',
  },
  Pin: {
    marginLeft: 18,
  },
  pin: {
    fontSize: 12,
    color: '#000000',
  },
  mainrow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  mapimage: {
    width: Dimensions.get('window').width * 0.9,
  },
  Add: {
    marginTop: 15,
  },
  heading: {
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 15,
  },
  placeholder: {
    color: '#000000',
  },
  search: {
    borderWidth: 1,
    borderColor: '#EFF3FA',
    borderRadius: 10,
    // backgroundColor: '#CDCDCD',
    paddingLeft: 10,
    marginLeft: 15,
    marginTop: 8,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.06,
  },

  search1: {
    borderWidth: 1,
    borderColor: '#EFF3FA',
    borderRadius: 10,
    // backgroundColor: '#CDCDCD',
    paddingLeft: 10,
    marginLeft: 15,
    marginTop: 8,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.12,
  },
  search2: {
    borderWidth: 1,
    borderColor: '#EFF3FA',
    borderRadius: 10,
    // backgroundColor: '#CDCDCD',
    paddingLeft: 10,
    marginLeft: 15,
    marginTop: 8,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.06,
  },
  searchbox: {
    borderWidth: 1,
    borderColor: '#EFF3FA',
    borderRadius: 10,
    // backgroundColor: '#CDCDCD',
    paddingLeft: 10,
    marginLeft: 15,
    marginTop: 8,
    width: Dimensions.get('window').width * 0.43,
    height: Dimensions.get('window').height * 0.06,
  },
  comment: {
    marginLeft: 20,
    marginTop: 15,
    color: '#000000',

    fontSize: 12,
  },
  //
  container: {
    backgroundColor: '#FFFEFF',
    flex: 1,
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
    marginTop: 10,
  },
});

export default Screen4;
