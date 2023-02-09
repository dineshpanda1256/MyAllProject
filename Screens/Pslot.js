import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
//import RNPickerSelect from 'react-native-picker-select';
import ViewNativeComponent from 'react-native/Libraries/Components/View/ViewNativeComponent';
import LinearGradient from 'react-native-linear-gradient';
import LeftIcon from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('screen');
export default function Appointment() {
  const [selectedDate, setSelectedDate] = useState({
    date: '14',
    day: 'Tue',
  });
  const [selectedTime, setSelectedTime] = useState({
    time: '12:30 PM',
  });

  const navigation = useNavigation();
  const dateday = [
    {
      date: 13,
      day: 'Mon',
    },
    {
      date: 14,
      day: 'Tue',
    },
    {
      date: 15,
      day: 'Wed',
    },
    {
      date: 16,
      day: 'Thur',
    },
    {
      date: 17,
      day: 'Fri',
    },
  ];

  //
  // var getDaysArray = function (year, month) {
  //     var monthIndex = month - 1; // 0..11 instead of 1..12
  //     var names = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  //     var date = new Date(year, monthIndex, 1);
  //     var result = [];
  //     while (date.getMonth() == monthIndex) {
  //         result.push({ date: date.getDate(), day: names[date.getDay()] });
  //         date.setDate(date.getDate() + 1);
  //     }
  //     return result;
  // }

  // console.log(getDaysArray(2022, 5));
  //

  const hours = [];
  Array.from(
    {
      length: 48,
    },
    (_, hour) => {
      if (hour >= 18 && hour <= 29) {
        hours.push(
          moment({
            hour: Math.floor(hour / 2),
            minutes: hour % 2 === 0 ? 0 : 30,
          }).format('hh:mm A'),
        );
      }
    },
  );

  const isDateIsActive = list => {
    return selectedDate.date == list.date && selectedDate.day == list.day;
  };

  const isTimeIsActive = list => {
    return selectedTime.time == list;
  };

  return (
    // start MainView
    <View style={styles.appointmentContainer}>
      <ScrollView>
        {/* backbutton start */}
        <View
          style={{
            marginVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <TouchableOpacity>
            <LeftIcon
              name="left"
              size={20}
              color="#666"
              style={styles.leftIcon}
              onPress={() => {
                navigation.navigate('Porderdetailes');
              }}
            />
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold', marginLeft: 8}}></Text>
        </View>
        {/* backbuttonEnd */}
        {/* monthdetailsStart */}

        <View style={styles.monthDetails}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Mulish',
              letterSpacing: 0.3,
              fontWeight: '500',
              color: '#222B45',
              marginLeft: 10,
            }}>
            July,2020
          </Text>
          <Ionicons
            name="caret-down-outline"
            size={25}
            color="#222B45"
            style={{marginLeft: 10}}
          />
          {/* <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Football', value: 'football' },
                            { label: 'Baseball', value: 'baseball' },
                            { label: 'Hockey', value: 'hockey' },
                        ]}
                    /> */}
        </View>
        {/* monthdetailsEnd */}
        {/* dateday start */}

        <View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {dateday.map((list, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedDate({
                      date: list.date,
                      day: list.day,
                    });
                  }}
                  style={[
                    styles.datedayContainer,
                    {
                      backgroundColor: isDateIsActive(list)
                        ? '#009987'
                        : 'white',
                    },
                  ]}
                  key={index}>
                  <View>
                    <Text
                      style={{
                        fontSize: 24,
                        fontFamily: 'Mulish',
                        color: isDateIsActive(list) ? 'white' : '#6B779A',
                      }}>
                      {list.date}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'Mulish',
                        letterSpacing: 0.2,
                        color: isDateIsActive(list) ? 'white' : '#6B779A',
                      }}>
                      {list.day}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
            {/*  */}
          </ScrollView>
        </View>
        {/* dateday end */}
        {/* timefield start */}
        <View style={{marginHorizontal: 20, marginVertical: 30, flex: 1}}>
          <Text
            style={{
              fontFamily: 'Mulish',
              fontSize: 18,
              letterSpacing: 0.3,
              lineHeight: 22.59,
              fontWeight: '500',
              color: '#222B45',
            }}>
            Available Time
          </Text>
        </View>
        {/* timefield end */}

        <View style={{justifyContent: 'center'}}>
          <FlatList
            numColumns={3}
            data={hours}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedTime({
                      time: item,
                    });
                  }}
                  style={[
                    styles.timeField,
                    {
                      backgroundColor: isTimeIsActive(item)
                        ? '#009987'
                        : 'white',
                    },
                  ]}>
                  <View>
                    <Text
                      style={{
                        color: isTimeIsActive(item) ? 'white' : '#6B779A',
                        fontSize: 12,
                      }}>
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{marginHorizontal: 20, marginBottom: 5, marginTop: 20}}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Mulish',
              letterSpacing: 0.23,
              lineHeight: 17.57,
              fontWeight: '400',
              color: '#6B779A',
            }}>
            Write your problem
          </Text>
        </View>
        <View>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.writeProblemDiv}
            placeholder="Write your problem"
          />
        </View>

        {/* button */}
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => navigation.navigate('PAddAddress')}>
          <LinearGradient
            colors={['#00E0C5', '#009987']}
            style={styles.proceedToPayBtnDiv}>
            <View style={styles.proceedToPayBtn}>
              <Text style={styles.proceedToPayBtnTxt}>Proceed To Pay</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
    //end MainView
  );
}
const styles = StyleSheet.create({
  appointmentContainer: {
    flex: 1,
  },
  firstrowLeftDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftIcon: {
    backgroundColor: '#EFF3FA',
    padding: 10,
    marginRight: 20,
    marginTop: 15,
    borderRadius: 30,
  },
  appointmentContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  monthDetails: {
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  datedayContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 12,
    marginVertical: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  writeProblemDiv: {
    marginBottom: 10,
    marginLeft: 20,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.2,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 10,
    padding: 5,
    textAlignVertical: 'top',
    backgroundColor: 'rgba(107, 119, 154, 0.16)',
  },
  appointmentBtn: {
    backgroundColor: '#00E0C5',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  timeField: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  datedaytextContainer: {},
  // button
  proceedToPayBtnDiv: {
    width: Dimensions.get('screen').width * 0.85,
    padding: 5,
    marginBottom: 10,
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
  proceedToPayBtn: {
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  proceedToPayBtnTxt: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
    color: '#fff',
    // textShadowOffset: 5,
  },
});
