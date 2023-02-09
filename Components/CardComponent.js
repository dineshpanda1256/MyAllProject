import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('screen');

export default function CardComponent({data}) {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        style={styles.cardInnerContainer}
        onPress={() => navigation.navigate('profile')}>
        <View style={styles.cardImageContainer}>
          {data.isonline ? <View style={styles.cardOnlineLabel} /> : null}
          <Image
            source={data.image}
            style={{height: 100, width: 100, borderRadius: 50}}
            resizeMode={'contain'}
          />
        </View>

        <Text
          style={{fontWeight: 'bold', fontFamily: 'roboto', marginBottom: 3}}>
          {data.title}
        </Text>
        <Text style={{fontSize: 12}}>{data.specialist}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text >⭐️</Text>
          <Text style={{fontSize: 10, marginHorizontal: 2}}>{data.rating}</Text>
          <Text style={{fontSize: 10}}>{data.reviews}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {},
  cardImageContainer: {
    position: 'relative',
    marginTop: 10,
  },
  cardOnlineLabel: {
    height: 15,
    width: 15,
    backgroundColor: 'green',
    borderRadius: 50,
    position: 'absolute',
    top: 8,
    right: 5,
    zIndex: 1,
  },
  cardInnerContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
    width: width / 2.3,
    alignItems: 'center',
    justifyContent: 'center',
    //
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
