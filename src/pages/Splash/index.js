import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';

import {Logo, Beltim, Geopark} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.background}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image source={Logo} />

      <View style={styles.support}>
        <Text style={styles.supportText}>Didukung oleh</Text>
        <View style={styles.logoBottom}>
          <Image source={Beltim} style={styles.imgBottom} />
          <Image source={Geopark} style={styles.imgBottom} />
        </View>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#EBF5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  support: {
    position: 'absolute',
    bottom: 70,
    left: 'auto',
  },
  supportText: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
  },
  logoBottom: {
    flexDirection: 'row',
    marginBottom: 0,
  },
  imgBottom: {
    width: 48,
    height: 48,
    marginHorizontal: 20,
  },
});
