import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";

interface Props {
  height: number;
  onScrollDown: () => void;
}

export default function FeedHeader({ height, onScrollDown }: Props) {
  return (
    <Background
      source={require("../../../../assets/images/comunity-header.jpg")}
      style={{ height }}
    >
      
        <Title>COMUNIDAD</Title>
        <CommentButton onPress={onScrollDown}>
          <Ionicons name="chevron-down-outline" size={20} color="#fff" />
      
        </CommentButton>
     
    </Background>
  );
}

const Background = styled.ImageBackground`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  padding: ${({ theme }) => theme.spacing.md}px ${({ theme }) => theme.spacing.lg}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  align-items: center;
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  color: ${({ theme }) => theme.colors.buttonText};
  text-align: center;
`;

const CommentButton = styled.TouchableOpacity`
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.xs}px ${({ theme }) => theme.spacing.sm}px;
  border-radius: ${({ theme }) => theme.borderRadius.pill}px;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.semibold};
  margin-left: 6px;
`;