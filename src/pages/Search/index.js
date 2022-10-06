import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {HeaderLogo, BigCardTour, SearchIcon} from '../../components';

const Search = () => {
  const [kategori, setKategori] = useState([
    {
      nama: 'Wow',
    },
    {
      nama: 'Wahana',
    },
    {
      nama: 'Pantai',
    },
    {
      nama: 'Gunung',
    },
    {
      nama: 'Pedesaan',
    },
  ]);

  const [kategoriSeleksi, setKategoriSeleksi] = useState({
    nama: 'Wow',
  });

  return (
    <ScrollView>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <HeaderLogo />
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Raleway-Bold',
              color: '#1D2132',
            }}>
            Pilih Wisatamu
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
              fontFamily: 'Raleway-Regular',
              color: '#7C7C8C',
              lineHeight: 24,
            }}>
            Berbagai wisata di kota Semarang {'\n'} dan kabupaten Semarang
          </Text>
        </View>

        <View style={{marginHorizontal: 30, marginTop: 25}}>
          <SearchIcon placeholder="Cari destinasimu ?" />
        </View>

        {/* Categori section */}
        <View style={{marginHorizontal: 30, marginVertical: 25}}>
          <FlatList
            data={kategori}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  marginRight: 5,
                  backgroundColor:
                    kategoriSeleksi.nama == item.nama ? '#44CFCB' : '#F6F6F6',
                  paddingHorizontal: 30,
                  paddingVertical: 2,
                  borderRadius: 100,
                }}
                onPress={() => setKategoriSeleksi(item)}>
                <Text
                  style={{
                    color:
                      kategoriSeleksi.nama == item.nama ? '#fff' : '#8A899C',
                  }}>
                  {item.nama}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <BigCardTour />
        <BigCardTour />
        <BigCardTour />
      </View>
    </ScrollView>
  );
};

export default Search;
