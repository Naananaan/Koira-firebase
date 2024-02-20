const functions = require("firebase-functions")
const admin = require("firebase-admin")

admin.initializeApp()

exports.getData = functions.https.onRequest((req, res) => {
  const db = admin.firestore()
  // Fetch data from Firestore
  db.collection("data").get()
      .then((snapshot) => {
        const data = []
        snapshot.forEach((doc) => {
          data.push(doc.data())
        })
        return res.status(200).json(data)
      })
      .catch((error) => {
        console.error("Error getting documents", error)
        return res.status(500).send("Error getting data")
      })
})
