import { db } from "@/src/Firebase/config";
import { doc, getDoc } from "firebase/firestore";

const sendNotificationToIncharge = async () => {
  try {
    const docRef = doc(db, "users", "shift_incharge_id");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const inchargeData = docSnap.data();
      const token = inchargeData.fcmToken;

      const message = {
        to: token,
        notification: {
          title: "New Cannibalization Request",
          body: "A new request has been submitted for your approval.",
        },
      };

      await fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `key=YOUR_SERVER_KEY`, // Replace with your FCM server key
        },
        body: JSON.stringify(message),
      });

      console.log("Notification sent!");
    } else {
      console.log("No such document!");
    }
  } catch (e) {
    console.error("Error sending notification: ", e);
  }
};

sendNotificationToIncharge();
