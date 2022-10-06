import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcStar} from '../../../assets';

const Rating = () => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.ratingText}>
        <IcStar />
      </View>
      <View>
        <Text
          style={{
            marginLeft: 4,
            color: '#1D2132',
            // fontFamily: 'Raleway-Bold',
          }}>
          4.5
        </Text>
      </View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  ratingContainer: {flexDirection: 'row', alignItems: 'center'},
  ratingText: {flexDirection: 'row'},
});
