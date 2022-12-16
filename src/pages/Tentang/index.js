import {StyleSheet, Text, View,} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tentang = ({navigation }) => {
    return (
        <View style={[styles.container, {
            flexDirection: "column",
          }]}>
            <Text style={[styles.judul,{}]}>
            Inspiring Belitung Timur, the land of maritime Spices route
            </Text>
            <Text style={[styles.deskripsi,{}]}>
            Aplikasi Inspiring Belitung Timur, memudahkan untuk menemukan wisata-wisata di Kabupaten Belitung Timur. 
            {'\n'}{'\n'}
            Sistem Informasi Dan Konten Promosi Multimedia Dinas Kebudayaan Dan Pariwisata Kabupaten Belitung Timur 2021.
            </Text>
        </View>
    );
};

export default Tentang;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    judul: {
      padding: 16,
      fontWeight: '500',
      fontSize: 24,
      lineHeight: 32,
      color: '#1F2937',
    },
    deskripsi:{
      padding: 16,
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 18,
      color: '#1F2937',
    },
});