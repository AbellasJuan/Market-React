import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create ({
  container: {  
    display: 'flex',
    flexDirection: 'row',
  },
  image:{
    width: 100,
    height: 100,
    objectFit: 'contain',
    borderRadius: 12,
  },
  textBox: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    color: colors.black,
  },
  price: {
    paddingBottom: 15,
    color: colors.black
  },
  remove: {
    width: 20,
    marginRight: 5,
  }
});
