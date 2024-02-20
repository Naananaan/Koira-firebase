// Import necessary functions from Firebase SDKs
import { initializeApp, getAnalytics } from 'firebase/app' // Import Firebase functions at the top
import { logEvent } from 'firebase/analytics' // Import the logEvent function from analytics module
import admin from 'firebase-admin' // Import admin as default
import express from 'express' // Import express as default

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBzfM-hL1CtBzAK8Zu8T019Gd-4eDcMO0c',
  authDomain: 'koirat-6011e.firebaseapp.com',
  projectId: 'koirat-6011e',
  storageBucket: 'koirat-6011e.appspot.com',
  messagingSenderId: '903666657027',
  appId: '1:903666657027:web:e70af11ae94773e7a0ab36',
  measurementId: 'G-FT98PEZWPM'
}

// Initialize Firebase app
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

// Initialize Firebase Admin SDK
const serviceAccount = require('./path/to/serviceAccountKey.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com'
})
const db = admin.firestore()

// Create Express app
const expressApp = express()

// Define Express routes and other application logic here

// For example, you can create a route that uses Firebase Firestore
expressApp.get('/some-route', async (req, res) => {
  try {
    // Log event using analytics
    logEvent(analytics, 'käyttäjän_toiminta', { action: 'klikkaus', target: 'painike' })

    const snapshot = await db.collection('some-collection').get()
    const documents = snapshot.docs.map(doc => doc.data())
    res.json(documents)
  } catch (error) {
    console.error('Error fetching documents from Firestore:', error)
    res.status(500).json({ error: 'Failed to fetch documents from Firestore' })
  }
})

// Listen to the port specified by Express app
const port = process.env.PORT || 3000
expressApp.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
