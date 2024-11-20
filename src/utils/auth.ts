import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  Auth,
  onAuthStateChanged,
  getAuth
} from 'firebase/auth';
import { FirebaseApp } from 'firebase/app';
import app from '../firebase/config';

// Initialize auth with proper typing
const auth: Auth = getAuth(app);

// Add debug logging
console.log('Firebase Auth Initialized:', auth);

export const authService = {
  createUser: async (email: string, password: string, name: string): Promise<User> => {
    try {
      console.log('Creating user:', { email, name });
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', userCredential.user);
      return userCredential.user;
    } catch (error: any) {
      console.error('Create user error:', error);
      throw error;
    }
  },

  login: async (email: string, password: string): Promise<User> => {
    try {
      console.log('Logging in user:', email);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
      return userCredential.user;
    } catch (error: any) {
      console.error('Login error:', error);
      throw error;
    }
  },

  logout: async (): Promise<void> => {
    try {
      await signOut(auth);
      console.log('User logged out');
    } catch (error: any) {
      console.error('Logout error:', error);
      throw error;
    }
  },

  checkAuth: (): Promise<User | null> => {
    return new Promise<User | null>((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
        console.log('Auth state changed:', user);
        unsubscribe();
        resolve(user);
      });
    });
  }
}; 