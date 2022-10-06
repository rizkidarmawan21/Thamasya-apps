import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TextDesc = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.component}>Deskripsi</Text>
      <Text style={styles.component2}>
        suatu kawasan di Semarang yang menjadi pusat perdagangan pada abad
        19-20. Pada masa itu, untuk mengamankan warga dan wilayahnya, kawasan
        itu dibangun benteng, yang dinamai benteng Vijfhoek. Untuk mempercepat
        jalur perhubungan antar ketiga pintu gerbang dibenteng itu maka dibuat
        jalan-jalan perhubungan, dengan jalan utamanya dinamai Heerenstraat.
        Saat ini bernama Jl. Letjen Soeprapto. Salah satu lokasi pintu benteng
        yang ada sampai saat ini adalah Jembatan Berok, yang disebut De Zuider
        Por. Kata 'Berok' sendiri merupakan hasil pelafalan masyarakat Pribumi
        yang kesulitan melafalkan kata 'Burg' dalam Bahasa Belanda.
      </Text>
    </View>
  );
};

export default TextDesc;

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
    marginBottom: 5,
  },
  component: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 16,
    color: '#1D2132',
    fontStyle: 'normal',
  },
  component2: {
    fontFamily: 'Raleway-Regular',
    fontSize: 14,
    color: '#9A9A9A',
    fontStyle: 'normal',
    marginTop: 16,
    textAlign: 'left',
  },
});
