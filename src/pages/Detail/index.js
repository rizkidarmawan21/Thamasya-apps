import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  DetailDummy,
  TourDummy,
  IcBack,
  IcLocation,
  IcLove,
  Gradasi,
} from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Gap} from '../../components';
import Rating from '../../components/molecules/Rating';
import Facility from '../../components/molecules/Facilities';
import TextDesc from '../../components/atoms/TextDesc';
import UlasanDetail from '../../components/molecules/Ulasan';
import ButtonDetail from '../../components/atoms/ButtonDetail';

const images = [DetailDummy, TourDummy, DetailDummy, DetailDummy];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const TourDetail = ({navigation}) => {
  const [imgActive, setImageActive] = useState(false);

  onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImageActive(slide);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrap}>
          <View style={styles.icon}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <IcBack />
            </TouchableOpacity>
            <IcLove />
          </View>
          <ScrollView
            onScroll={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}>
            {images.map((image, index) => (
              <ImageBackground
                key={index}
                resizeMode="cover"
                style={styles.wrap}
                source={image}>
                <View style={styles.opacity}>
                  <Gradasi />
                </View>
              </ImageBackground>
            ))}
          </ScrollView>
          <View style={styles.wrapDot}>
            {images.map((dot, index2) => (
              <Text
                key={index2}
                style={imgActive == index2 ? styles.dotActive : styles.dot}>
                ⬤
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.wrap2}>
          <View style={styles.content1}>
            <Text style={styles.title}>Kota Lama</Text>
            <Rating />
          </View>
          <View style={styles.content2}>
            <IcLocation />
            <Gap width={10} />
            <Text style={styles.location}>Semarang, Indonesia</Text>
            <Gap width={10} />
            <Text style={styles.ulasan}>-</Text>
            <Gap width={10} />
            <Text style={styles.ulasan}>20 Ulasan</Text>
          </View>
          <Facility />
          <TextDesc />
          <UlasanDetail />
        </View>
      </ScrollView>
      <View style={styles.contentPrice}>
        <View>
          <Text style={styles.price}>3,000</Text>
          <Text>/ Person</Text>
        </View>
        <ButtonDetail text="Pesan Tiket" onPress={() => navigation.navigate('PesanCheckOut')} />
      </View>
    </SafeAreaView>
  );
};

export default TourDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.5,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: '#44CFCB',
  },
  dot: {
    margin: 3,
    color: 'white',
  },
  cover: {
    height: 416.59,
  },
  icon: {
    position: 'absolute',
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: WIDTH,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  wrap2: {
    marginHorizontal: 25,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Raleway-Bold',
    color: '#44CFCB',
    letterSpacing: 1,
  },
  content1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content2: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#44CFCB',
    marginVertical: 15,
  },
  location: {
    fontSize: 14,
    fontFamily: 'Raleway-Regular',
    color: '#CBCBCB',
  },
  ulasan: {
    fontSize: 14,
    fontFamily: 'Raleway-Regular',
    color: '#CBCBCB',
  },
  opacity: {
    position: 'absolute',
    bottom: 0,
  },

  contentPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  price: {
    fontFamily: 'Raleway-Bold',
    fontSize: 25,
    color: '#1D2132',
    fontStyle: 'normal',
  },
});
