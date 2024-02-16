const FirebaseInitializer = require('./FirebaseInitializer');

// Initialize Firebase
FirebaseInitializer.initializeFirebase();

const express = require('express');
const admin = require('firebase-admin');
const app = express();

// Initialize Firebase Admin SDK
const serviceAccount = require('./path/to/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com'
});

// Your server-side logic here
