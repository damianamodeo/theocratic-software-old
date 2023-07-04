import { auth } from "@SERVICES/firebase/config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useContext, useState, useEffect, createContext } from "react";

export const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);

  const provider = new GoogleAuthProvider();
  1;
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => result)
      .catch((error) => {
        console.log(error);
      });
  };

  const logOut = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: any = {
    signIn,
    currentUser,
    logOut,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
