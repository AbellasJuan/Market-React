import React from "react";
import { Image, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

const ProductDetails = ({route}) => {

  const {product} = route?.params || {};

  return(
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Image source={{uri: product?.image}} style={styles.image}/>
        <ScrollView style={styles.content}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{product?.price}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetails);