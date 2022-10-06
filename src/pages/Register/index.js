import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput, Gap, Button} from '../../components';
import {MinLogo, Google} from '../../assets';

const Register = ({navigation}) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      {/* <Text>Count: {count}</Text> */}
      <View style={styles.header}>
        <MinLogo />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.titleHeader}>
            Daftar dan mulai{'\n'}berThamasya
          </Text>
          <Text
            onPress={() => navigation.navigate('Login')}
            style={styles.daftar}>
            Masuk ?
          </Text>
        </View>
        <Gap height={60} />
        <TextInput label="Username" placeholder="" />
        <Gap height={30} />
        <TextInput label="Email Address" placeholder="" />
        <Gap height={30} />
        <TextInput label="Password" placeholder="" />
        <Gap height={24} />
        <Button text="Daftar" onPress={() => navigation.replace('MainApp')} />
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Raleway-Regular',
            marginVertical: 20,
            fontSize: 15,
          }}>
          atau daftar dengan
        </Text>
        <Button text="Google" icon={<Google />} color="#7D8797" />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 30,
    marginTop: 50,
  },
  titleHeader: {
    fontFamily: 'Raleway-Bold',
    color: '#44CFCB',
    fontSize: 20,
    marginTop: 20,
  },

  daftar: {
    fontFamily: 'Raleway-Regular',
    color: '#7D8797',
    fontSize: 16,
    marginTop: 55,
    textDecorationLine: 'underline',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
