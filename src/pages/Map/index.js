import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {DummyPinMap, TourDummy1, TourDummy2, TourDummy3} from '../../assets';

import {Gap, SearchBar, TourCard} from '../../components';

const Map = () => {
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

  const [marker,setMarker] = useState([
    {
      latitude: -6.9825198777060455,
      longitude: 110.40918470386526,
    }
  ])

  const [kategoriSeleksi, setKategoriSeleksi] = useState({
    nama: 'Wow',
  });
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        // style={styles.map}
        style={{flex: 1}}
        region={{
          latitude: -6.9825198777060455,
          longitude: 110.40918470386526,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        {/* {this.state.markers.map((marker, index) => ( */}
        <Marker
          coordinate={{
            latitude: -6.9825198777060455,
            longitude: 110.40918470386526,
          }}
          title="Kampus Udinus"
          description="Kampus elit parkiran medit"
          image={DummyPinMap}
        />
        <Marker
          coordinate={{
            latitude: -6.983685970566961,
            longitude: 110.41043461325124,
          }}
          title="Lawang Sewu"
          description="Lawang semu peninggalan belanda"
          image={DummyPinMap}
        />
        <Marker
          coordinate={{
            latitude: -6.984599356368688,
            longitude: 110.40874648723161,
          }}
          title="Museum Mandala"
          description="Museum dengan koleksi sejarah militer"
          image={DummyPinMap}
        />
        {/* ))} */}
      </MapView>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          padding: 23,
        }}>
        <SearchBar placeholder="Mau kemana hari ini ?" />

        {/* Categori section */}
        <View style={{marginVertical: 20}}>
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
                    kategoriSeleksi.nama == item.nama ? '#44CFCB' : '#DEDEDE',
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
        {/* end category  */}
      </View>
      <View style={{marginBottom: 20, position: 'absolute', bottom: 0}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Gap width={5} />
            <TourCard images={TourDummy1} />
            <TourCard images={TourDummy2} />
            <TourCard images={TourDummy3} />
            <TourCard images={TourDummy1} />
            <TourCard images={TourDummy2} />
            <TourCard images={TourDummy3} />
            <Gap width={5} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Map;
