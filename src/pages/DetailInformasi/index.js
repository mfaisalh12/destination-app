import {StyleSheet, Text, View, Image, ImageBackground,  SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import smp4 from '../../assets/images/smp4.png';

const DetailInformasi = () => {
  return (
    <View  style={[styles.container, {
      flexDirection: "column",
      
    }]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center'}}>
        <Image source={smp4}  style={[styles.image]}>
        </Image>
        <View style={[styles.cotents,{
          flexDirection: 'column',
        }]}>
          <View>
            <Text style={[styles.judul]}>SMP Negeri 4 Manggar Terima Bibit Buah</Text>
            <Text style={[styles.timePublish]}>20 Oktober 2021</Text>
          </View>
          <View style={{paddingTop:20 }}>
            <Text style={{textAlign:'justify'}}>
            Manggar, Diskominfo Beltim— Anggota DPRD Kabupaten Belitung Timur (Beltim), Koko Haryanto mengatakan pemanfaatan lahan kosong ataupun kritis sangat penting dilakukan oleh masyarakat pasca tambang di Kabupaten Beltim.
            {'\n'}{'\n'}
            Hal itu disampaikan Koko dalam Sosialisasi Pemulihan Lahan dan Penyerahan Bibit sekaligus penyerahan bibit buah oleh pihak Fordas Goes To School di SMP Negeri 4 Manggar,  Kamis (18/11).
            {'\n'}{'\n'}
            “Dalam kegiatan Fordas Goes To School diharapkan ada kegiatan  pemulihan lahan-lahan, khususnya lahan pasca tambang. Lahan kritis itu nantinya akan dihijaukan kembali.,” ujar Koko.
            {'\n'}{'\n'}
            Upaya dalam pemulihan lahan bekas tambang antara lain pihak Fordas membagikan bibit tanaman  buah seperti bibit kopi, alpukat dan buah-buahan lainnya sebanyak 100 bibit.
            {'\n'}{'\n'}
            “Kami berharap bibit-bibit tersebut nantinya akan membuat hutan sekolah menjadi lebih hijau dan hasilnya bisa dinikmati  pihak sekolah,” kata Koko.
            {'\n'}{'\n'}
            Selain memberikan bibit, Fordas juga melakukan MoU  kerjasama dengan  pihak SMP Negeri 4 Manggar yang tujuannya agar kedua belah pihak sama-sama melakukan pemulihan  lahan pasca tambang.
            {'\n'}{'\n'}
            Sementara itu,  Hamsiyah selaku Kepala Sekolah SMP Negeri 4 Manggar, SMP Negeri 4 Manggar masih perlu pengijauan apalagi didukung halaman yang luas sehingga membutuhkan banyak tanaman.
            {'\n'}{'\n'}
            “Kami sangat berterima kasih dengan Fordas yang sudah memberikan bantuan bibit untuk pihak sekolah, ujar Hamsiyah
            </Text>
          </View>
        </View>
      </ScrollView>
    </View >
  );
};

export default DetailInformasi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // padding: 20,
  },
  image:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMethod:'auto',
  },
  cotents:{
    flex:2,
    padding: 16,
  },
  judul:{
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 32,
    color: '##1F2937',
    
  },
  timePublish:{
    height: 14,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: '#9096A0',
    paddingTop:1,
  }
  
});
