import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../constants/Constants";

export const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    marginTop: 20,
    textAlign: "center",
  },
  choiceCardContainer: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: SCREEN_WIDTH - 30,
    marginVertical: 20,
  },
  vsText: {},
});
export const ChoiceCardStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: SCREEN_HEIGHT * 0.45,
    width: SCREEN_WIDTH / 2 - 30,
    justifyContent: "center",
  },
  yourName: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },
  choiceName: {
    fontSize: 25,
  },
});
export const ChoiceButtonStyles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "red",
    width: SCREEN_WIDTH - 150,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
