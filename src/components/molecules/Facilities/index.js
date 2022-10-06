import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcMart, IcMouseque, IcParkir, IcResto, IcToilet} from '../../../assets';

const Facility = () => {
  return (
    <View style={styles.contentIc}>
      <View style={styles.border}>
        <IcParkir />
      </View>
      <View style={styles.border}>
        <IcMouseque />
      </View>
      <View style={styles.border}>
        <IcToilet />
      </View>
      <View style={styles.border}>
        <IcResto />
      </View>
      <View style={styles.border}>
        <IcMart />
      </View>
    </View>
  );
};

export default Facility;

const styles = StyleSheet.create({
  contentIc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  border: {
    borderRadius: 10,
    width: 48,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3E3E3',
  },
});
