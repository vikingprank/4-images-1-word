export const filterOutHiddenLetters = (
  word: string,
  lettersToHide: Array<string>
) => {
    // TODO: throw error if letters to hide are not in word
  const wordArray = [...word];
  const deepCopyLettersToHide = [...lettersToHide]

  wordArray.forEach((letter, indexWordArray) => {
    for (let indexLetterToHide = 0; indexLetterToHide < deepCopyLettersToHide.length; indexLetterToHide++) {
      if (letter === deepCopyLettersToHide[indexLetterToHide]) {
        wordArray[indexWordArray] = "_";
        deepCopyLettersToHide[indexLetterToHide] = "_";
        break;
      }
    }
  });

  return wordArray;
};
