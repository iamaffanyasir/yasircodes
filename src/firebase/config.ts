import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAGzCOhST-ccl555svwnFPLUjxtNnlPSjI",
  authDomain: "ay-portfolio-b7efc.firebaseapp.com",
  projectId: "ay-portfolio-b7efc",
  storageBucket: "ay-portfolio-b7efc.firebasestorage.app",
  messagingSenderId: "415095381306",
  appId: "1:415095381306:web:fdd3ceaf5febe5f6d78403"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; 