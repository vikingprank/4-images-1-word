import { WordData, WordsToGuess } from "../../wordsToGuess";

export const chooseRandomWord = (wordsToGuess: WordsToGuess): WordData => {
  const numberOfWords = Object.keys(wordsToGuess).length;

  const randomIndex = randomIntFromInterval(0, numberOfWords - 1);

  const randomWord = Object.keys(wordsToGuess)[randomIndex];

  return wordsToGuess[randomWord];
};

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
