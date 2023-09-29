import React, { useState } from "react"
import { Text, View } from "react-native"
import AuthHeader from "../../../components/AuthHeader"
import Button from "../../../components/Button"
import Checkbox from "../../../components/Checkbox"
import GoogleLogin from "../../../components/GoogleLogin"
import Input from "../../../components/Input"
import Separator from "../../../components/Separator"
import { styles } from "./styles"

const SignUp = () => {
  const [checked, setChecked] = useState(false);

  const onSignIn = () => {
    console.log('hey');
  };
  
  return (
    <View style={styles.container}>
        <AuthHeader title="Sign Up" />
        
        <View style={styles.inputContainer}>
          <Input label="Name" placeholder="John Doe"/>
          <Input label="E-mail" placeholder="example@gmail.com"/>
          <Input label="Password" placeholder="*********" isPassword={true}/>
        </View>
        
        <View style={styles.agreeRow}>
          <Checkbox checked={checked} onCheck={setChecked}/>
          <Text style={styles.checkboxText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
        </View>

        <Button title="Sign Up" style={styles.button} />
        
        <Separator/>

        <GoogleLogin/>

        <Text style={styles.loginText}> 
          Already have an account? 
          <Text activeOpacity={0.6} onPress={onSignIn} style={styles.loginTextBold}> Sign in</Text>
        </Text>
    </View>
  )
}

export default SignUp;