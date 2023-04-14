import React from 'react';
import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type IconProps = {
  name: string;
  color: string;
  size?: number;
  variant?: 'Success' | 'Error';
};

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-left: ${({ theme }) => theme.spaces.regular};
  font-size: ${({ theme }) => theme.fontsize.xxl};
`;

export const Description = styled.Text`
  margin-left: ${({ theme }) => theme.spaces.regular};
  margin-top: ${({ theme }) => theme.spaces.regular};
  font-size: ${({ theme }) => theme.fontsize.md};
`;

export const Button = styled.TouchableOpacity`
  height: 52px;
  background-color: black;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spaces.regular};
  margin-left: ${({ theme }) => theme.spaces.regular};
  margin-right: ${({ theme }) => theme.spaces.regular};
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 18px;
    text-align: center;
  `}
`;

export const ContainerIcon = styled.View`
  display: flex;
  align-items: center;
`;

export const IconMaterial = styled(Icon).attrs((props: IconProps) => ({
  size: props.size || 140,
  variant: props.variant,
}))`
  color: ${(props) => (props.variant === 'Success' ? '#4CAF50' : '#F44336')};
`;
