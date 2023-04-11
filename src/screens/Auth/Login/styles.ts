import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

export const Title = styled.Text`
  margin-left: 16px;
  font-size: 36px;
  align-self: flex-start;
`;

export const Form = styled.View`
  width: 92%;
  margin-top: 16px;
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
  color: #fff;
  font-size: 18px;
  text-align: center;
`;
