import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { determineNumberOfLettersToHide } from "./src/game/determineNumberOfLettersToHide";
import { chooseLettersToHide } from "./src/game/chooseLettersToHide";
import { randomlyChooseExtraLetters } from "./src/game/randomlyChooseExtraLetters";
import { filterOutHiddenLetters } from "./src/game/filterOutHiddenLetters";
import { ReactNode, useState } from "react";
import { shuffleArray } from "./src/game/shuffleLetters";
import { LetterButton } from "./src/components/LetterButton";

const WORD_TO_GUESS = "SLEEP";

const RowView: React.FC<{
  children: ReactNode;
}> = ({ children }) => <View style={{ flexDirection: "row" }}>{children}</View>;

export enum TriedState {
  NOT_TRIED = "not_tried",
  TRIED_AND_FALSE = "tried_and_false",
  TRIED_AND_TRUE = "tried_and_true",
}

type PropositionsState = [string, TriedState];

const numberOfLettersToHide = determineNumberOfLettersToHide(WORD_TO_GUESS);
const lettersToHide = chooseLettersToHide(WORD_TO_GUESS, numberOfLettersToHide);
const otherPropositions = randomlyChooseExtraLetters(lettersToHide);
const wordWithHiddenLetters = filterOutHiddenLetters(
  WORD_TO_GUESS,
  lettersToHide
);
const allPossibleAnswers = shuffleArray(
  lettersToHide.concat(otherPropositions)
);

export default function App() {
  const [displayedWord, setDisplayedWord] = useState(wordWithHiddenLetters);

  const initialPropositionsState: PropositionsState[] = {
    ...allPossibleAnswers.map((letter) => {
      return [letter, TriedState.NOT_TRIED];
    }),
  };

  const [propositionsState, setPropositionsState] = useState<
    PropositionsState[]
  >(initialPropositionsState);

  console.log(JSON.stringify(initialPropositionsState, null, 2));

  const handlePressButton = (index: number) => {
    setPropositionsState((prevState) => {
      const newTries = prevState; // Shallow Copy
      const currentEntry = newTries[index];
      if (currentEntry) {
        prevState[index] = [currentEntry[0], TriedState.TRIED_AND_TRUE];
      }
      return { ...newTries };
    });
  };

  return (
    <View style={styles.container}>
      <Text>4 images 1 word</Text>
      <RowView>
        {wordWithHiddenLetters.map((letter, index) => {
          return (
            <Text style={styles.text} key={index}>
              {letter}
            </Text>
          );
        })}
      </RowView>
      <RowView>
        <Text numberOfLines={2}>
          {allPossibleAnswers.map((letter, index) => {
            return (
              <LetterButton
                key={index}
                letter={letter}
                letterState={propositionsState[index][1] as TriedState}
                onCallBackPress={() => handlePressButton(index)}
              />
            );
          })}
        </Text>
      </RowView>

      <StatusBar style="auto" />
    </View>
  );
}

export const FONT_SIZE = 24;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { padding: 18, fontSize: FONT_SIZE },
});
