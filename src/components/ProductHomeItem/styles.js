import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window');
console.log('LARGURA E ALTURA: ',width, height)

export const styles = StyleSheet.create ({
  container: {
    marginHorizontal: 10,
  },
  title: {
    paddingVertical: 3,
  },
  price: {
    paddingBottom: 15,
  },
  image:{
    width: (width-64)/2,
    height: 200,
    borderRadius: 12,
  }
});
