import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/slices/userSlice";
import { AppDispatch, RootState } from "../store/store";
import { UseAuthReturn } from "../types/auth";

export const STORAGE_KEYS = {
  USER_TOKEN: "userToken",
  USER_NAME: "userName",
};

export const useAuth = (): UseAuthReturn => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const token = await AsyncStorage.getItem(STORAGE_KEYS.USER_TOKEN);
        const username = await AsyncStorage.getItem(STORAGE_KEYS.USER_NAME);
        if (token && username) {
          dispatch(login({ username, token }));
        }
      } catch (err) {
        setError("Error al verificar sesión");
        console.error(err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    checkSession();
  }, [dispatch]);

  const handleLogin = async (username: string, password: string) => {
    try {
      if (username === "admin" && password === "1234") {
        const token = "admin-token";
        await AsyncStorage.setItem(STORAGE_KEYS.USER_TOKEN, token);
        await AsyncStorage.setItem(STORAGE_KEYS.USER_NAME, username);
        dispatch(login({ username, token }));
        return;
      }

      const storedUsername = await AsyncStorage.getItem(STORAGE_KEYS.USER_NAME);
      const storedToken = await AsyncStorage.getItem(STORAGE_KEYS.USER_TOKEN);

      if (username === storedUsername && storedToken) {
        dispatch(login({ username, token: storedToken }));
      } else {
        throw new Error("Credenciales inválidas");
      }
    } catch (err) {
      setError("Error al iniciar sesión");
      console.error(err);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.USER_TOKEN);
      await AsyncStorage.removeItem(STORAGE_KEYS.USER_NAME);
      dispatch(logout());
    } catch (err) {
      setError("Error al cerrar sesión");
      console.error(err);
    }
  };

  return {
    isLoggedIn,
    loading,
    login: handleLogin,
    logout: handleLogout,
    error,
  };
};