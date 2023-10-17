import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create ({
  container: {
   marginHorizontal: 8,
  },
  title: {
    textAlign: 'center',
    color: colors.grey,
  },
  image:{
    width: 32,
    height: 32,
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: colors.lightGrey,
    padding: 8,
    borderRadius: 10,
  },
});