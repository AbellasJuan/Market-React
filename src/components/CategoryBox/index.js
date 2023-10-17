import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

const CategoryBox = ({title, image, onPress}) => {

  return(
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image}/>
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default React.memo(CategoryBox);