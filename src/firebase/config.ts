import { initializeApp, FirebaseApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAGzCOhST-ccl555svwnFPLUjxtNnlPSjI",
  authDomain: "ay-portfolio-b7efc.firebaseapp.com",
  projectId: "ay-portfolio-b7efc",
  storageBucket: "ay-portfolio-b7efc.appspot.com",
  messagingSenderId: "415095381306",
  appId: "1:415095381306:web:fdd3ceaf5febe5f6d78403",
  measurementId: "G-B3Z6E6GYKX"
};

// Initialize Firebase with proper typing
const app: FirebaseApp = initializeApp(firebaseConfig);

export default app; 