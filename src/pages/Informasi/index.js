import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';

import ListBerita from '../../components/ListBerita';

import dataBerita from '../../database/Berita';

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
