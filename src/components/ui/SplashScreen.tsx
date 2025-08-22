import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import styled from "styled-components/native";

export default function SplashScreen() {
  return (
    <Gradient
      colors={["#0f172a", "#000"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <Overlay>
        <Title>COMUNIDAD</Title>
        <Subtitle>Tu espacio para compartir y descubrir</Subtitle>
      </Overlay>
    </Gradient>
  );
}
const Gradient = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.View`
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg}px;
`;

const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.buttonText};
  letter-spacing: 2px;
`;

const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  color: ${({ theme }) => theme.colors.buttonText};
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  text-align: center;
`;