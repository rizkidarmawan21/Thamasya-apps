import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ProfileDummy, TourDummy1} from '../../../assets';

const TourCard = ({images, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={images} />
        <Text style={styles.text}>Kota Lama</Text>
        <Text style={styles.contentText}>10k Kunjungan</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TourCard;
const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 210,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 16,
    borderColor: '#EAEAF0',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    overflow: 'hidden',
    marginStart: 8,
    marginEnd: 8,
    marginLeft: 8,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold',
    color: '#020202',
    textAlign: 'center',
    marginTop: 10,
  },
  contentText: {
    fontSize: 12,
    fontFamily: 'Raleway-Regular',
    color: '#8D92A3',
    // marginLeft: 0,
    textAlign: 'center',
    paddingVertical: 5,
  },
});
