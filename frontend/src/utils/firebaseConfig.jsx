import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,

  authDomain: import.meta.env.VITE_AUTHDOMAIN,

  projectId: "chat-7812b",

  storageBucket: "chat-7812b.appspot.com",

  messagingSenderId: "539748897025",

  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
