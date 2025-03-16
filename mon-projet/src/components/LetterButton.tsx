import { TouchableOpacity, Text } from "react-native";
import { TriedState } from "../types";

export const LetterButton: React.FC<{
  letter: string;
  letterState: TriedState;
  onCallBackPress: () => void;
}> = ({ letter, letterState, onCallBackPress }) => {
  return (
    <TouchableOpacity
      onPress={onCallBackPress}
      disabled={letterState !== TriedState.NOT_TRIED ? true : false}
    >
      <Text
        style={{
          textAlign: "center",
          width: 40,
          height: 40,
          borderWidth: 1,
          borderRadius: 10,
          fontSize: 20,
          fontWeight: "900",
          padding: 5,
          margin: 5,
          borderBottomColor: "darkgrey",
          borderBottomWidth: 3,
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
