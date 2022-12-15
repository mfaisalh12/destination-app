import {StyleSheet, Text, View, FlatList ,TouchableOpacity, Image } from 'react-native';
import React, { useState , useEffect } from 'react';
import Iconicons from 'react-native-vector-icons/Ionicons';


const Destinasi = () => {

  const [kategori, setKategori] = useState([
    {
      nama: 'Semua',
    },
    {
      nama: 'Wisata alam',
    },
    {
      nama: 'Wisata air',
    },
    {
      nama: 'Wisata kunliner',
    },
  ]);

  const [kategoriseleksi, setkategoriseleksi] = useState({
    nama: 'Semua',
  });

  const [dataTrending, setdataTrending] = useState([
    {namawisata :'tempat smackdown',image: "https://images.unsplash.com/photo-1583141244634-5e1ddf8e0d1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
    {namawisata :'tempat tempat gwntor',image: 'https://images.unsplash.com/photo-1579488800208-b0a0348209aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'},
    {namawisata :'tempat tempat judi', image: 'https://www.shutterstock.com/image-photo/beauty-model-girl-dancing-silhouette-600w-1139887841.jpg'},
    {namawisata :'tempat penpat mabok', image: 'https://www.shutterstock.com/image-vector/sexy-santa-girl-vector-illustration-600w-117856669.jpg'},
    {namawisata :'tempat tempat wiwkwk', image: 'https://www.shutterstock.com/image-vector/vector-illustration-inspired-by-painting-600w-2045859191.jpg'},
    {namawisata :'tempat tempat ribut', image: 'https://www.shutterstock.com/image-vector/glowing-moon-on-blue-sky-600w-2034817790.jpg'},
    {namawisata :'tempat tempat nongkrong', image: 'https://www.shutterstock.com/image-vector/impressionist-portrait-bearded-redhead-man-600w-1830079976.jpg'},
    {namawisata :'tempat tempat pipi ',image: 'https://www.shutterstock.com/image-illustration/father-time-surreal-portrait-three-600w-1989944546.jpg'}, 
    
  ]);

  return (
    <View style={{flex: 1 , marginHorizontal: 5 , marginBottom: 20 , marginTop: 20, backgroundColor :'#E8EAED'}}>
      <View style = {{justifyContent: 'flex-end',alignItems: 'flex-end',marginBottom: 8 ,marginTop: 8, flexDirection: 'row'}}>
        <Iconicons name="search-outline" size ={25} color="#900" />
        <Iconicons name="map-outline" size ={25} color="#900" />
      </View>
      <View>
      <FlatList
        data={kategori}
        horizontal
        style={{marginLeft: 10}}
        renderItem = {({item}) => (
          <TouchableOpacity
             style={{
              marginRight: 10,
              backgroundColor: 
                kategoriseleksi == item.nama ? '#4169e1' : '#696969' ,
              elevation: 3,
              paddingHorizontal : 10,
              marginBottom : 10,
              borderRadius:8,
              marginLeft:5,
            }}>
            <Text
              style={{
                color: kategoriseleksi.nama == item.nama ? '#fff': '#212121',
              }}>
              {item.nama}
            </Text>
          </TouchableOpacity>   
        )}
      />
      </View>

      <View style={{}}>
      <FlatList
        data={dataTrending}
        horizontal
        showsVerticalScrollIndicator = {false}
        style={{marginLeft: 10}}
        renderItem = {({item}) => (
          <TouchableOpacity
             style={{
              marginRight: 10,
              backgroundColor: '#fff',
              elevation: 3,
              paddingHorizontal : 10,
              marginBottom : 10,
              borderRadius:8,
              marginLeft:5,
            }}>
            <Image 
              source={{ulr: item.Image}} 
              style={{width :200 , height :150 , marginBottom : 5, borderRadius : 3, marginTop : 5,}} 
              resizemode={'cover'}
            />
            <Text
              style={{
                color: '#212121',
                fontsize: 18,
                fontWeight: 'bold'
              }}>
              {item.namawisata}
            </Text>
          </TouchableOpacity>   
        )}
      />
      </View>
      <View style={{}}>
      <FlatList
        data={dataTrending}
        horizontal
        showsVerticalScrollIndicator = {false}
        style={{marginLeft: 10}}
        renderItem = {({item}) => (
          <TouchableOpacity
             style={{
              marginRight: 10,
              backgroundColor: '#fff',
              elevation: 3,
              paddingHorizontal : 10,
              marginBottom : 10,
              borderRadius:8,
              marginLeft:5,
            }}>
            <Image 
              source={{ulr: item.Image}} 
              style={{width :200 , height :150 , marginBottom : 5, borderRadius : 3, marginTop : 5,}} 
              resizemode={'cover'}
            />
            <Text
              style={{
                color: '#212121',
                fontsize: 18,
                fontWeight: 'bold'
              }}>
              {item.namawisata}
            </Text>
          </TouchableOpacity>   
        )}
      />
      </View>
      <View style={{}}>
      <FlatList
        data={dataTrending}
        horizontal
        showsVerticalScrollIndicator = {false}
        style={{marginLeft: 10}}
        renderItem = {({item}) => (
          <TouchableOpacity
             style={{
              marginRight: 10,
              backgroundColor: '#fff',
              elevation: 3,
              paddingHorizontal : 10,
              marginBottom : 10,
              borderRadius:8,
              marginLeft:5,
            }}>
            <Image 
              source={{ulr: item.Image}} 
              style={{width :200 , height :150 , marginBottom : 5, borderRadius : 3, marginTop : 5,}} 
              resizemode={'cover'}
            />
            <Text
              style={{
                color: '#212121',
                fontsize: 18,
                fontWeight: 'bold'
              }}>
              {item.namawisata}
            </Text>
          </TouchableOpacity>   
        )}
      />
      </View>
    </View>
  );
};

export default Destinasi;

const styles = StyleSheet.create({});

