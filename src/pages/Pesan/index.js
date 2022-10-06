import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import NavigationBack from '../../components/molecules/NavigationBack';
import {Button, Gap, TextInput} from '../../components';
import DateTimePicker from '@react-native-community/datetimepicker';

const PesanCheckOut = () => {
  const [date, setDate] = useState( new Date() );
  const [mode, setMode] = useState( 'date' );
  const [show, setShow] = useState( false );
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setText(currentDate.toString());

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + "-" + (tempDate.getMonth() + 1) + "-" + tempDate.getFullYear();
    setText(fDate);
    console.log(fDate);
  };

  const showMode = (currentMode) => {
    setShow( true );
    setMode( currentMode );
  };

  return (
    <View>
      <NavigationBack />
      <View style={styles.info}>
        <Text style={styles.desc}>
          Informasi yang anda berikan akan digunakan oleh pihak untuk
          menverifkasi. Harap periksa untuk memastikan data yang anda masukkan
          sudah benar
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Jadwal Kedatangan</Text>
        <View style={styles.frameDate}>
          <Text style={styles.tgl}>{text}</Text>
        </View>
        <Gap height={11} />
        <Button text={'Pilih Jadwal'} onPress={() => showMode('date')} />

        {show && (
          <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={mode}
          is24Hour={true}
          display='default'
          onChange={onChange}
          />          
        )}
      </View>
      <View style={styles.content2}>
        <Text style={styles.title2}>Jumlah Pengunjung</Text>
        <TextInput placeholder={'Jumlah Pengunjung'} style={styles.TxtInput} />
        <Gap height={11} />
        <Button text={'Cek Ketersediaan'} />
      </View>
      <View style={styles.content3}>
        <Button text={'Pesan sekarang'} />
      </View>
    </View>
  );
};

export default PesanCheckOut;

const styles = StyleSheet.create({
  info: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  frameDate: {
    backgroundColor: '#E2E2E2',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  tgl: {
    fontSize: 17,
    fontFamily: 'Raleway-Semibold',
    color: '#8D92A3',
  },
  desc: {
    fontSize: 12,
    color: '#8D92A3',
    fontFamily: 'Raleway-Regular',
  },
  content: {
    marginHorizontal: 30,
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginTop: 30,
    borderColor: '#8D92A3',
    borderWidth: 1,
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Raleway-Regular',
    color: '#1D2132',
    fontWeight: '700',
    marginBottom: 20,
    lineHeight: 30,
  },
  content2: {
    marginHorizontal: 30,
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginTop: 30,
    borderColor: '#8D92A3',
    borderWidth: 1,
    borderRadius: 15,
  },
  title2: {
    fontSize: 20,
    fontFamily: 'Raleway-Regular',
    color: '#1D2132',
    fontWeight: '700',
    lineHeight: 30,
  },
  btn1: {
    marginTop: 20,
    backgroundColor: '#F2F2F2',
  },
  content3: {
    marginHorizontal: 30,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  TxtInput: {
    borderWidth: 1,
    backgroundColor: '#E2E2E2',
    borderColor: '#DEDEDE',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
  },
});
