import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from '@shopify/restyle';

import { Onboarding, Welcome } from './src/Authentication';
import { LoadAssets, theme } from './src/components';
import { Routes } from './src/components/Navigation';

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
};

const AuthenticationStack = createStackNavigator<Routes>();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  )
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}