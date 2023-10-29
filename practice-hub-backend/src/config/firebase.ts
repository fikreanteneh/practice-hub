// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import {getAnalytics} from "firebase/analytics"

import dotenv from "dotenv";
import path from "path";

import admin from "firebase-admin";


dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const serviceAccount = require("./serviceAccountKey.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  mesurmnetId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

export const adminDb = admin.firestore();
export const adminAuth = admin.auth();


export default admin;


