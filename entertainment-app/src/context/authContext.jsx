import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    Cookies.remove("token"); // Remove token from cookies
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const getUser = async () => {
      const token = Cookies.get("token");

      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const currentTime = Date.now() / 1000;

          if (decodedToken.exp < currentTime) {
            logout();
          } else {
            setIsLoggedIn(true);
          }
        } catch (error) {
          console.error("Error checking login status:", error);
          logout();
        }
      } else {
        setIsLoggedIn(false);
      }
    };

    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
