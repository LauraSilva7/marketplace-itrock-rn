import { useAuth } from "@/src/hooks/useAuth";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";

export default function ProfileButton() {
  const { logout } = useAuth();

  const handleLogout = () => {
    Alert.alert("Cerrar sesión", "¿Estás segura que querés cerrar sesión?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Cerrar sesión",
        style: "destructive",
        onPress: async () => {
          await logout();
        },
      },
    ]);
  };

  return (
    <Button onPress={handleLogout}>
      <Ionicons name="person-outline" size={16} color="#fff" />
    </Button>
  );
}

// Styled components
const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.xs}px ${({ theme }) => theme.spacing.sm}px;
  border-radius: ${({ theme }) => theme.borderRadius.pill}px;
  margin-right: ${({ theme }) => theme.spacing.md}px;
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-left: 4px;
`;
