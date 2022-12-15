import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// import assets
import {Logo} from '../../assets';

const Beranda = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Beranda Screen</Text>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({});
