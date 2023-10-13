import React, { useState } from "react"
import { Text, View } from "react-native"
import Button from "../../../components/Button"
import Checkbox from "../../../components/Checkbox"
import GoogleLogin from "../../../components/GoogleLogin"
import Input from "../../../components/Input"
import Separator from "../../../components/Separator"
import { styles } from "./styles"

const SignUp = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  
  return (
    <View style={styles.container}>        
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
          <Text onPress={() => navigation.navigate("SignUp")} style={styles.loginTextBold}> Sign in</Text>
        </Text>
    </View>
  )
}

export default SignUp;