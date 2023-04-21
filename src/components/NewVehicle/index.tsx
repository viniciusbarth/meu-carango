import React from 'react';

import * as S from './styles';
import { TouchableOpacity } from 'react-native';

export const NewVehicle = () => {
  return (
    <TouchableOpacity>
      <S.IconMaterial size={72} name={'plus-circle-outline'} />
    </TouchableOpacity>
  );
};
