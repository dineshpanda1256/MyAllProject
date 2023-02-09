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
import LinearGradient from 'react-native-linear-gradient';

const Screen5 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View>
          <Image source={require('../Assets/Image/backicon.png')} />
        </View>
        <View>
          <Text style={styles.SelectAddress}>Select Address</Text>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={styles.Add}>
          <Text
            style={styles.Address}
            onPress={() => navigation.navigate('Screen6')}>
            Add New Address
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.Box}>
          <View style={styles.Head}>
            <View style={styles.Name}>
              <Text style={styles.name}>Sagarika Mohanty</Text>
            </View>
            <View style={styles.Home}>
              <Text style={styles.home}>Home</Text>
            </View>
          </View>
          <View style={styles.address}>
            <Text style={styles.nadan}>Nandan Vihar, Patia, Bhubaneswar</Text>
            <Text style={styles.nadan}>Odisha - 751024</Text>
          </View>
          <Text style={styles.number}>+91 7896541237</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  address: {
    marginTop: 8,
    marginLeft: 10,
  },
  number: {
    color: '#000000',
    fontSize: 11,
    marginTop: 8,
    marginLeft: 10,
  },
  nadan: {
    color: '#000000',
    fontSize: 11,
  },
  name: {
    color: '#000000',
    fontSize: 13,
  },
  Name: {
    marginLeft: 10,
    marginTop: 8,
  },
  Home: {
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.12,
    height: Dimensions.get('window').width * 0.05,
    marginLeft: 20,
    marginTop: 8,
    borderRadius: 4,
    alignItems: 'center',
    borderColor: '#E1E1E1',
    backgroundColor: '#C4C4C4',
  },
  home: {
    fontSize: 11,
    color: '#000000',
  },
  Head: {
    flexDirection: 'row',
  },
  Box: {
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').width * 0.28,
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 8,
    borderColor: '#E1E1E1',
  },
  Add: {
    marginTop: 15,
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').width * 0.09,
    alignItems: 'center',
    borderRadius: 8,
    borderColor: '#009987',
    justifyContent: 'center',
  },
  Address: {
    fontSize: 14,
    color: '#009987',
  },
  container: {
    backgroundColor: '#FFFEFF',
    flex: 1,
  },
  heading: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 30,
  },
  SelectAddress: {
    marginTop: 20,
    marginLeft: 8,
    color: '#000000',
  },
});

export default Screen5;
