import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {},
  label: {
    marginBottom: 8,
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 14,
    borderColor: colors.grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  input: {
    height: 50,
    color: colors.black,
    flex: 1,
  },
  eye:{
    width: 25,
    height: 25,
  }
  
});