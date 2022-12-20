import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import kerjurkab from '../../assets/images/Kerjurkab.png';
import lkpm from '../../assets/images/LKPM.png';
import beltim from '../../assets/images/Beltim.png';

import ListBerita from '../../components/ListBerita.js';

const dataBerita = [
  {
    image: kerjurkab,
    title: 'Adakan Kerjurkab Tinju 2022',
    time: '20 Oktober 2021',
  },
  {
    image: beltim,
    title: 'Wabup Beltim Apresiasi Job Fair Beltim',
    time: '15 Oktober 2021',
  },
  {
    image: lkpm,
    title: 'LKPM Buat Proyek Pemerintahan Jadi Lebih Terpantau',
    time: '8 Oktober 2021',
  },
];

const Informasi = ({navigation}) => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      {dataBerita.map(item => {
        return (
          <ListBerita
            navigation={navigation}
            navigate="DetailInformasi"
            image={item.image}
            title={item.title}
            time={item.time}
          />
        );
      })}
    </View>
  );
};

export default Informasi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  contains: {
    borderBottomWidth: 0.6,
    borderStyle: 'solid',
    borderColor: '#DADADA',
    width: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  judul: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    color: '#1F2937',
    paddingBottom: 4,
  },
  timePublish: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#9096A0',
  },
});
