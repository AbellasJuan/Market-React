import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignIn from './src/screens/auth/SignIn';
import SignUp from './src/screens/auth/SignUp';
import Splash from './src/screens/auth/Splash';
import { colors } from './src/utils/colors';

const Stack = createNativeStackNavigator();

function App() {

  const whiteTheme = {
    colors: {
      background: colors.white, 
    }
  };

  return (
    <NavigationContainer theme={whiteTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
