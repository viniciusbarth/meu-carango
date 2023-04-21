import * as S from './styles';

import { NewVehicle } from '@components/NewVehicle';

export function Home() {
  return (
    <S.View>
      <S.Text>Meu carango</S.Text>

      <S.PathText>Veículos</S.PathText>
      <NewVehicle />
    </S.View>
  );
}
