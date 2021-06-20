import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from '../constants/colors'
import defaultStyles from "../constants/default-styles";

export default function Header( { title }) {
  return (
    <View style={styles.header}>
      <Text style={defaultStyles.title}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
        fontFamily: "open-sans-bold"
    }
});
