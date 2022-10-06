import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ProfileDummy} from '../../../assets';
const HomeWelcome = () => {
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.desc}>Hi, Thamasyer</Text>
        <Text style={styles.appName}>Mau kemana hari ini ?</Text>
      </View>
      <Image source={ProfileDummy} style={styles.profile} />
    </View>
  );
};

export default HomeWelcome;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
  },
  appName: {fontSize: 20, fontFamily: 'Raleway-Bold', color: '#020202'},
  desc: {fontSize: 16, fontFamily: 'Raleway-Regular', color: '#8D92A3'},
  profile: {
    width: 50,
  },
});
