import React from 'react';

import { Alert } from '@components/Alert';
import { Menu } from '@components/Menu';
import { CreateAccount } from '@screens/Auth/CreateAccount';
import { LoginScreen } from '@screens/Auth/Login';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Home } from './src/screens/Home';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <Menu />
      <Home />
    </ThemeProvider>
  );
}
