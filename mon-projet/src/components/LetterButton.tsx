import { TouchableOpacity, Text } from "react-native";
import { FONT_SIZE } from "../../App";

export const LetterButton: React.FC<{
  letter: string;
}> = ({ letter }) => (
  <TouchableOpacity onPress={() => console.log({ letter })}>
    <Text
      style={{
        borderWidth: 1,
        borderRadius: 2,
        fontSize: FONT_SIZE,
        padding: 3,
        margin: 3,
      }}
    >
      {letter}
    </Text>
  </TouchableOpacity>
);
