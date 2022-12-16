import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Card = props => {
  return (
    <View style={styles.card}>
      <Image source={props.image} style={{borderRadius: 12}} />
      <Text style={styles.titleCard}>{props.title}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: '50%',
    position: 'relative',
    padding: '6%',
  },
  titleCard: {
    position: 'absolute',
    bottom: 32,
    left: 35,
    color: '#F9FAFB',
    fontWeight: '600',
    fontSize: 16,
  },
});
