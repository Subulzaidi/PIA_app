import { doc, setDoc } from "firebase/firestore";
import { db } from "@/src/Firebase/config";

const storeDummyToken = async () => {
  try {
    await setDoc(doc(db, "users", "shift_incharge_id"), {
      fcmToken: "dummy_fcm_token_example_123456",
      role: "Shift Incharge",
      name: "John Doe",
    });
    console.log("Dummy FCM token stored successfully");
  } catch (e) {
    console.error("Error storing dummy FCM token: ", e);
  }
};

storeDummyToken();
