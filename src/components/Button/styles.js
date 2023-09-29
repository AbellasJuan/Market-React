import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.blue,
      borderRadius: 8,
      paddingVertical: 16,
      paddingHorizontal: 8
    },
    text: {
      color: colors.white,
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    }
});