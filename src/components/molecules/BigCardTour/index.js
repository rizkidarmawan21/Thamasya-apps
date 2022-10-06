import {TouchableOpacity, View, Text, Image} from 'react-native';
import React from 'react';
import {TourDummy, Star} from '../../../assets';
const BigCardTour = () => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View
        style={{
          marginHorizontal: 30,
          alignItems: 'center',
          marginBottom: 30,
        }}>
        <View>
          <Image
            style={{width: 420, height: 350, borderRadius: 10}}
            source={TourDummy}
          />
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                marginTop: 20,
                fontSize: 16,
                fontFamily: 'Raleway-Bold',
                color: '#1D2132',
              }}>
              Kota Lama Semarang
            </Text>

            <Text
              style={{
                fontSize: 14,
                marginTop: 20,
                fontFamily: 'Raleway-Bold',
                color: '#1D2132',
              }}>
              <Star /> 4.9
            </Text>
          </View>
          <Text
            style={{
              marginTop: 6,
              fontSize: 12,
              fontFamily: 'Raleway-Regular',
              color: '#8A899C',
            }}>
            Buka 24 Jam
          </Text>
          <Text
            style={{
              marginTop: 6,
              fontSize: 14,
              fontFamily: 'Raleway-Regular',
              color: '#1D2132',
            }}>
            <Text style={{fontFamily: 'Raleway-Bold'}}>20K</Text> / org
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BigCardTour;
