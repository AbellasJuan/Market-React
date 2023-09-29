import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const GoogleLogin = () => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => {console.log('login google')}} style={styles.container}>
      <Image style={styles.image} source={require("../../assets/gmail.png")}/>
    </TouchableOpacity>
  );
};

export default GoogleLogin;