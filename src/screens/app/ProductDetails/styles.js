import { Dimensions, StyleSheet } from "react-native";

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
});
