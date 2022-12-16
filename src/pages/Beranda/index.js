import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// import assets
import {Hero} from '../../assets';

const Beranda = () => {
  const {height, width} = useWindowDimensions();
  return (
    <View>
      <View style={{position: 'relative'}}>
        <Image source={Hero} style={{width, height: 450}} />
        <View style={{position: 'absolute', bottom: 0, left: 0}}>
          <Text style={{color: '#D1D5DB', fontSize: 12, fontWeight: 500}}>
            Wisata Air
          </Text>
          <Text style={{color: '#fff', fontSize: 24, fontWeight: 500}}>
            Pulau Bukulimau Underwater
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({});
