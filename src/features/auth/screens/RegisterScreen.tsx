import { login } from "@/src/store/slices/userSlice";
import { AppDispatch } from "@/src/store/store";
import { AuthStackParamList } from "@/src/types/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { Container, Input, LinkText, SafeArea, Title } from "../RegisterStyles";
import RegisterButton from "../components/RegisterButton";

export default function RegisterScreen() {
  const dispatch = useDispatch<AppDispatch>();

  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleRegister = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    const fakeToken = "654321";
    await AsyncStorage.setItem("userToken", fakeToken);
    dispatch(login({ username, token: fakeToken }));
  };

  return (
    <SafeArea>
      <Container>
        <Title>Registro</Title>
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
          secureTextEntry
        />
        <Input
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <RegisterButton onPress={handleRegister} />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <LinkText>¿Ya tienes cuenta? Inicia sesión</LinkText>
        </TouchableOpacity>
      </Container>
    </SafeArea>
  );
}
