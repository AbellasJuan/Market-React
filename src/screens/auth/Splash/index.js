import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Button from "../../../components/Button";
import { styles } from "./styles";

const Splash = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Image resizeMode='contain' style={styles.image} source={require('../../../assets/splash_image.png')} />
      <View>
        <Text style={styles.title}>You'll find </Text>
        <Text style={styles.innerTitle}>all you need</Text>
        <Text style={styles.title}>here!</Text>
      </View>
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")}/>
      <Pressable hitSlop={2} >
        <Text onPress={() => {navigation.navigate("SignIn")}} style={styles.footerText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
