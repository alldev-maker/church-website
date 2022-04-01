import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/database";
import 'firebase/compat/storage';
import React, { useContext, useState } from "react";
// import { setUserSession } from "./sharedData";
// Import Firestore database
// import db from './firbase';

// Staging - Missing DatabaseURL
// export const firebaseConfig = firebase.initializeApp({
//   apiKey: "AIzaSyCF6RG5FozaIr_i6IOdm1V4IF6g5jGHF5c",
//   authDomain: "church-notes-app-staging.firebaseapp.com",
//   projectId: "church-notes-app-staging",
//   storageBucket: "church-notes-app-staging.appspot.com",
//   messagingSenderId: "676148807127",
//   appId: "1:676148807127:web:1609966c2ac379e2ab3792",
//   measurementId: "G-0BJFSWRFXB"
// });

// Production
export const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDDcjPj7LCCrGvySFC6Vpz3uiLq8_ovuqg",
  authDomain: "church-notes-app.firebaseapp.com",
  databaseURL: "https://church-notes-app.firebaseio.com",
  projectId: "church-notes-app",
  storageBucket: "church-notes-app.appspot.com",
  messagingSenderId: "626307390297",
  appId: "1:626307390297:web:4632d5108096f9941c0a48",
  measurementId: "G-R7P079TF3B"
});


export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const appleProvider = new firebase.auth.OAuthProvider('apple.com');
export const firestore = firebase.firestore();
export const db = firebase.firestore();
export const onSnapshot = firebase.firestore();
export const collection = firebase.firestore();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

const AuthContext = React.createContext();

export const storage = firebase.storage();

export function useAuth() {
  return useContext(AuthContext);
}


export const createUserDocument = async (user) => {
  if (!user) return;
  const { uid, email, firstName, lastName } = user;
  const userRef = firestore.doc(`user/${uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    try {
      await userRef.set({
        email,
        firstName,
        lastName,
        uid: uid,
        createdAt: new Date(),
      });
      console.log("User created");
    } catch (error) {
      console.log("Error in creating user", error);
    }
  }
};



export function logout() {
  auth.signOut();
}
