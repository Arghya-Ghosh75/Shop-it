import { createContext, useContext, useReducer } from "react";
import { loginReducer } from "../reducers/login-reducers";

/* -------------------- INITIAL STATE -------------------- */
const token = localStorage.getItem("accessToken");

const initialState = {
  isAuthenticated: !!token,
  user: token
    ? {
        token,
      }
    : null,
};

/* -------------------- CONTEXT -------------------- */
const LoginContext = createContext(null);

/* -------------------- PROVIDER -------------------- */
const LoginProvider = ({ children }) => {
  const [{ isAuthenticated, user }, loginDispatch] = useReducer(
    loginReducer,
    initialState
  );

  return (
    <LoginContext.Provider
      value={{
        isAuthenticated,
        user,
        loginDispatch,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

/* -------------------- HOOK -------------------- */
const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin must be used inside LoginProvider");
  }
  return context;
};

export { LoginProvider, useLogin };
