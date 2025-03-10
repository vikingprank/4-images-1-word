export const checkIfCompleted = (
  word1: Array<string>,
  word2: Array<string>
) => {
  if (word1.length !== word2.length) return false;
  return word1.every((value, index) => value === word2[index]);
};
