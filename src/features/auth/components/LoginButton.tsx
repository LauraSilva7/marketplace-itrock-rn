import React from "react";
import styled from "styled-components/native";

type Props = {
  title?: string;
  onPress: () => void;
  disabled?: boolean;
};

const LoginButton: React.FC<Props> = ({ title = "Ingresar", onPress, disabled }) => {
  return (
    <ButtonContainer onPress={onPress} disabled={disabled}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default LoginButton;

const ButtonContainer = styled.TouchableOpacity<{ disabled?: boolean }>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.muted : theme.colors.accent};
  padding: 14px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  align-items: center;
  width: 100%;
  opacity: ${({ disabled }) => (disabled ? 0.8 : 1)};
  transition:
    background-color 0.3s ease,
    opacity 0.3s ease;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`;
