import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Input from "../Input";
import { styles } from "./styles";

const Header = ({title, onBackPress, onSearch, onLogout, showLogout, showSearch, showBack}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  // const onSearchClick = () => {
  //   setShowSearchInput(s => !s);
  // };

  return(
    <View>
    <View style={styles.container}>
      {showBack ? (
        <Pressable onPress={onBackPress} hitSlop={10}>
          <Image style={styles.icon} source={require('../../assets/back.png')}/>
        </Pressable>
      ) : showSearch ? (
        <Pressable onPress={() => {setShowSearchInput(!showSearchInput)}} hitSlop={10}>
          <Image style={styles.icon} source={require('../../assets/search.png')}/>
        </Pressable>
      ) : <View style={styles.space} />}
      
      <Text style={styles.title}>{title}</Text>
      
      {showLogout ? 
      (<Pressable onPress={onLogout} hitSlop={10}>
        <Image style={styles.icon} source={require('../../assets/logout.png')}/>
      </Pressable>
      ) : <View style={styles.space} />}
    </View>
      {showSearchInput ? 
      (
        <Input placeholder="Type your keyword..." />
      ) : null}

    </View>
  );
};

export default React.memo(Header);