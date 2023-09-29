import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Button from "../../../components/Button";
import { styles } from "./styles";

const Splash = () => {
  return(
    <View style={styles.container}>
      <Image resizeMode='contain' style={styles.image} source={require('../../../assets/splash_image.png')} />
      <View>
        <Text style={styles.title}>You'll find </Text>
        <Text style={styles.innerTitle}>all you need</Text>
        <Text style={styles.title}>here!</Text>
      </View>
      <Button title="Sign Up"/>
      <Pressable hitSlop={2} >
        <Text style={styles.footerText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
