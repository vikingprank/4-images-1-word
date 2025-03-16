import { useEffect, useState } from "react";
import { chooseRandomWord } from "./src/game/chooseRandomWord";
import { WordData, wordsToGuess } from "./wordsToGuess";
import AppContent from "./AppContent";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { checkIfCompleted } from "./src/game/checkIfCompleted";

export default function App() {
  useEffect(() => {
    changeWord();
  }, []);

  const [wordToGuess, setWordToGuess] = useState<WordData | undefined>();
  const [wordState, setWordState] = useState<string[]>();

  function changeWord() {
    setWordToGuess(chooseRandomWord(wordsToGuess));
  }
  if (!wordToGuess) return <Text style={styles.text}>Loading...</Text>;

  return (
    <View style={styles.container}>
      <AppContent
        wordToGuess={wordToGuess}
        wordStateCallback={(state) => setWordState(state)}
      />
      <TouchableOpacity
        onPress={() => changeWord()}
        style={{ justifyContent: "center" }}
      >
        {wordState && checkIfCompleted([...wordToGuess.word], wordState) ? (
          <Text style={styles.text}>You won!</Text>
        ) : null}
        <Text style={styles.text}>Change word</Text>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111A2E",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 80,
  },
  text: {
    padding: 18,
    fontSize: 32,
    color: "white",
  },
});
