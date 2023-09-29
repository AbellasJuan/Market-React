import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const Checkbox = ({checked, onCheck}) => {
  return (
            <TouchableOpacity activeOpacity={0.6} onPress={() => onCheck(!checked)} style={styles.container}>
              {checked ? (
                <View style={styles.innerContainer}>
                  <Image source={require('../../assets/checkbox.png')} style={styles.checkIcon}/>
                </View>
              )
              : null
              }
            </TouchableOpacity>
  );
};

export default Checkbox;