export const chooseLettersToHide = (
  word: string,
  numberOfLettersToHide: number
) => {
  const randomIndex = shuffleWord(word);
  return randomIndex.slice(0, numberOfLettersToHide);
};

function shuffleWord(word: string) {
  const wordArray = [...word]; // convert into array
  for (let i = wordArray.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; // The new ES6 allows us to assign two variables at once. This is especially handy when we want to swap the values of two variables
  }
  return wordArray;
}
