import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase/firebase";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const firebaseAuth = useFirebaseAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { setUser } = firebaseAuth;
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ ...firebaseAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
