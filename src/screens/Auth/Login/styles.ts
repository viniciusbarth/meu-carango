import React from 'react';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-left: ${theme.spaces.regular};
    font-size: ${theme.fontsize.xxl};
    align-self: flex-start;
  `}
`;

export const Form = styled.View`
  width: 92%;
  ${({ theme }) => css`
    margin-top: ${theme.spaces.regular};
  `}
`;

export const InputContainer = styled.View`
  margin-bottom: 20px;
`;

export const InputLabel = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 18px;
`;

export const PasswordInput = styled.TextInput`
  margin-bottom: 20px;
  border-radius: 6px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  height: 52px;
  background-color: black;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
 ${({ theme }) => css`
    margin-top: ${theme.spaces.regular};
    color: ${theme.colors.white};
    font-size: 18px;
    text-align: center;
  `}
`;
