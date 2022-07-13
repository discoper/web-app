import React, { useContext, useState, useEffect } from "react";
import { auth, firestore } from "../firebaseConfig";
import Router from "next/router";
import axios from "axios";
import Loading from "./Loading";
const AuthContext = React.createContext();
export default function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const logIn = async (email, password, agregarImagen) => {
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      if (!user.user.emailVerified)
        throw { message: "Por favor verifica tu correo" };
      await axios.post("/api/signInUser", {
        idToken: await user.user.getIdToken(),
      });
      return agregarImagen ? Router.push("/agregarImagen") : Router.push("/");
    } catch (err) {
      if (err.message === "Por favor verifica tu correo") {
        Router.push(
          `/verifyEmail?email=${user.email}
          }`
        );
      }
      if (err.code === "auth/wrong-password")
        throw { message: "Datos invalidos" };
      if (err.code === "auth/user-not-found")
        throw { message: "Usuario no existe" };

      throw err;
    }
  };
  const changeEmail = async (email) => {
    await currentUser.user.updateEmail(email);
  };
  const signUp = async (email, password, refLink, creador) => {
    try {
      let tries = 0;
      while (true) {
        if (tries == 3) break;
        try {
          tries++;
          const res = await axios.post("/api/register", {
            email,
            password,
            refLink,
            creador,
          });
          break;
        } catch (err) {
          console.log(err);
          if (
            err.response.data ===
            "The email address is already in use by another account."
          )
            throw err;
          throw { response: { data: "Algo salio mal, intente nuevamente" } };
        }
      }
      return Router.push(`/verifyEmail?email=${email}`);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  const logOut = async (goToStart) => {
    setLoading(true);
    await axios.get("/api/sessionLogout");
    await auth.signOut();
    setLoading(false);
    if (!goToStart) {
      return Router.push("/");
    }
  };
  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(async (user) => {
      if (user) {
        setLoading(true);
        try {
          let tries = 0;
          while (true) {
            if (tries == 3) break;
            try {
              tries++;
              await axios.post("/api/signInUser", {
                idToken: await user.getIdToken(),
              });
              break;
            } catch (err) {
              console.log(err);
            }
          }
          const firestoreUserDoc = await firestore
            .collection("users")
            .doc(user.uid)
            .get();
          if (!user.emailVerified) {
            setLoading(false);
            logOut(true);
            return Router.push(`/verifyEmail?email=${user.email}`);
          }
          setCurrentUser({ user, ...firestoreUserDoc.data() });
          setLoading(false);
        } catch (err) {
          console.log(err);
          logOut();
          setLoading(false);
        }
        return;
      }
      setCurrentUser(user);
      setLoading(false);

      console.log(user);
    });
    return unsubscribe;
  }, []);
  const changeUsername = async (newUsername) => {
    await axios.post("/api/changeUsername", {
      newUsername,
    });
  };
  const value = {
    currentUser,
    changeUsername,
    changeEmail,
    logIn,
    logOut,
    signUp,
  };
  return (
    <AuthContext.Provider value={value}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
}
