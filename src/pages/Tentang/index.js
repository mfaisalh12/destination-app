import {StyleSheet, Text, View,} from 'react-native';
import React from 'react';

const Tentang = () => {
    return (
        <View style={[styles.container, {
            flexDirection: "column",
          }]}>
            <Text>
            Inspiring Belitung Timur, the land of maritime Spices route
            </Text>
            <Text>
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
});