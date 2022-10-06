import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {TourDummy1} from '../../../assets';
import Rating from '../Rating';
import ButtonCard from '../../atoms/ButtonCard';

const TourListCard = ({image}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}>
      <Image
        source={image}
        style={styles.image}
      />
      <View style={styles.contentText}>
        <Text
          style={styles.textTitle}>
          Gedong Songo
        </Text>
        <Text
          style={styles.textLocation}>
          Bandungan, Kab. Ungaran
        </Text>
        <View style={styles.btnBeli}>
          <ButtonCard text="$100" />
        </View>
      </View>
      <Rating />
    </TouchableOpacity>
  );
};

export default TourListCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 16,
    borderColor: '#EAEAF0',
    marginBottom: 10,
    marginStart: 16,
    marginEnd: 16,
  },
  image: {
    overflow: 'hidden',
    marginRight: 16,
  },
  contentText: {
    flex: 1
  },
  textTitle: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 16,
    color: '#1D2132',
    marginBottom: 5,
  },
  textLocation: {
    fontFamily: 'Raleway-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: '#8A899C',
    marginBottom: 10,
  },
  btnBeli: {
    width: 65,
    height: 40,
  },
});
