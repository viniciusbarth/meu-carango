import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const CarouselContainer = styled.View`
  width: 100%;
  height: 300px;
  background-color: #fff;
`;

export const Pagination = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
  align-self: center;
  margin-bottom: 20px;
`;

export const Dot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-horizontal: 5px;
`;

export const CardContainer = styled.View`
  width: 300px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.gray};
  border-width: 1px;
  margin-horizontal: 10px;
  overflow: hidden;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 150px;
  resizemode: cover;
`;

export const CardContent = styled.View`
  padding-horizontal: 10px;
  padding-vertical: 5px;
`;

export const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-vertical: 5px;
`;

export const CardText = styled.Text`
  font-size: 14px;
`;
