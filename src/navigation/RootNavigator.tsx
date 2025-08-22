import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import SplashScreen from "../components/ui/SplashScreen";
import { useAuth } from "../hooks/useAuth";
import AuthStack from "./AuthStack";
import MainTabNavigator from "./MainTabNavigator";

export default function RootNavigator() {
  const { isLoggedIn, loading } = useAuth();

  if (loading) return <SplashScreen />;

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainTabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}
