import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LeftIcon from 'react-native-vector-icons/AntDesign';
import RightIcon from 'react-native-vector-icons/AntDesign';
import CopyIcon from 'react-native-vector-icons/FontAwesome5';
import DotIcon from 'react-native-vector-icons/Entypo';

const Notification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{height: Dimensions.get('screen').height * 0.05}}></View>

      <TouchableOpacity
        style={styles.firstrow}
        onPress={() => {
          navigation.goBack();
        }}>
        <LeftIcon name="left" size={20} color="#666" style={styles.leftIcon} />
      </TouchableOpacity>

      <ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity>
            <View style={styles.firstNotificationDiv}>
              <View style={{marginRight: 7, padding: 5}}>
                <Image source={require('../Assets/Image/E.png')} size={12} />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Mulish',
                    fontWeight: '500',
                  }}>
                  Your Appointment is Booked at 9.30pm on 26th Apr
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Mulish',
                      fontWeight: '500',
                    }}>
                    1hr ago
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.firstNotificationDiv}>
              <View style={{marginRight: 7, padding: 5}}>
                <Image source={require('../Assets/Image/E.png')} size={12} />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Mulish',
                    fontWeight: '500',
                  }}>
                  Your Appointment is Booked at 9.30pm on 26th Apr
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Mulish',
                      fontWeight: '500',
                    }}>
                    1hr ago
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.firstNotificationDiv}>
              <View style={{marginRight: 7, padding: 5}}>
                <Image source={require('../Assets/Image/E.png')} size={12} />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Mulish',
                    fontWeight: '500',
                  }}>
                  Your Appointment is Booked at 9.30pm on 26th Apr
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Mulish',
                      fontWeight: '500',
                    }}>
                    1hr ago
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.firstNotificationDiv}>
              <View style={{marginRight: 7, padding: 5}}>
                <Image source={require('../Assets/Image/E.png')} size={12} />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Mulish',
                    fontWeight: '500',
                  }}>
                  Your Appointment is Booked at 9.30pm on 26th Apr
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Mulish',
                      fontWeight: '500',
                    }}>
                    1hr ago
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.firstNotificationDiv}>
              <View style={{marginRight: 7, padding: 5}}>
                <Image source={require('../Assets/Image/E.png')} size={12} />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Mulish',
                    fontWeight: '500',
                  }}>
                  Your Appointment is Booked at 9.30pm on 26th Apr
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Mulish',
                      fontWeight: '500',
                    }}>
                    1hr ago
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.firstNotificationDiv}>
              <View style={{marginRight: 7, padding: 5}}>
                <Image source={require('../Assets/Image/E.png')} size={12} />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Mulish',
                    fontWeight: '500',
                  }}>
                  Your Appointment is Booked at 9.30pm on 26th Apr
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Mulish',
                      fontWeight: '500',
                    }}>
                    1hr ago
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.firstNotificationDiv}>
              <View style={{marginRight: 7, padding: 5}}>
                <Image source={require('../Assets/Image/E.png')} size={12} />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Mulish',
                    fontWeight: '500',
                  }}>
                  Your Appointment is Booked at 9.30pm on 26th Apr
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Mulish',
                      fontWeight: '500',
                    }}>
                    1hr ago
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.firstNotificationDiv}>
              <View style={{marginRight: 7, padding: 5}}>
                <Image source={require('../Assets/Image/E.png')} size={12} />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Mulish',
                    fontWeight: '500',
                  }}>
                  Your Appointment is Booked at 9.30pm on 26th Apr
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Mulish',
                      fontWeight: '500',
                    }}>
                    1hr ago
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.firstNotificationDiv}>
              <View style={{marginRight: 7, padding: 5}}>
                <Image source={require('../Assets/Image/E.png')} size={12} />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Mulish',
                    fontWeight: '500',
                  }}>
                  Your Appointment is Booked at 9.30pm on 26th Apr
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Mulish',
                      fontWeight: '500',
                    }}>
                    1hr ago
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  firstrow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  leftIcon: {
    backgroundColor: '#EFF3FA',
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 30,
  },
  firstNotificationDiv: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //alignItems: 'center',
    // backgroundColor: '#E5E5E5',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    paddingHorizontal: 12,
    paddingVertical: 30,
    marginVertical: 10,
    borderRadius: 5,
  },
});
export default Notification;
