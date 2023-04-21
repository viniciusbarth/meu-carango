import styled from 'styled-components/native';

export const View = styled.View`
  align-items: flex-start;
  padding: 16px;
`;

export const Text = styled.Text`
  font-size: 36px;
`;

export const PathText = styled.Text`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 16px;
`;

export const RecentExpensesTitle = styled.Text`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 16px;
`;
