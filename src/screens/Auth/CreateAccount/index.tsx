import React, { useState } from 'react';
import * as S from './styles';

export const CreateAccount = () => {
  return (
    <S.Container>
      <S.Title>Criar conta</S.Title>

      <S.Form>
        <S.InputContainer>
          <S.InputLabel>Email</S.InputLabel>
          <S.Input
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={() => {}}
          />
        </S.InputContainer>

        <S.InputContainer>
          <S.InputLabel>Senha</S.InputLabel>
          <S.PasswordInput placeholder="Senha" secureTextEntry />
        </S.InputContainer>

        <S.InputContainer>
          <S.InputLabel>Repetir senha</S.InputLabel>
          <S.PasswordInput placeholder="Repetir senha" secureTextEntry />
        </S.InputContainer>

        <S.Button onPress={() => {}} testID="login-button">
          <S.ButtonText>Cadastrar</S.ButtonText>
        </S.Button>
      </S.Form>
    </S.Container>
  );
};
