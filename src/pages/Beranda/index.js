import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  useWindowDimensions,
  Linking,
  View,
} from 'react-native';

// import component
import Card from '../../components/Card';
import ListBerita from '../../components/ListBerita';

// import assets
import {Hero, PosterCovid} from '../../assets';

// import database
import dataDestinasi from '../../database/Destinasi';
import jelajahi from '../../database/Jelajah';
import dataBerita from '../../database/Berita';

const Beranda = ({navigation}) => {
  const {height, width} = useWindowDimensions();
  const destinationItem = dataDestinasi.map((item, index) => {
    return <Card key={index} title={item.title} image={item.img} />;
  });
  const jelajahItem = jelajahi.map((item, index) => {
    return (
      <View style={{width: '25%', padding: '6%'}} key={index}>
        <Image source={item.icon} style={{width: '100%'}} />
        <Text style={{textAlign: 'center', fontSize: 12, fontWeight: '500'}}>
          {item.title}
        </Text>
      </View>
    );
  });
  return (
    <ScrollView style={{fontFamily: 'Poppins', backgroundColor: '#fff'}}>
      <SafeAreaView style={{position: 'relative'}}>
        <Image source={Hero} style={{width, height: 400}} />
        <Text style={styles.containerText}>
          <Text style={styles.textHero}>Wisata Air</Text> {'\n'}
          <Text style={styles.titleHero}>Pulau Bukulimau Underwater</Text>
        </Text>
      </SafeAreaView>
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <Text style={{textAlign: 'center', marginTop: 32}}>
          <Text style={{fontSize: 20, letterSpacing: -0.5, fontWeight: '500'}}>
            Destinasi Wisata
          </Text>
          {'\n'}
          <Text style={{fontSize: 12, fontWeight: '400'}}>Pilihan Terbaik</Text>
        </Text>
        <View style={styles.destinationCard}>{destinationItem}</View>
        <Text
          style={styles.textLink}
          onPress={() => navigation.navigate('Destinasi')}>
          Lihat Lainnya
        </Text>
      </SafeAreaView>
      <View style={{textAlign: 'center', marginHorizontal: '6%'}}>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            justifyContent: 'center',
          }}
        />
      </View>
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <Text style={{textAlign: 'center', marginTop: 32}}>
          <Text style={{fontSize: 20, letterSpacing: -0.5, fontWeight: '500'}}>
            Jelajahi Sekarang
          </Text>
          {'\n'}
          <Text style={{fontSize: 12, fontWeight: '400'}}>
            Pilihan kategori yang diminati
          </Text>
        </Text>
        <View style={styles.destinationCard}>{jelajahItem}</View>
      </SafeAreaView>
      <SafeAreaView
        style={{
          marginVertical: 40,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: '90%', height: 210, resizeMode: 'stretch'}}
          source={PosterCovid}
        />
      </SafeAreaView>
      <SafeAreaView>
        <Text style={{textAlign: 'center', marginTop: 32}}>
          <Text style={{fontSize: 20, letterSpacing: -0.5, fontWeight: '500'}}>
            Informasi dan Berita
          </Text>
          {'\n'}
          <Text style={{fontSize: 12, fontWeight: '400'}}>
            Seputar Belitung Timur
          </Text>
        </Text>
        <View style={styles.containerBerita}>
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
        <Text
          style={styles.textLink}
          onPress={() => navigation.navigate('Informasi')}>
          Informasi Lainnya
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  containerText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 20,
  },
  textHero: {
    color: '#D1D5DB',
    fontSize: 14,
    fontWeight: '500',
  },
  titleHero: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
    lineHeight: 31,
  },
  destinationCard: {
    padding: 0,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  textLink: {
    color: '#0085CC',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
    marginVertical: 40,
  },
  containerBerita: {
    marginTop: 20,
  },
});
