import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import kerjurkab from '../../assets/images/Kerjurkab.png';
import lkpm from '../../assets/images/LKPM.png';
import beltim from '../../assets/images/Beltim.png';

import ListBerita from '../../components/ListBerita';

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
    <View style={styles.container}>
      {dataBerita.map((item, index) => {
        return (
          <ListBerita
            key={index}
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
});
