import React from 'react';
import { ScrollView } from 'react-native';
import SignIn from './src/screens/auth/SignIn';
import { colors } from './src/utils/colors';

function App(): JSX.Element {
 
  return (
    <ScrollView style={{padding: 16, backgroundColor: colors.white}}>
      {/* <Splash /> */}
      {/* <SignUp /> */}
      <SignIn/>
    </ScrollView>
  );
};

export default App;
