export const isPropositionCorrect = (
  hiddenLetters: Array<string>,
  proposition: string
) => {
  return hiddenLetters.some((letter) => letter === proposition);
};
