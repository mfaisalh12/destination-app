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
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#EBF5FF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
