import { StyleSheet, Text, View } from 'react-native';

import * as S from './styles';

export function Home() {
  return (
    <S.View>
      <Text>Home</Text>
    </S.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
