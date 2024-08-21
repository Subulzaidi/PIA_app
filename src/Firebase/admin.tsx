var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pia-application-e7674-default-rtdb.firebaseio.com",
});

// const message = {
//   notification: {
//     title: "Cannibalization Request",
//     body: "A new request has been submitted.",
//   },
//   token: "recipient_device_token",
// };

// admin
//   .messaging()
//   .send(message)
//   .then((response: any) => {
//     console.log("Successfully sent message:", response);
//   })
//   .catch((error: any) => {
//     console.log("Error sending message:", error);
//   });
