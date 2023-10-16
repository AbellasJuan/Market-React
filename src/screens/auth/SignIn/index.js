import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import GoogleLogin from '../../../components/GoogleLogin';
import Input from '../../../components/Input';
import Separator from '../../../components/Separator';
import { styles } from './styles';

const SignIn = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader title="Sign In" onBackPress={() => navigation.goBack()} />
        <View style={styles.inputContainer}>
          <Input label="E-mail" placeholder="example@gmail.com" />
          <Input label="Password" placeholder="*********" isPassword={true} />
        </View>

        <Button title="Sign In" style={styles.button} />

        <Separator />

        <GoogleLogin />

        <Text style={styles.loginText}>
          Don't have an account?
          <Text
            activeOpacity={0.6}
            onPress={() => navigation.navigate('SignUp')}
            style={styles.loginTextBold}>
            {' '}
            Sign up
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
