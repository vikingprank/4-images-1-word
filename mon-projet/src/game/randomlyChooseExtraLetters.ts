import { shuffleArray, shuffleWord } from "./shuffleLetters";

const TOTAL_PROPOSITIONS = 12;

const ALPHABET = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
export const randomlyChooseExtraLetters = (hiddenLetters: Array<string>) => {
  const alphabetWithoutHiddenLetters = ALPHABET
  .filter((letter: string) => 
    !hiddenLetters.some((hiddenLetter) => letter.toLocaleUpperCase() === hiddenLetter.toLocaleUpperCase())
  )

  const shuffledAlphabeth = shuffleArray(alphabetWithoutHiddenLetters);

  const numberOfRandomLettersToReturn =
    TOTAL_PROPOSITIONS - hiddenLetters.length;

  return shuffledAlphabeth.slice(0, numberOfRandomLettersToReturn);
};
