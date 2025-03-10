import { ReactNode } from "react";
import { View } from "react-native";

export const RowView: React.FC<{
  children: ReactNode;
  width?: number;
}> = ({ children, width }) => (
  <View style={{ flexDirection: "row", width, justifyContent: "center" }}>
    {children}
  </View>
);
