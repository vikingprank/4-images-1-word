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
          textAlign: 'center', 
          width: 40,
          borderWidth: 1,
          borderRadius: 10,
          fontSize: FONT_SIZE,
          padding: 5,
          margin: 5,
          backgroundColor:
            letterState === TriedState.NOT_TRIED
              ? "white"
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
