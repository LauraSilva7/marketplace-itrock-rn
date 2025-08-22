import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import { useTheme } from "styled-components/native";
import ProfileButton from "../components/ui/ProfileButton";
import { HeaderText } from "../components/ui/Typography";
import FeedScreen from "../features/feed/screens/FeedScreen";
import { RootState } from "../store/store";
import ProductsStack from "./ProductsStack";
import { MainTabParamList } from "./types";

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const username = useSelector((state: RootState) => state.user.username);
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const getTabBarVisibility = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "ProductsList";
    return routeName !== "Checkout";
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerRight: () => <ProfileButton />,
        headerTitle: () => <HeaderText>Hola, {username}</HeaderText>,
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: theme.colors.card,
          shadowColor: "transparent",
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.border,
        },
        headerTintColor: theme.colors.primary,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.muted,
        tabBarLabelStyle: {
          fontSize: theme.fontSizes.xs,
          fontFamily: theme.fontFamily.semibold,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.card,
          borderTopWidth: 0,
          paddingBottom: insets.bottom,
          elevation: 8,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = "ellipse";

          if (route.name === "Feed") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "ProductsStack") {
            iconName = focused ? "bag" : "bag-outline";
          }

          return <Ionicons name={iconName as any} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{ tabBarLabel: "Comunidad" }}
      />
      <Tab.Screen
        name="ProductsStack"
        component={ProductsStack}
        options={({ route }) => ({
          headerShown: getTabBarVisibility(route),
          tabBarStyle: getTabBarVisibility(route)
            ? undefined
            : { display: "none" },
          headerTitle: "Tienda",
          tabBarLabel: "Tienda",
        })}
      />
    </Tab.Navigator>
  );
}