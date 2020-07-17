import React, { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { AppStyles as styles } from "./src/styles/Styles";
import ChoiceButton from "./src/components/ChoiceButton";
import ChoiceCard from "./src/components/ChoiceCard";
import { findChoice } from "./src/helper/Helper";

const CHOICES = [
  {
    name: "Rock",
    uri: "http://pngimg.com/uploads/stone/stone_PNG13622.png",
  },
  {
    name: "Paper",
    uri: "https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png",
  },
  {
    name: "Scissors",
    uri:
      "http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png",
  },
];

export default function App() {
  const [gamePrompt, setGamePrompt] = useState("Choose your weapon!");
  const [yourChoice, setYourChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  function handleUserChoose(userChoice) {
    let randomIndex = Math.floor(Math.random() * CHOICES.length);
    let computerChoice = CHOICES[randomIndex].name;
    setYourChoice(userChoice);
    setComputerChoice(computerChoice);
    let result;
    if (userChoice === computerChoice) {
      result = "Draw!";
    } else {
      if (userChoice === "Rock") {
        result = computerChoice === "Paper" ? "Defeated!" : "Victory!";
      } else if (userChoice === "Paper") {
        result = computerChoice === "Scissors" ? "Defeated!" : "Victory!";
      } else if (userChoice === "Scissors") {
        result = computerChoice === "Rock" ? "Defeated!" : "Victory!";
      }
    }
    setGamePrompt(result);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text
          style={[
            styles.title,
            {
              color:
                gamePrompt === "Choose your weapon!"
                  ? "black"
                  : gamePrompt === "Draw!"
                  ? "#fb8c00"
                  : gamePrompt === "Defeated!"
                  ? "red"
                  : "green",
            },
          ]}
        >
          {gamePrompt}
        </Text>
        <View style={styles.choiceCardContainer}>
          <ChoiceCard
            name="You"
            choice={
              findChoice(CHOICES, yourChoice)
                ? findChoice(CHOICES, yourChoice)
                : null
            }
          />
          <Text style={styles.vsText}>vs</Text>
          <ChoiceCard
            name="Computer"
            choice={
              findChoice(CHOICES, computerChoice)
                ? findChoice(CHOICES, computerChoice)
                : null
            }
          />
        </View>
        {CHOICES.map((choice, index) => (
          <ChoiceButton
            key={index}
            choiceName={choice.name}
            handleUserChoose={handleUserChoose}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}
