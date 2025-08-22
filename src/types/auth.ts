export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};
 export interface UseAuthReturn {
  isLoggedIn: boolean;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  error: string | null;
}
export interface UserState {
  username?: string;
  token?: string;
  isLoggedIn: boolean;
}

export interface LoginPayload {
  username: string;
  token?: string;
}