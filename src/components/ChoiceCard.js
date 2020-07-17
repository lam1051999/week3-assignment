import React from "react";
import { View, Text, Image } from "react-native";
import { ChoiceCardStyles as styles } from "../styles/Styles";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Constants";

export default function ChoiceCard({ choice, name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.yourName}>{name}</Text>
      {choice ? (
        <>
          <Image
            source={{
              uri: choice.uri,
            }}
            resizeMode="contain"
            style={{
              width: SCREEN_WIDTH / 2 - 30,
              height: SCREEN_HEIGHT * 0.2,
            }}
          />
          <Text style={styles.choiceName}>{choice.name}</Text>
        </>
      ) : null}
    </View>
  );
}
