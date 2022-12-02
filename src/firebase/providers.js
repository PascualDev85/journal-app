import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const resp = await signInWithPopup(FirebaseAuth, googleProvider);

    const { displayName, email, photoURL, uid } = resp.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { photoURL, uid } = resp.user;

    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      displayName,
      email,
      photoURL,
    };
  } catch (error) {
    if (error.message.includes("email-already-in-use")) {
      return {
        ok: false,
        errorMessage: "The email address is already registered",
      };
    }
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { uid, displayName, photoURL } = resp.user;

    return {
      ok: true,
      uid,
      displayName,
      email,
      photoURL,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: "Email or password incorrect",
    };
  }
};

export const logoutFireBase = async () => {
  return await FirebaseAuth.signOut();
};
