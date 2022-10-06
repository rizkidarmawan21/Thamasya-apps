import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowRight} from '../../../assets';

const ListMenu = ({text, icon}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.content}>
      <View style={styles.list}>
        <View style={styles.contentList}>
          <View style={{width: 30}}>{icon}</View>
          <Text style={styles.text}> {text} </Text>
        </View>
        <View style={styles.icon}>
          <ArrowRight />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListMenu;

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 25,
    marginTop: 30,
  },

  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  contentList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // flex: 0.5,
  },

  text: {
    marginLeft: 15,
    fontSize: 14,
    fontFamily: 'Raleway-SemiBold',
    color: '#999999',
    alignSelf: 'center',
  },
});
