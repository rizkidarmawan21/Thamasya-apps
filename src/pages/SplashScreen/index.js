import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Intro');
    }, 2000);
  }),
    [];

  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#44CFCB',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
