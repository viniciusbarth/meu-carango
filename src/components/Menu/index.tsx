import React from 'react';

import { TouchableOpacity, Text } from 'react-native';

import * as S from './styles';

export const Menu = () => {
  return (
    <S.ViewMenu>
      <TouchableOpacity>
        <S.IconMaterial name="menu" size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <S.IconMaterial name="bell-outline" size={24} />
      </TouchableOpacity>
    </S.ViewMenu>
  );
};
