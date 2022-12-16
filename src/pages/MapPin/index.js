import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Map = () => {
  const {height, width} = useWindowDimensions();
  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <ImageBackground
        source={{
          uri: 'https://www.google.com/maps/d/thumbnail?mid=1_hejtzkcTndzdTprBfbB_TnCs7A&hl=in',
        }}
        style={{width: width, minHeight: height}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View style={style.btn}>
            <Text style={{color: '#0085CC', fontWeight: 'bold'}}> Semua </Text>
          </View>
          <View style={style.btn}>
            <Text> Wisata Alam </Text>
          </View>
          <View style={style.btn}>
            <Text> Wisata Air </Text>
          </View>
          <View style={style.btn}>
            <Text> Wisata Ku </Text>
          </View>
        </TouchableOpacity>
        <View style={[style.point, {padding: 14}]}>
          <Icon name="room" size={30} color="#0085CC" />
        </View>
        <View style={[style.detail, {flexDirection: 'row', padding: 14}]}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgzgr-JgnmlIoA9wYNwOwY_G01sP7UQG3n1w&usqp=CAU',
            }}
            style={{width: 100, height: 150, borderRadius: 20}}></Image>
          <View style={{paddingLeft: 20, paddingTop: 15}}>
            <Text style={{fontSize: 20, color: 'black', flexDirection: 'row'}}>
              Nama Purnama Hotel
            </Text>
            <Text style={{fontSize: 12, flexDirection: 'row'}}>
              Jl. K.A. Bujang, Batu Penyu, ...
            </Text>
            <View style={[style.loc, {flexDirection: 'row'}]}>
              <Icon name="map" size={20} color="white" />
              <Text style={{color: 'white'}}> Arahkan Ke Lokasi</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  btn: {
    height: 30,
    width: 90,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  point: {
    top: 400,
    height: 40,
    width: 40,
    backgroundColor: 'white',
    marginLeft: 200,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  detail: {
    top: 470,
    height: 170,
    width: 350,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginLeft: 20,
  },
  loc: {
    height: 30,
    width: 160,
    backgroundColor: '#0085CC',
    marginTop: 30,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Map;
