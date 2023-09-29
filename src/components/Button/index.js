import React, { memo } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Button = ({title, onPress, style}) => {
  return(
    <TouchableOpacity activeOpacity={0.6} hitSlop={1} onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.text} >{title}</Text>
    </TouchableOpacity>
  );

};

export default memo(Button);