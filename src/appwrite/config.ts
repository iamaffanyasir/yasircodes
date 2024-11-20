import { Client, Account, Databases, Storage, ID } from 'appwrite';

// Check if environment variables are loaded
if (!process.env.REACT_APP_APPWRITE_ENDPOINT || !process.env.REACT_APP_APPWRITE_PROJECT_ID) {
    console.error('Environment Variables:', {
        endpoint: process.env.REACT_APP_APPWRITE_ENDPOINT,
        projectId: process.env.REACT_APP_APPWRITE_PROJECT_ID
    });
    throw new Error('Missing Appwrite environment variables');
}

const client = new Client();

// Set endpoint and project
client
    .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);

// Initialize services
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export { ID };

// Export database constants with fallback values
export const DATABASE_ID = process.env.REACT_APP_APPWRITE_DATABASE_ID || '';
export const PROJECTS_COLLECTION_ID = process.env.REACT_APP_APPWRITE_COLLECTION_ID || '';
export const BUCKET_ID = process.env.REACT_APP_APPWRITE_BUCKET_ID || '';

// Add console log to debug
console.log('Appwrite Config Loaded:', {
    endpoint: process.env.REACT_APP_APPWRITE_ENDPOINT,
    projectId: process.env.REACT_APP_APPWRITE_PROJECT_ID,
    databaseId: DATABASE_ID,
    collectionId: PROJECTS_COLLECTION_ID,
    bucketId: BUCKET_ID
});

export interface AppwriteDocument {
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    $permissions: string[];
    $collectionId: string;
    $databaseId: string;
} 