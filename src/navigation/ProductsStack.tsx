import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CheckoutScreen from "../features/products/screens/CheckoutScreen";
import ProductsScreen from "../features/products/screens/ProductsScreen";

export type ProductsStackParamList = {
  ProductsList: undefined;
  Checkout: { product: any };
};

const Stack = createNativeStackNavigator<ProductsStackParamList>();

export default function ProductsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProductsList" component={ProductsScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
}
