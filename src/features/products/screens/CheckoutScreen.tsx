import CancelButton from "@/src/components/ui/CancelButton";
import FinalizeButton from "@/src/components/ui/FinalizeButton";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Snackbar } from "react-native-paper";
import { useTheme } from "styled-components/native";
import {
  Container,
  Form,
  Header,
  Input,
  Row,
  SafeArea,
  Separator,
  SnackbarText,
  SnackbarWrapper,
  Subtitle,
  Title,
} from "../CheckoutStyles";
import CheckoutCard from "../components/CheckoutCard";

type RootStackParamList = {
  ProductsList: undefined;
  Checkout: undefined;
};

export default function CheckoutScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const theme = useTheme();

  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardHolder, setCardHolder] = useState<string>("");
  const [expiry, setExpiry] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

  const formatExpiry = (text: string) => {
    const cleaned = text.replace(/\D/g, "").slice(0, 4);
    return cleaned.length >= 3 ? cleaned.slice(0, 2) + "/" + cleaned.slice(2) : cleaned;
  };

  const handleBuy = () => {
    if (!cardNumber || !cardHolder || !expiry || !cvv) {
      setSnackbarMessage("Por favor completa todos los campos");
      setSnackbarVisible(true);
      return;
    }

    setSnackbarMessage("¡Compra realizada con éxito!");
    setSnackbarVisible(true);

    setCardNumber("");
    setCardHolder("");
    setExpiry("");
    setCvv("");

    setTimeout(() => {
      setSnackbarVisible(false);
      navigation.navigate("ProductsList");
    }, 2000);
  };

  return (
    <SafeArea>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <Container>
          <Header>
            <Title>Finalizar compra</Title>
            <Subtitle>Ingresa tus datos de pago</Subtitle>
          </Header>
          <Separator />

          <CheckoutCard
            cardNumber={cardNumber}
            cardHolder={cardHolder}
            expiry={expiry}
            cvv={cvv}
            isFlipped={isFlipped}
          />

          <Form>
            <Input
              placeholder="Número de tarjeta"
              keyboardType="numeric"
              maxLength={16}
              value={cardNumber}
              onChangeText={(text) => setCardNumber(text.replace(/\s/g, ""))}
            />
            <Input
              placeholder="Nombre del titular"
              value={cardHolder}
              onChangeText={setCardHolder}
            />
            <Row>
              <Input
                placeholder="MM/AA"
                keyboardType="numeric"
                maxLength={5}
                value={expiry}
                onChangeText={(text) => setExpiry(formatExpiry(text))}
                style={{ flex: 1, marginRight: 10 }}
              />
              <Input
                placeholder="CVV"
                maxLength={3}
                keyboardType="numeric"
                value={cvv}
                onChangeText={setCvv}
                onFocus={() => setIsFlipped(true)}
                onBlur={() => setIsFlipped(false)}
                style={{ flex: 1 }}
              />
            </Row>

            <FinalizeButton onPress={handleBuy} />

            <CancelButton title="Cancelar" onPress={() => navigation.goBack()} />
          </Form>

          <SnackbarWrapper>
            <Snackbar
              visible={snackbarVisible}
              onDismiss={() => setSnackbarVisible(false)}
              duration={2000}
              style={{
                backgroundColor: theme.colors.success,
                borderRadius: theme.borderRadius.md,
              }}
            >
              <SnackbarText>{snackbarMessage}</SnackbarText>
            </Snackbar>
          </SnackbarWrapper>
        </Container>
      </KeyboardAvoidingView>
    </SafeArea>
  );
}
