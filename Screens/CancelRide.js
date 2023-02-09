import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LeftIcon from 'react-native-vector-icons/AntDesign';

export default function CancelRide({navigation}) {
  const [checked, setChecked] = useState('other');

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* first row */}
        <View style={styles.firstrow}>
          <View style={styles.firstrowLeftDiv}>
            <TouchableOpacity>
              <LeftIcon
                name="left"
                size={20}
                color="#666"
                style={styles.leftIcon}
                onPress={() => {
                  navigation.navigate('CancelRide');
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{height: Dimensions.get('screen').height * 0.02}}></View>

        <View>
          <Text style={styles.whyDoYouCancelOrderTxt}>
            Why do you want to cancel this order?
          </Text>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
          }}
          onPress={() => setChecked('reason1')}>
          <View>
            <Text
              style={styles.callNotReceivedTxt}
              onPress={() => setChecked('reason1')}>
              Call not received by rider
            </Text>
          </View>
          <TouchableOpacity
            style={styles.silverCircle}
            onPress={() => setChecked('reason1')}>
            <View style={checked == 'reason1' ? styles.greenCircle : ''}></View>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
          }}
          onPress={() => setChecked('reason2')}>
          <View>
            <Text
              style={styles.callNotReceivedTxt}
              onPress={() => setChecked('reason2')}>
              Too much time taken to reach
            </Text>
          </View>
          <TouchableOpacity
            style={styles.silverCircle}
            onPress={() => setChecked('reason2')}>
            <View style={checked == 'reason2' ? styles.greenCircle : ''}></View>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
          }}
          onPress={() => setChecked('reason3')}>
          <View>
            <Text
              style={styles.callNotReceivedTxt}
              onPress={() => setChecked('reason3')}>
              Rider ask for cancel
            </Text>
          </View>
          <TouchableOpacity
            style={styles.silverCircle}
            onPress={() => setChecked('reason3')}>
            <View style={checked == 'reason3' ? styles.greenCircle : ''}></View>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
          }}
          onPress={() => setChecked('reason4')}>
          <View>
            <Text
              style={styles.callNotReceivedTxt}
              onPress={() => setChecked('reason4')}>
              Asking Extra Money
            </Text>
          </View>
          <TouchableOpacity
            style={styles.silverCircle}
            onPress={() => setChecked('reason4')}>
            <View style={checked == 'reason4' ? styles.greenCircle : ''}></View>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
          }}
          onPress={() => setChecked('other')}>
          <View>
            <Text
              style={styles.callNotReceivedTxt}
              onPress={() => setChecked('other')}>
              Other
            </Text>
          </View>
          <TouchableOpacity
            style={styles.silverCircle}
            onPress={() => setChecked('other')}>
            <View style={checked == 'other' ? styles.greenCircle : ''}></View>
          </TouchableOpacity>
        </TouchableOpacity>

        <View style={styles.giveFeedbackTxtDiv}>
          <Text style={styles.giveFeedbackTxt}>
            Please Write Reason For Cancellation
          </Text>
        </View>
        <View>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.writeFeedbackDiv}
            placeholder="Write Your Problem"
          />
        </View>

        {/* button */}
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => navigation.navigate('BottomNavigator')}>
          <LinearGradient
            colors={['#00E0C5', '#009987']}
            style={styles.takeFreeTrialBtnDiv}>
            <View style={styles.takeFreeTrialBtn}>
              <Text style={styles.takeFreeTrialBtnTxt}>Cancel</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  //  first row
  firstrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 40,
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
    // marginVertical: 15,
    borderRadius: 30,
  },
  whyDoYouCancelOrderTxt: {
    color: '#030919',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Mulish',
    marginBottom: 30,
  },
  callNotReceivedTxt: {
    color: '#555B6A',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Mulish',
    marginBottom: 20,
  },
  silverCircle: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenCircle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#009987',
  },
  giveFeedbackTxtDiv: {
    // marginTop: 30,
    marginBottom: 10,
    justifyContent: 'flex-start',
  },
  giveFeedbackTxt: {
    color: '#030919',
    fontSize: 16,
    fontWeight: '700',
  },
  writeFeedbackDiv: {
    marginBottom: 10,
    width: Dimensions.get('window').width * 0.87,
    height: Dimensions.get('window').height * 0.2,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 10,
    padding: 5,
    textAlignVertical: 'top',
  },
  // button
  takeFreeTrialBtnDiv: {
    width: Dimensions.get('screen').width * 0.85,
    padding: 5,
    marginVertical: 40,
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
