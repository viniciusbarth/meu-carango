import React from 'react';
import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type IconProps = {
  name: string;
  color: string;
  size?: number;
  variant?: 'Success' | 'Error';
};

export const ViewMenu = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-top: ${theme.spaces.regular};
    padding: 0px ${theme.spaces.regular};
    background-color: ${theme.colors.white};
    border-bottom-width: 1px;
    border-color: ${theme.colors.grayLight};
  `}
`;

export const IconMaterial = styled(Icon).attrs((props: IconProps) => ({
  size: props.size,
  variant: props.variant,
}))``;
