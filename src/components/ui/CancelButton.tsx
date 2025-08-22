import React from "react";
import styled from "styled-components/native";

type Props = {
  title?: string;
  onPress: () => void;
};

export default function CancelButton({ title = "Cancelar", onPress }: Props) {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.border};
  padding: 14px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-family: ${({ theme }) => theme.fontFamily.semibold};
`;
