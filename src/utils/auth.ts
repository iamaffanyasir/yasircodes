import { account, ID } from '../appwrite/config';

const generateValidUserId = (email: string): string => {
  // Remove special characters and convert to lowercase
  const cleanEmail = email.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Take first 20 characters of email and add a unique string
  return cleanEmail.slice(0, 20) + '_' + ID.unique().slice(0, 10);
};

export const auth = {
  createUser: async (email: string, password: string, name: string) => {
    try {
      // Generate a valid user ID that meets Appwrite's requirements
      const userId = generateValidUserId(email);
      
      // Create the user with the valid ID
      await account.create(
        userId,
        email,
        password,
        name
      );

      // After creating user, log them in
      return await auth.login(email, password);
    } catch (error: any) {
      // If user already exists, try to log in instead
      if (error.code === 409) {
        return await auth.login(email, password);
      }
      throw error;
    }
  },

  login: async (email: string, password: string) => {
    try {
      // Create a new session
      await account.createSession(
        email,
        password
      );
      
      // Get and return the user data
      return await account.get();
    } catch (error) {
      throw error;
    }
  },

  logout: async () => {
    try {
      await account.deleteSession('current');
    } catch (error) {
      throw error;
    }
  },

  checkAuth: async () => {
    try {
      return await account.get();
    } catch {
      return null;
    }
  }
}; 