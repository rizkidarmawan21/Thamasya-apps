import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  ProfileDummy,
  ProfileDark,
  TicketDark,
  About,
  Calling,
  Shield,
} from '../../../assets';
import ListMenu from './../ListMenu/index';

const Profile = () => {
  return (
    <View>
      <View style={styles.profileContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Image source={ProfileDummy} style={styles.profile} />
          <View style={{marginLeft: 10}}>
            <Text style={styles.appName}>Rizki Darmawan</Text>
            <Text style={styles.desc}>Semarang, Indonesia</Text>
            <TouchableOpacity>
              <Text style={styles.tampil}>Tampilkan profil</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginLeft: 75}}>
          <Text
            style={{
              fontFamily: 'Raleway-Bold',
              fontSize: 10,
              backgroundColor: '#44CFCB',
              paddingHorizontal: 23,
              paddingVertical: 3,
              borderRadius: 100,
              color: '#fff',
            }}>
            Beginer
          </Text>
        </View>
      </View>

      <ListMenu text="Informasi Pribadi" icon={<ProfileDark />} />
      <ListMenu text="Tiket Saya" icon={<TicketDark />} />
      <ListMenu text="Kontak dan Bantuan" icon={<Calling />} />
      <ListMenu text="Tentang Aplikasi" icon={<About />} />
      <ListMenu text="Kebijakan Privasi" icon={<Shield />} />
      <TouchableOpacity>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingBottom: 24,
    alignItems: 'center',
  },
  appName: {fontSize: 18, fontFamily: 'Raleway-Bold', color: '#020202'},
  desc: {fontSize: 12, fontFamily: 'Raleway-Regular', color: '#8D92A3'},
  profile: {
    width: 50,
  },
  tampil: {
    fontSize: 12,
    fontFamily: 'Raleway-Regular',
    color: '#020202',
    textDecorationLine: 'underline',
  },

  logout: {
    marginHorizontal: 25,
    marginTop: 40,
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold',
    color: '#020202',
    textDecorationLine: 'underline',
  },
});
