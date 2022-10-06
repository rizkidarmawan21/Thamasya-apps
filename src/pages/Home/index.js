import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Gap, HomeTabSection, HomeWelcome, TourCard} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {TourDummy1, TourDummy2, TourDummy3} from '../../assets';
import SearchBarHome from '../../components/atoms/SearchIcon';
import TextHome2 from '../../components/atoms/TextHome2';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HomeWelcome />
      <View style={{marginHorizontal: 12, marginVertical: 20}}>
        <SearchBarHome placeholder="Cari destinasimu ?" />
      </View>
      <Gap width={100} />
      <TextHome2 />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.TourCardContainer}>
          <Gap width={5} />
          <TourCard images={TourDummy1} onPress={() => navigation.navigate('TourDetail') }/>
          <TourCard images={TourDummy2} onPress={() => navigation.navigate('TourDetail') } />
          <TourCard images={TourDummy3} onPress={() => navigation.navigate('TourDetail') } />
          <TourCard images={TourDummy1} onPress={() => navigation.navigate('TourDetail') } />
          <Gap width={5} />
        </View>
      </ScrollView>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabContainer: {
    flex: 1.3,
    backgroundColor: 'white',
  },
  TourCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: 0,
    height: 0,
  },
  contentSearch: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginBottom: 25,
    marginTop: 25,
  },
});
