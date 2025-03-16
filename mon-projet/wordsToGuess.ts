import { ImageSourcePropType } from "react-native";

export type WordData = {
  word: string;
  images: ImageSourcePropType[];
};

export type WordsToGuess= {
    [key: string] : WordData
}

export const wordsToGuess: WordsToGuess = {
  word01: {
    word: "SLEEP",
    images: [
      require("./images/sleep1.jpeg"),
      require("./images/sleep2.jpeg"),
      require("./images/sleep3.jpeg"),
      require("./images/sleep4.jpeg"),
    ],
  },
  word02: {
    word: "FUNCTION",
    images: [
      require("./images/sleep1.jpeg"),
      require("./images/sleep2.jpeg"),
      require("./images/sleep3.jpeg"),
      require("./images/sleep4.jpeg"),
    ],
  },
  word03: {
    word: "MISAPPREHENSION",
    images: [
      require("./images/sleep1.jpeg"),
      require("./images/sleep2.jpeg"),
      require("./images/sleep3.jpeg"),
      require("./images/sleep4.jpeg"),
    ],
  },
  word04: {
    word: "HORIZONTAL",
    images: [
      require("./images/sleep1.jpeg"),
      require("./images/sleep2.jpeg"),
      require("./images/sleep3.jpeg"),
      require("./images/sleep4.jpeg"),
    ],
  },
};
