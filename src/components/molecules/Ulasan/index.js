import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ProfileUlasan, ProfileDummy, PersonDetail} from '../../../assets';
import {Button, Gap} from '../../atoms';
import ButtonDetail from '../../atoms/ButtonDetail';

const UlasanDetail = () => {
  return (
    <View>
      <View style={styles.content}>
        <Text style={styles.component}>Ulasan</Text>
      </View>
      <View style={styles.contentPerson}>
        <Image style={styles.imageProfile} source={ProfileUlasan} />
        <Gap width={10} />
        <View style={{flex: 1}}>
          <Text style={styles.nameProfile}>Lailatul Fitriyah</Text>
          <View>
            <Text style={styles.message}>Bagus banget buat foto-foto</Text>
          </View>
        </View>
      </View>
      <View style={styles.contentPerson}>
        <Image style={styles.imageProfile} source={ProfileUlasan} />
        <Gap width={10} />
        <View style={{flex: 1}}>
          <Text style={styles.nameProfile}>Lailatul Fitriyah</Text>
          <View>
            <Text style={styles.message}>Bagus banget buat foto-foto</Text>
          </View>
        </View>
      </View>
      <View style={styles.contentPerson}>
        <Image style={styles.imageProfile} source={ProfileUlasan} />
        <Gap width={10} />
        <View style={{flex: 1}}>
          <Text style={styles.nameProfile}>Lailatul Fitriyah</Text>
          <View>
            <Text style={styles.message}>Bagus banget buat foto-foto</Text>
          </View>
        </View>
      </View>
      {/* <View style={styles.UlasanLast}>
        <View>
          <Text style={styles.ulasanTotal}>3000</Text>
          <Text>/ Person</Text>
        </View>
        <ButtonDetail text="Book Now" />
      </View> */}
    </View>
  );
};

export default UlasanDetail;

const styles = StyleSheet.create({
  content: {
    marginVertical: 10,
  },
  component: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 16,
    color: '#1D2132',
    fontStyle: 'normal',
  },
  imageProfile: {
    width: 40,
    height: 40,
  },
  contentPerson: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  nameProfile: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 14,
    color: '#1D2132',
  },

  message: {
    fontFamily: 'Raleway-Regular',
    fontSize: 12,
  },
  // UlasanLast: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   paddingHorizontal: 5,
  // },
  // ulasanTotal: {
  //   fontFamily: 'Raleway-Bold',
  //   fontSize: 20,
  //   color: '#1D2132',
  //   fontStyle: 'normal',
  // },
});
