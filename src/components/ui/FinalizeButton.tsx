import React from "react";
import styled from "styled-components/native";

type Props = {
  title?: string;
  onPress: () => void;
};

export default function FinalizeButton({ title = "Finalizar", onPress }: Props) {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.accent};
  padding: 14px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  align-items: center;
  width: 100%;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`;
