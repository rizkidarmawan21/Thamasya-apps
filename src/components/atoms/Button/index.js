import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({
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

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8,
  }),
  text: color => ({
    fontSize: 17,
    fontFamily: 'Raleway-Semibold',
    color: color,
    textAlign: 'center',
  }),
});
