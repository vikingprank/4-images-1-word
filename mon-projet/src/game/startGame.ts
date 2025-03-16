import { chooseLettersToHide } from "./chooseLettersToHide";
import { determineNumberOfLettersToHide } from "./determineNumberOfLettersToHide";
import { filterOutHiddenLetters } from "./filterOutHiddenLetters";
import { randomlyChooseExtraLetters } from "./randomlyChooseExtraLetters";
import { shuffleArray } from "./shuffleLetters";
import { WordData } from "../../wordsToGuess";
import { GameData } from "../types";

export const startGame = (randomWordData: WordData): GameData => {
  const completeWord = randomWordData.word;
  const numberOfLettersToHide = determineNumberOfLettersToHide(completeWord);
  const lettersToHide = chooseLettersToHide(completeWord, numberOfLettersToHide);
  const otherRandomAnswers = randomlyChooseExtraLetters(lettersToHide);
  const incompleteWord = filterOutHiddenLetters(
    completeWord,
    lettersToHide
  );
  const allPossibleAnswers = shuffleArray(
    lettersToHide.concat(otherRandomAnswers)
  );
  const images = randomWordData.images
  return {
    completeWord,
    lettersToHide,
    otherRandomAnswers,
    incompleteWord,
    allPossibleAnswers,
    images,
  };
};
