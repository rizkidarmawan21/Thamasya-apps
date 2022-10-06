import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import { TourDummy1, TourDummy2, TourDummy3 } from '../../../assets';
import TextHome from '../../atoms/TextHome';
import TourListCard from '../TourListCard';

const HomeTabSection = () => {
  return (
    <View style={{paddingTop: 8}}>
      <TextHome />
      <ScrollView vertical>
        <TourListCard image={TourDummy1} />
        <TourListCard image={TourDummy2} />
        <TourListCard image={TourDummy3} />
        <TourListCard image={TourDummy1} />
      </ScrollView>
    </View>
  );
};

export default HomeTabSection;
const styles = StyleSheet.create({
});
