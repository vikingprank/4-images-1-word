export const completeOneLetter = (
  wordToGuess: string,
  wordWithUnderScores: string,
  proposition: string
) => {
  const wordToGuessArray = [...wordToGuess];
  const wordWithUnderScoresArray = [...wordWithUnderScores];

  for (let index = 0; index < wordWithUnderScoresArray.length; index++) {
    const currentLetter = wordWithUnderScoresArray[index];
    if (currentLetter === "_" && wordToGuessArray[index] === proposition) {
      wordWithUnderScoresArray[index] = proposition;
      return wordWithUnderScoresArray;
    }
  }

  return wordWithUnderScoresArray;
};
