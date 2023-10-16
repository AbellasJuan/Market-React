import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Favorites from './src/screens/app/Favorites';
import Home from './src/screens/app/Home';
import Profile from './src/screens/app/Profile';
import SignIn from './src/screens/auth/SignIn';
import SignUp from './src/screens/auth/SignUp';
import Splash from './src/screens/auth/Splash';

import { colors } from './src/utils/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({ 
        
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          
          if (route.name === 'Home') {
            icon = focused ? require('./src/assets/home-active.png') : require('./src/assets/home.png');
          } else if (route.name === 'Favorites') {
            icon = focused ? require('./src/assets/marker-active.png') : require('./src/assets/marker.png');
          } else if (route.name === 'Profile') {
            icon = focused ? require('./src/assets/profile-active.png') : require('./src/assets/profile.png');
          }
    return <Image style={{ width: 24, height: 24 }} source={icon} />;
  },
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.grey,
    paddingLeft: 50,
    paddingRight: 50,
  },
})}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

function App() {
  const isSignedIn = true;

  const whiteTheme = {
    colors: {
      backgroundColor: colors.white,
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={whiteTheme}>
        <Stack.Navigator >
          {isSignedIn ? (
            <>
              <Stack.Screen
              
                name="Tabs"
                component={Tabs}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
