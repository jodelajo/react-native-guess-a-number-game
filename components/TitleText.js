import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/colors';

const TitleText = props => (
  <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: Platform.OS === 'ios' ? Colors.primary : 'white',
  }
});

export default TitleText;
