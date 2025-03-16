import { ImageSourcePropType } from "react-native";

export enum TriedState {
  NOT_TRIED = "not_tried",
  TRIED_AND_FALSE = "tried_and_false",
  TRIED_AND_TRUE = "tried_and_true",
}

export type PropositionsState = {
  letter: string;
  triedState: TriedState;
};

export type GameData = {
  completeWord: string;
  lettersToHide: string[];
  otherRandomAnswers: string[];
  incompleteWord: string[];
  allPossibleAnswers: string[];
  images: ImageSourcePropType[];
};
