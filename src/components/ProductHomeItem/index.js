import React from "react";
import { Image, Pressable, Text } from "react-native";
import { styles } from "./styles";

const ProductHomeItem = ({title, image, onPress, price}) => {

  return(
    <Pressable style={styles.container} onPress={onPress}>
        <Image source={{uri: image}} style={styles.image}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
    </Pressable>
  );
};

export default React.memo(ProductHomeItem);