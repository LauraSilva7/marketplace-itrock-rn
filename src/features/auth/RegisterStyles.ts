import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
  text-align: center;
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: 14px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

export const LinkText = styled.Text`
  color: ${({ theme }) => theme.colors.success};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.md}px;
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
`;