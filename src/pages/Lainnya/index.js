import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import logo1 from '../../assets/images/inspiring.png';
import logo2 from '../../assets/images/inspiring_big.png';
const Lainnya = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column",
      
    }]}>
      <View style={[styles.logo, {
      flexDirection: "row",
    }]}>
        <Image source={logo1} style={{
          width: 114,
          height: 48,
        }}/>
        <Image source={logo2} style={{
          width: 48,
          height: 56,
        }}/>
      </View>
      <View style={[styles.cotents]} >
        <Text style={[styles.textContents]}>Tentang</Text>
      </View>
      <View style={[styles.cotents]} >
        <Text style={[styles.textContents]}>Favorit destinasi</Text>
      </View>
      <View style={[styles.cotents]} >
        <Text style={[styles.textContents]}>Kritik dan Saran</Text>
      </View>
      <View style={[styles.cotents]} >
        <Text style={[styles.textContents]}>Nilai Aplikasi</Text>
      </View>
      <View style={[{margin:40}]} >
        <Text style={[styles.hakCipta,{
          color:'#4B5563',
          }]}>
        App Version 1.0{'\n'}
        </Text>
        <Text style={[styles.hakCipta,{
          color:'#9096A0',
          }]}>
        Hak Cipta © 2021 
        </Text>
        <Text style={[styles.hakCipta,{
          color:'#4B5563',
          fontWeight: '500',
          }]}>
        Dinas Kebudayaan Dan Pariwista Belitung Timur{'\n'}
        </Text>
        <Text style={[styles.hakCipta,{
          color:'#0085CC',
          }]}>
        www.disbudpar.beltim.go.id
        </Text>
      </View>
    </View>
  );
};

export default Lainnya;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      // padding: 20,
    },
    logo: {
      padding: 17,
      justifyContent:'space-between',
      marginBottom: 10,
    },
    cotents:{
      borderBottomWidth:1.2,
      borderTopWidth:1.2,
      borderStyle: 'solid',
      borderColor:'#DADADA',
      width: "auto",
      
    },
    textContents:{
      padding:17.5,
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 21,
      color: '#1F2937',
    },
    hakCipta:{
      justifyContent:'center',
      textAlign:'center',
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 14,
        
    }
});
