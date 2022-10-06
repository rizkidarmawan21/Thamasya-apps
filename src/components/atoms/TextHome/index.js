import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const TextHome = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.component}>Paling dekat kamu</Text>
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.componentLainnya}>Lainnya</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextHome;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  component: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 16,
    color: '#1D2132',
    fontStyle: 'normal',
  },
  componentLainnya: {
    fontFamily: 'Raleway-Regular',
    fontSize: 14,
    color: '#44CFCB',
    fontStyle: 'normal',
    textDecorationLine: 'underline',
  },
});
