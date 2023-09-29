import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  image: {
    width: '100%',
    height: 180,
  },

  title: {
    color: colors.black,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  innerTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.orange,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },

  footerText: {
    color: colors.blue,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  }

});
