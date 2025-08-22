import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";

interface BuyButtonProps {
  title: string;
  onPress: () => void;
}

export default function BuyButton({ title, onPress }: BuyButtonProps) {
  return (
    <ButtonContainer onPress={onPress}>
      <Ionicons name="cart-outline" size={16} color="#fff" />
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.md}px;
  border-radius: 999px;
  align-self: center;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.semibold};
  margin-left: 6px;
`;
