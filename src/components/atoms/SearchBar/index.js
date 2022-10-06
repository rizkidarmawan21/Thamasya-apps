import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';
import {Search} from './../../../assets';
const SearchBar = ({label, placeholder, ...restProps}) => {
  return (
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
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
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
