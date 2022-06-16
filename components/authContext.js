import React, { useContext, useState, useEffect } from "react";
import { auth, firestore } from "../firebaseConfig";
import Router from "next/router";

const AuthContext = React.createContext();
export default function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const logIn = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password);
    return Router.push("/");
  };
  const signUp = async (email, twitter, telegram, password) => {
    return await auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (user) => {
        await firestore
          .collection("users")
          .doc(user.user.uid)
          .set({ twitter: twitter, telegram: telegram });
        return Router.push("/");
      });
  };
  const logOut = () => {
    auth.signOut();
    return window.location.reload();
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      console.log(user);
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    logIn,
    logOut,
    signUp,
  };
  return (
    <AuthContext.Provider value={value}>
      {loading || children}
    </AuthContext.Provider>
  );
}
