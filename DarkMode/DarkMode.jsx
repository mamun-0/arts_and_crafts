import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

export const DarkModeContext = createContext(null);
export function DarkMode({ children }) {
  const { user } = useContext(AuthContext);
  const [isDark, setIsDark] = useState(false);
  function toggleDark() {
    setIsDark((curent) => {
      return !curent;
    });
  }
  useEffect(() => {
    if (user) {
      const displayEmail = user?.providerData[0].email;
      if (window.localStorage.getItem(displayEmail)) {
        setIsDark(window.localStorage.getItem(displayEmail));
      }
    }
  }, [user]);
  return (
    <DarkModeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}
