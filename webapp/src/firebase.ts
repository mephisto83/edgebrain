import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyO6iwCjtxiu01MFnSc_KlP-mDizO-SrvFA",
  authDomain: "edgebrain-saas.firebaseapp.com",
  projectId: "edgebrain-saas",
  storageBucket: "edgebrain-saas.firebasestorage.app",
  messagingSenderId: "481941130984",
  appId: "1:481941130984:web:dd0647a499009fa158435d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export default app;

