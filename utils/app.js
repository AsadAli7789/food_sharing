import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  
  import {
    getFirestore,
    doc,
    collection,
    setDoc,
    addDoc,
    getDocs,
    getDoc,
    deleteDoc,
    updateDoc,
  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
  
  import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
  











const firebaseConfig = {
  apiKey: "AIzaSyCR8DtvarbAqArujN07YmEUnGZM3bFmz1s",
  authDomain: "food-sharing-app-766fb.firebaseapp.com",
  projectId: "food-sharing-app-766fb",
  storageBucket: "food-sharing-app-766fb.appspot.com",
  messagingSenderId: "852961291036",
  appId: "1:852961291036:web:37842f3e2e5717bad9e8d9",
  measurementId: "G-B31Z0LG9CR"
};











const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  auth,
  db,
  storage,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  doc,
  collection,
  setDoc,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  updateDoc,
  ref,
  uploadBytes,
  getDownloadURL,
};