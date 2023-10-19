import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { colors } from '../../utils/colors';
import { styles } from './styles';

const CategoryBox = ({ title, image, onPress, isSelected }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View
        style={[
          styles.imageContainer,
          isSelected && { backgroundColor: colors.black },
        ]}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <Text
        style={[
          styles.title,
          isSelected && { color: colors.blue, fontWeight: 'bold' },
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default React.memo(CategoryBox);
