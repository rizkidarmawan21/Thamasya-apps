import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonCard = ({
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

export default ButtonCard;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    borderRadius: 100,
  }),
  text: color => ({
    padding: 3,
    fontSize: 14,
    fontFamily: 'Raleway-SemiBold',
    color: color,
    textAlign: 'center',
  }),
});
