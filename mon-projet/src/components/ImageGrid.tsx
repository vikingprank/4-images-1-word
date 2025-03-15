import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";
import { RowView } from "./RowView";

export const ImageGrid: React.FC<{ images: ImageSourcePropType[] }> = ({
  images,
}: {
  images: ImageSourcePropType[];
}) => {
  return (
    <View>
      <RowView>
        <Image source={images[0]} style={styles.image} />
        <Image source={images[1]} style={styles.image} />
      </RowView>
      <RowView>
        <Image source={images[2]} style={styles.image} />
        <Image source={images[3]} style={styles.image} />
      </RowView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
    margin: 5,
    borderColor: "#363F53",
    borderWidth: 5,
  },
});
