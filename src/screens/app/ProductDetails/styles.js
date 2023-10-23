import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window');
console.log('LARGURA E ALTURA: ',width, height)

export const styles = StyleSheet.create ({
  container: {  
    marginHorizontal: 10,
  },
});
