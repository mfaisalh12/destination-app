import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';

const ListBerita = props => {
  return (
    <Pressable
      onPress={() => props.navigation.navigate(props.navigate)}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
        },
      ]}>
      <View style={[styles.contains, {flexDirection: 'row', padding: 14}]}>
        <Image source={props.image} style={{width: 64, height: 64}} />
        <View style={{paddingLeft: 16, paddingRight: 12}}>
          <Text style={[styles.judul]}>{props.title}</Text>
          <Text style={[styles.timePublish]}>{props.time}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ListBerita;

const styles = StyleSheet.create({
  contains: {
    borderBottomWidth: 0.6,
    borderStyle: 'solid',
    borderColor: '#DADADA',
    width: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  judul: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    color: '#1F2937',
    paddingBottom: 4,
  },
  timePublish: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#9096A0',
  },
});
