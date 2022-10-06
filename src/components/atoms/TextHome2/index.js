import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TextHome2 = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.component}>Paling Populer</Text>
    </View>
  );
};

export default TextHome2;

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
});
