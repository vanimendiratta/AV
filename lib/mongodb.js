import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Ensure this is set in your .env.local file
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to the .env.local file');
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to preserve the client across module reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, it's best to not use global variables
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
