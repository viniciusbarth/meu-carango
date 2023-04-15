import { Home } from './src/screens/Home';
import { LoginScreen } from '@screens/Auth/Login';
import theme from './src/theme';
import { ThemeProvider } from 'styled-components/native';
import { CreateAccount } from '@screens/Auth/CreateAccount';
import { Alert } from '@components/Alert';
import { Menu } from '@components/Menu';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <Menu />
      <Alert
        action={() => {}}
        actionTitle="Teste button"
        description="deu merda"
        title="Cadastro"
        variant="Success"
      />
    </ThemeProvider>
  );
}
