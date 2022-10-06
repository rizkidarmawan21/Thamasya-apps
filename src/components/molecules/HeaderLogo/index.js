import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ProfileDummy} from '../../../assets';

const HeaderLogo = () => {
  return (
    <View style={styles.profileContainer}>
      <Image source={ProfileDummy} style={styles.profile} />
    </View>
  );
};

export default HeaderLogo;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  profile: {
    width: 50,
  },
});
