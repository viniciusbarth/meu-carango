import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type AlertProps = {
  title: string;
  description: string;
  variant: 'Success' | 'Error';
  action: () => void;
  actionTitle: string;
};

const renderIcon = (variant: AlertProps['variant']) => {
  if (variant === 'Success') {
    return (
      <S.IconMaterial
        variant={variant}
        name="check-circle-outline"
        size={140}
      />
    );
  }
  return (
    <S.IconMaterial variant={variant} name="alert-circle-outline" size={140} />
  );
};

export const Alert = ({
  title,
  description,
  actionTitle,
  action,
  variant,
}: AlertProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.ContainerIcon>{renderIcon(variant)}</S.ContainerIcon>
      <S.Description>{description}</S.Description>
      <S.Button onPress={() => action}>
        <S.ButtonText>{actionTitle}</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};
