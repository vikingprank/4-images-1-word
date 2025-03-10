import { shuffleArray, shuffleWord } from "./shuffleLetters";

const TOTAL_PROPOSITIONS = 12;

const ALPHABET = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
export const randomlyChooseExtraLetters = (hiddenLetters: Array<string>) => {
  const alphabetWithoutHiddenLetters = ALPHABET.flatMap((letter: string) => {
    return hiddenLetters.map((hiddenLetter) => {
      if (letter.toLocaleUpperCase() !== hiddenLetter.toLocaleUpperCase())
        return letter.toLocaleUpperCase();
    });
  });

  // Remove doubles
  const uniqLettersArray = [...new Set(alphabetWithoutHiddenLetters)];

  // Remove undefined
  const definedLettersArray = uniqLettersArray.filter(
    (letter) => letter !== undefined
  );

  const shuffledAlphabeth = shuffleArray(definedLettersArray);

  const numberOfRandomLettersToReturn =
    TOTAL_PROPOSITIONS - hiddenLetters.length;

  return shuffledAlphabeth.slice(0, numberOfRandomLettersToReturn);
};
