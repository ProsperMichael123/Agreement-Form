import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCH7UVyvyS2bpn6NoIcMrWre2ccDN7Nun8",
  authDomain: "prosper-agreement-form.firebaseapp.com",
  projectId: "prosper-agreement-form",
  storageBucket: "prosper-agreement-form.appspot.com",
  messagingSenderId: "164316590315",
  appId: "1:164316590315:web:710801f4545857a0ddceae",
  measurementId: "G-27KKG3HWHB"
};

const app = initializeApp(firebaseConfig);


export const db = getDatabase(app);


export const auth = getAuth(app);


export const analytics = getAnalytics(app);