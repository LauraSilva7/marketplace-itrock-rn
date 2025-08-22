import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import {
  AnimatedCard,
  CardContainer,
  CardHolder,
  CardNumber,
  CardRow,
  CardType,
  CVVBox,
  CVVLabel,
  CVVText,
  Expiry,
} from "../CheckoutStyles";

type Props = {
  cardNumber: string;
  cardHolder: string;
  expiry: string;
  cvv: string;
  isFlipped: boolean;
};

export default function CheckoutCard({ cardNumber, cardHolder, expiry, cvv, isFlipped }: Props) {
  const flipAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(flipAnim, {
      toValue: isFlipped ? 180 : 0,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic),
    }).start();
  }, [isFlipped]);

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const getCardType = () => {
    if (cardNumber.startsWith("4")) return "Visa";
    if (cardNumber.startsWith("5")) return "Mastercard";
    return "Tarjeta";
  };

  const cardColor = () => {
    if (cardNumber.startsWith("4")) return "#1a1f71";
    if (cardNumber.startsWith("5")) return "#f79e1b";
    return "#111";
  };

  const formatCardNumber = (num: string) =>
    num
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();

  return (
    <CardContainer>
      <AnimatedCard
        style={{
          backgroundColor: cardColor(),
          transform: [{ rotateY: frontInterpolate }],
        }}
      >
        {!isFlipped && (
          <>
            <CardType>{getCardType()}</CardType>
            <CardNumber>{formatCardNumber(cardNumber) || "#### #### #### ####"}</CardNumber>
            <CardRow>
              <CardHolder>{cardHolder || "Nombre del titular"}</CardHolder>
              <Expiry>{expiry || "MM/AA"}</Expiry>
            </CardRow>
          </>
        )}
      </AnimatedCard>

      <AnimatedCard
        style={{
          backgroundColor: "#333",
          transform: [{ rotateY: backInterpolate }],
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isFlipped && (
          <>
            <CVVLabel>CVV</CVVLabel>
            <CVVBox>
              <CVVText>{cvv || "***"}</CVVText>
            </CVVBox>
          </>
        )}
      </AnimatedCard>
    </CardContainer>
  );
}
