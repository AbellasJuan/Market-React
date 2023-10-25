import React from "react";
import { Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

const ProductDetails = ({route}) => {

  const {product} = route?.params || {};

  return(
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Image source={{uri: product?.image}} style={styles.image}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetails);