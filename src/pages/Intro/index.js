import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Intro1, Intro2, Intro3, Gradasi} from '../../assets';

const slides = [
  {
    id: 1,
    image: Intro1,
    nameImage: 'Pantai Marina',
    colorNameImage: '#003C41',
    title: `Selamat Datang di${'\n'}Tamasya`,
    desc: `Anda bisa berwisata dimana saja${'\n'}dan kapan saja`,
  },
  {
    id: 2,
    image: Intro2,
    nameImage: 'Sampokong',
    colorNameImage: '#343434',
    title: `Wisata Semarangan`,
    desc: `Berbagai wisata yang ada di${'\n'}Kota dan Kabupaten Semarang`,
  },
  {
    id: 3,
    image: Intro3,
    nameImage: 'Kota Lama Semarang',
    colorNameImage: '#783940',
    title: `Langsung beli tiket`,
    desc: `Gak usah pusing mikir antrian tiket${'\n'}langsung beli tiket di Thamasya`,
  },
];

const Intro = ({navigation}) => {
  const [showIntro, setShowIntro] = useState(false);

  const buttonLabel = label => {
    return (
      <View style={{padding: 12}}>
        <Text
          style={{
            color: '#44CFCB',
            textAlign: 'center',
            fontFamily: 'Raleway-SemiBold',
          }}>
          {label}
        </Text>
      </View>
    );
  };

  if (!showIntro) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({item, index}) => {
          return (
            <View key={index} style={{flex: 1, backgroundColor: '#ffffff'}}>
              <ImageBackground
                resizeMode="cover"
                source={item.image}
                style={styles.image}>
                <View style={styles.gradasi}>
                  <Gradasi />
                </View>
                <Text
                  style={{
                    fontSize: 23,
                    fontFamily: 'Raleway-Bold',
                    color: '#003C41',
                    // color: `${item.colorNameImage}`,
                    position: 'absolute',
                    bottom: 50,
                    left: 30,
                  }}>
                  {item.nameImage}
                </Text>
              </ImageBackground>
              <View style={styles.containerContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
              </View>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: '#44CFCB',
          width: 20,
        }}
        renderNextButton={() => buttonLabel('Lanjut')}
        renderDoneButton={() => buttonLabel('Mulai')}
        // renderPrevButton={() => buttonLabel('Kembali')} / ora iso
        onDone={() => navigation.replace('Login')}
      />
    );
  }
};

export default Intro;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 530,
    resizeMode: 'cover',
    position: 'relative',
    // bottom: 0,
  },
  gradasi: {
    position: 'absolute',
    bottom: 0,
  },

  containerContent: {
    marginTop: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Raleway-Bold',
    lineHeight: 30,
    color: '#44CFCB',
  },
  desc: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Raleway-Regular',
    marginTop: 15,
    lineHeight: 20,
    //   color: '#44CFCB',
  },
});
