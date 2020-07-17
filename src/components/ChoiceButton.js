import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ChoiceButtonStyles as styles } from "../styles/Styles";

export default function ChoiceButton({ choiceName, handleUserChoose }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleUserChoose(choiceName)}
    >
      <Text style={styles.buttonText}>{choiceName}</Text>
    </TouchableOpacity>
  );
}
