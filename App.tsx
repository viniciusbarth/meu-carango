import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { LoginScreen } from '@screens/Auth/Login';

export default function App() {
  return <LoginScreen></LoginScreen>;
}
