import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

import colors from "../constants/colors";
export default function MainButton({ onPress, buttonText }) {
    let ButtonComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >=21) {
        ButtonComponent = TouchableNativeFeedback;
    }
  return (
      <View style={styles.buttonContainer}>
    <ButtonComponent onPress={onPress} activeOpacity={0.6}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </ButtonComponent>
    </View>
  );
}
const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden',
    },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});
