import { useState } from "react";
import { auth } from "../config/firebase/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  updateProfile,
} from "firebase/auth";

export function useFirebaseAuth(initialUser = null) {
  const [user, setInitialUser] = useState(null);

  function setUser(user) {
    setInitialUser(user);
  }
  function signUpWithEmailAndPassword(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function loginWithEmailAndPassword(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function updateUserProfile(displayName, photoURL) {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  }
  function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  function loginWithGithub() {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  }
  function logOut() {
    return signOut(auth);
  }
  return {
    user,
    setUser,
    signUpWithEmailAndPassword,
    loginWithEmailAndPassword,
    updateUserProfile,
    loginWithGoogle,
    loginWithGithub,
    logOut,
  };
}
