import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';

const FavoriteItem = ({ title, image, onPress, price }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <Pressable>
        <Image source={require('../../assets/exclude-icon.png')} style={styles.remove}/>
      </Pressable>
    </Pressable>
  );
};

export default React.memo(FavoriteItem);
