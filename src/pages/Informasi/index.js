import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import kerjurkab from '../../assets/images/Kerjurkab.png';
import lkpm from '../../assets/images/LKPM.png';
import beltim from '../../assets/images/Beltim.png';

const Informasi = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column",
      
    }]}>
      <View style={[styles.contains, {flexDirection: "row", padding:14}]}>
        <Image source={kerjurkab} style={{width: 64, height: 64}}/>
        <View style={{ paddingLeft: 16}}>
          <Text style={[styles.judul]}>Adakan Kerjurkab Tinju 2022</Text>
          <Text style={[styles.timePublish]}>20 Oktober 2021</Text>
        </View>
      </View>
      <View style={[styles.contains, {flexDirection: "row", padding:14}]}>
        <Image source={beltim} style={{width: 64, height: 64}}/>
        <View style={{ paddingLeft: 16}}>
          <Text style={[styles.judul]}>Wabup Beltim Apresiasi Job Fair Beltim</Text>
          <Text style={[styles.timePublish]}>15 Oktober 2021</Text>
        </View>
      </View>  
      <View style={[styles.contains, {flexDirection: "row", padding:14}]}>
        <Image source={lkpm} style={{width: 64, height: 64}}/>
        <View style={{ paddingLeft: 16}}>
          <Text style={[styles.judul]}>LKPM Buat Proyek Pemerintah Jadi Lebih Terpantau</Text>
          <Text style={[styles.timePublish]}>8 Oktober 2021</Text>
        </View>
      </View>  

      <View style={[styles.contains, {flexDirection: "row", padding:14}]}>
        <Image source={kerjurkab} style={{width: 64, height: 64}}/>
        <View style={{ paddingLeft: 16}}>
          <Text style={[styles.judul]}>Adakan Kerjurkab Tinju 2022</Text>
          <Text style={[styles.timePublish]}>20 Oktober 2021</Text>
        </View>
      </View>
      <View style={[styles.contains, {flexDirection: "row", padding:14}]}>
        <Image source={beltim} style={{width: 64, height: 64}}/>
        <View style={{ paddingLeft: 16}}>
          <Text style={[styles.judul]}>Wabup Beltim Apresiasi Job Fair Beltim</Text>
          <Text style={[styles.timePublish]}>15 Oktober 2021</Text>
        </View>
      </View>  
      <View style={[styles.contains, {flexDirection: "row", padding:14}]}>
        <Image source={lkpm} style={{width: 64, height: 64}}/>
        <View style={{ paddingLeft: 16}}>
          <Text style={[styles.judul]}>LKPM Buat Proyek Pemerintah Jadi Lebih Terpantau</Text>
          <Text style={[styles.timePublish]}>8 Oktober 2021</Text>
        </View>
      </View>  
    </View>
  );
};

export default Informasi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // padding: 20,
  },
  contains:{
    borderBottomWidth:0.6,
    borderStyle: 'solid',
    borderColor:'#DADADA',
    width: "auto",
  },
  judul:{
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 21,
    color: '#1F2937',
    paddingBottom: 4,
  },
  timePublish:{
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#9096A0',
  }
});
