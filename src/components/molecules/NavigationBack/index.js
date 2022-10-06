import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcBack2} from '../../../assets';

const NavigationBack = ({navigation}) => {
  return (
    <View style={styles.navigation}>
      <View style={styles.icon}>
        <TouchableOpacity >
          <IcBack2 />
        </TouchableOpacity>
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>Pesan Tiket</Text>
        <Text style={styles.desc}>Nikmati liburan kamu !</Text>
      </View>
    </View>
  );
};

export default NavigationBack;

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
    marginTop: 15,
  },
  text: {
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Raleway-Regular',
  },
  desc: {
    fontSize: 12,
    color: '#8D92A3',
    fontFamily: 'Raleway-Regular',
  },
});
