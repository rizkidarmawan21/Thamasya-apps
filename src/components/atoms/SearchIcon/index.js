import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';
import {IcSearch, Search} from './../../../assets';
import Gap from '../Gap';

const SearchBarHome = ({label, placeholder, ...restProps}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.icon}>
          <Search />
        </Text>
        <TextInputRN
          style={styles.input}
          placeholder={placeholder}
          {...restProps}
        />
      </View>
      <Gap width={10} />
      <IcSearch />
    </View>
  );
};

export default SearchBarHome;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    marginBottom: 10,
    marginStart: 10,
    marginEnd: 20,
  },
  container: {
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Raleway-Regular',
    color: '#7D8797',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingLeft: 15,
    marginRight: 20,
    fontFamily: 'Raleway-Regular',
    fontSize: 16,
    color: '#7C7C8C',
    borderLeftWidth: 0.5,
    borderLeftColor: '#DEDEDE',
  },
  icon: {
    paddingLeft: 20,
  },
});
