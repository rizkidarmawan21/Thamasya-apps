import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonDetail = ({
  text,
  color = '#44CFCB',
  textColor = '#fff',
  onPress,
  icon = '',
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>
          {icon} {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonDetail;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 10,
    borderRadius: 50,
    width: 180,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  }),
  text: color => ({
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold',
    color: color,
    textAlign: 'center',
  }),
});
