import { useEffect, useState } from "react";
import { chooseRandomWord } from "./src/game/chooseRandomWord";
import { WordData, wordsToGuess } from "./wordsToGuess";
import AppContent from "./AppContent";
import { Text, TouchableOpacity } from "react-native";
import { checkIfCompleted } from "./src/game/checkIfCompleted";

export default function App() {
  useEffect(() => {
    changeWord();
  }, []);

  const [wordToGuess, setWordToGuess] = useState<WordData | undefined>();

  function changeWord() {
    console.log("Changing word");
    setWordToGuess(chooseRandomWord(wordsToGuess));
  }
  if (!wordToGuess) return <Text style={{ color: "white" }}>Loading...</Text>;

  return (
    <>
      <AppContent wordToGuess={wordToGuess} />
      <TouchableOpacity
        onPress={() => changeWord()}
        style={{ backgroundColor: "blue", justifyContent: "center" }}
      >
        <Text style={{ color: "white" }}>Change word</Text>
      </TouchableOpacity>
    </>
  );
}
