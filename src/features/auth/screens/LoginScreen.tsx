import { useAuth } from "@/src/hooks/useAuth";
import { AuthStackParamList } from "@/src/types/auth";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import {
  Container,
  Input,
  LinkText,
  SafeArea,
  Title,
} from "../LoginStyles";
import LoginButton from "../components/LoginButton";

export default function LoginScreen() {
 const navigation = useNavigation<NavigationProp<AuthStackParamList>>();


  const { login, loading, error } = useAuth();
const [username, setUsername] = useState<string>("");
const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Por favor completá todos los campos");
      return;
    }

    try {
      await login(username, password);
    } catch (err) {
      Alert.alert("Error", error || "Ocurrió un error al iniciar sesión");
    }
  };

  return (
    <SafeArea>
      <Container>
        <Title>Iniciar Sesión</Title>
        <Input
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <Input
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry
        />
        <LoginButton
          title={"Ingresar"}
          onPress={handleLogin}
          disabled={loading}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <LinkText>¿No tenés cuenta? Registrate acá</LinkText>
        </TouchableOpacity>

      </Container>
    </SafeArea>
  );
}