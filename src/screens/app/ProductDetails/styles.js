import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create ({
  container: {  
    marginHorizontal: 0,
  },
  image: {
    width: width,
    height: height * 0.55,
    objectFit: "cover",
  },
  content: {
    boxSize: "border-box",
    padding: 20,
    backgroundColor: colors.white,
    width: width,
    height: height * 0.45,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    marginTop: -20,
    scrollEnabled: true,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.black,
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.black,
    marginVertical: 8,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.grey,
    lineHeight: 24,
  },
});
