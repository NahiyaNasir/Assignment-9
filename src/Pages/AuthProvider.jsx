/* eslint-disable react/prop-types */
import { useEffect, useState, createContext } from "react";
import auth from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [currentUser, setUser] = useState(null);
  const [loading, setaLoading] = useState(true);
  const createUser = (email, password) => {
    setaLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (displayName, photoURL) => {
    setaLoading(true);
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user details", currentUser);
      setUser(currentUser);
      setaLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const logOut = () => {
    setaLoading(true);
    return signOut(auth)
      .then(console.log("Signed out"))
      .catch((error) => console.log(error));
  };
  const signIn = (email, password) => {
    console.log(email, password);
    setaLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setaLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signInWithGithub = () => {
    setaLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  const authInfo = {
    currentUser,
    signIn,
    createUser,
    updateUser,
    logOut,
    signInWithGoogle,
    signInWithGithub,
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
