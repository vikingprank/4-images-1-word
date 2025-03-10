import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import { FONT_SIZE, TriedState } from "../../App";
import { useState } from "react";

export const LetterButton: React.FC<{
  letter: string;
  letterState: TriedState;
  onCallBackPress: () => void;
}> = ({ letter, letterState, onCallBackPress }) => {
  return (
    <TouchableOpacity onPress={onCallBackPress}>
      <Text
        style={{
          borderWidth: 1,
          borderRadius: 2,
          fontSize: FONT_SIZE,
          padding: 3,
          margin: 3,
          backgroundColor:
            letterState === TriedState.NOT_TRIED
              ? "transparent"
              : letterState === TriedState.TRIED_AND_FALSE
              ? "red"
              : "green",
        }}
      >
        {letter}
      </Text>
    </TouchableOpacity>
  );
};
