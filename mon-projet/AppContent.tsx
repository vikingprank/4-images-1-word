import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { LetterButton } from "./src/components/LetterButton";
import { isPropositionCorrect } from "./src/game/isPropositionCorrect";
import { completeOneLetter } from "./src/game/completeOneLetter";
import { RowView } from "./src/components/RowView";
import { WordData } from "./wordsToGuess";
import { ImageGrid } from "./src/components/ImageGrid";
import { startGame } from "./src/game/startGame";
import { GameData, PropositionsState, TriedState } from "./src/types";
import { initiatePropositionsState } from "./src/game/initiatePropositionsState";

const screenWidth = Dimensions.get("window").width;

export default function AppContent({
  wordToGuess,
  wordStateCallback,
}: {
  wordToGuess: WordData;
  wordStateCallback: (state: string[]) => void;
}) {
  useEffect(() => {
    const gameData = startGame(wordToGuess);
    setGame(gameData);
    setDisplayedWord(gameData.incompleteWord);
    setPropositionsState(
      initiatePropositionsState(gameData.allPossibleAnswers)
    );
  }, [wordToGuess]);

  const [game, setGame] = useState<GameData>(startGame(wordToGuess));
  const [displayedWord, setDisplayedWord] = useState(game.incompleteWord);

  useEffect(() => {
    wordStateCallback(displayedWord);
  }, [displayedWord, wordStateCallback]);

  const initialPropositionsState = initiatePropositionsState(
    game.allPossibleAnswers
  );
  const [propositionsState, setPropositionsState] = useState<
    PropositionsState[]
  >(initialPropositionsState);

  const handlePressButton = (indexPressed: number) => {
    setPropositionsState((prevState) => {
      if (!prevState) return []; // Ensure prevState isn't undefined

      return prevState.map((prop, index) => {
        if (index === indexPressed) {
          const isCorrect = isPropositionCorrect(
            game.lettersToHide,
            prop.letter
          );
          return {
            letter: prop.letter,
            triedState: isCorrect
              ? TriedState.TRIED_AND_TRUE
              : TriedState.TRIED_AND_FALSE,
          };
        }
        return prop;
      });
    });
    setDisplayedWord((prevState) => {
      const letterPressed = propositionsState[indexPressed]?.letter;
      if (!letterPressed) return prevState; // Avoid errors if letter is missing

      return completeOneLetter(
        game.completeWord,
        prevState.join(""),
        letterPressed
      );
    });
  };

  return (
    <View style={styles.container}>
      <ImageGrid images={game?.images} />
      <RowView>
        {displayedWord.map((letter, index) => {
          return (
            <Text
              style={[
                styles.text,
                {
                  fontSize: screenWidth / game.completeWord.length / 3,
                  padding: game.completeWord.length > 8 ? 10 : 18,
                },
              ]}
              key={index}
            >
              {letter}
            </Text>
          );
        })}
      </RowView>
      <RowView width={350}>
        <Text numberOfLines={2}>
          {propositionsState.map((proposition, index) => {
            return (
              <LetterButton
                key={index}
                letter={proposition.letter}
                letterState={proposition.triedState}
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
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
    margin: 5,
    borderColor: "#363F53",
    borderWidth: 5,
  },
});
