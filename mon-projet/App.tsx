import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { determineNumberOfLettersToHide } from "./src/game/determineNumberOfLettersToHide";
import { chooseLettersToHide } from "./src/game/chooseLettersToHide";
import { randomlyChooseExtraLetters } from "./src/game/randomlyChooseExtraLetters";
import { filterOutHiddenLetters } from "./src/game/filterOutHiddenLetters";

const WORD_TO_GUESS = "SLEEP";

export default function App() {
  const numberOfLettersToHide = determineNumberOfLettersToHide(WORD_TO_GUESS);
  const lettersToHide = chooseLettersToHide(
    WORD_TO_GUESS,
    numberOfLettersToHide
  );
  const otherPrositions = randomlyChooseExtraLetters(lettersToHide)
  const wordWithHiddenLetters = filterOutHiddenLetters(WORD_TO_GUESS, lettersToHide)

  return (
    <View style={styles.container}>
      <Text>4 images 1 word</Text>
      {wordWithHiddenLetters.map((letter, index) => {
        return <Text key={index}>{letter}</Text>;
      })}
      {lettersToHide.map((letter, index) => {
        return <Text key={index}>{letter}</Text>;
      })}
      {otherPrositions.map((letter, index) => {
        return <Text key={index}>{letter}</Text>;
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
