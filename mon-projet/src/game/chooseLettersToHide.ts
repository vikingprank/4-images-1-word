import { shuffleWord } from "./shuffleLetters";

export const chooseLettersToHide = (
  word: string,
  numberOfLettersToHide: number
) => {
  const randomIndex = shuffleWord(word);
  return randomIndex.slice(0, numberOfLettersToHide);
};


