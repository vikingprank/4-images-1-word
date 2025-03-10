const PERCENTAGE_OF_LETTERS_TO_HIDE = 0.6

export const determineNumberOfLettersToHide = (word: string) => {
    const numberOfLetters = word.length
    const numberOfLettersToHide = Math.round(numberOfLetters * PERCENTAGE_OF_LETTERS_TO_HIDE)
    return numberOfLettersToHide
}