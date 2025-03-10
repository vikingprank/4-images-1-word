import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { determineNumberOfLettersToHide } from "./src/game/determineNumberOfLettersToHide";
import { chooseLettersToHide } from "./src/game/chooseLettersToHide";
import { randomlyChooseExtraLetters } from "./src/game/randomlyChooseExtraLetters";
import { filterOutHiddenLetters } from "./src/game/filterOutHiddenLetters";
import { ReactNode, useState } from "react";
import { shuffleArray } from "./src/game/shuffleLetters";
import { LetterButton } from "./src/components/LetterButton";
import { isPropositionCorrect } from "./src/game/isPropositionCorrect";
import { completeOneLetter } from "./src/game/completeOneLetter";

const WORD_TO_GUESS = "SLEEP";
const IMAGE_01 = require("../mon-projet/images/sleep1.jpeg");

const RowView: React.FC<{
  children: ReactNode;
  width?: number;
}> = ({ children, width }) => (
  <View style={{ flexDirection: "row", width }}>{children}</View>
);

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

  const handlePressButton = (index: number) => {
    setPropositionsState((prevState) => {
      const newTries = prevState; // Shallow Copy
      const currentEntry = newTries[index];
      const isCorrect = isPropositionCorrect(lettersToHide, currentEntry[0]);
      if (currentEntry) {
        prevState[index] = [
          currentEntry[0],
          isCorrect ? TriedState.TRIED_AND_TRUE : TriedState.TRIED_AND_FALSE,
        ];
      }
      if (isCorrect) {
        setDisplayedWord((prevState) => {
          const updatedDisplay = completeOneLetter(
            WORD_TO_GUESS,
            prevState.join(""),
            currentEntry[0]
          );
          updatedDisplay;
          return updatedDisplay;
        });
      }
      return { ...newTries };
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>4 images 1 word</Text>
      <RowView>
        <Image
          source={IMAGE_01}
          style={{ width: 150, height: 150, borderRadius: 20 }}
        />
        <Image
          source={IMAGE_01}
          style={{ width: 150, height: 150, borderRadius: 20 }}
        />
      </RowView>
      <RowView>
        <Image
          source={IMAGE_01}
          style={{ width: 150, height: 150, borderRadius: 20 }}
        />
        <Image
          source={IMAGE_01}
          style={{ width: 150, height: 150, borderRadius: 20 }}
        />
      </RowView>
      <RowView>
        {displayedWord.map((letter, index) => {
          return (
            <Text style={styles.text} key={index}>
              {letter}
            </Text>
          );
        })}
      </RowView>
      <RowView width={350}>
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

export const FONT_SIZE = 32;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111A2E",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { padding: 18, fontSize: FONT_SIZE, color: "white" },
});
