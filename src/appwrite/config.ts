import { Client, Account, Databases, Storage, ID, Models } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('673d93c1000afeb303e5');

// Initialize Appwrite services
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

// Export constants
export const DATABASE_ID = '673d943e00241224469b';
export const PROJECTS_COLLECTION_ID = '673da7ed0004b53a3dd3';
export const BUCKET_ID = '673d94540010ad690b66';

// Export types
export type AppwriteDocument = Models.Document;

// Export other utilities
export { ID };
export { client }; 