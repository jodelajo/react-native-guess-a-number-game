import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";
import defaultStyles from "../constants/default-styles";
import TitleText from "./TitleText";

export default function Header({ title }) {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={defaultStyles.title}>{title}</TitleText>
    </View>
  );
}
const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
  // headerTitle: {
  //     // color: 'black',
  //     // fontSize: 18,
  //     fontFamily: "open-sans-bold"
  // }
});
