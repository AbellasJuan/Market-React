import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    padding: 20,
  },
  inputContainer:{
    gap: 15,
    marginTop: 0,
  },
  agreeRow:{
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText:{
    fontSize: 14,
    fontWeight: '400',
    color: colors.blue,
    marginLeft: 10
  },
  agreeTextBold:{
    fontWeight: '700'
  },
  button: {
    marginVertical: 20
  },
  loginText:{
    color: colors.blue,
    textAlign: 'center',
    marginBottom: 50,
  },
  loginTextBold:{
    fontWeight: '700',
  },
});
