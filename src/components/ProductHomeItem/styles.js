import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create ({
  container: {
    width: 150,
    backgroundColor: colors.orange,
  },
  title: {
    marginTop: 10,
    color: colors.black,
  },
  price: {
    marginTop: 5,
    color: colors.black,
  },
  image:{
    width: 157,
    height: 200,
    borderRadius: 15,
  }
});
