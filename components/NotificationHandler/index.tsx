import React, { useEffect } from "react";
import messaging from "@react-native-firebase/messaging";
import "@/src/Firebase/config";

const NotificationHandler = () => {
  useEffect(() => {
    // Request user permission
    const requestUserPermission = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log("Authorization status:", authStatus);
      }
    };

    // Get the device token
    const getToken = async () => {
      const token = await messaging().getToken();
      console.log("FCM Token:", token);
      // Store the token in your server or local storage if needed
    };

    // Handle token refresh
    const onTokenRefresh = (newToken: any) => {
      console.log("FCM Token refreshed:", newToken);
      // Store the new token in your server or local storage if needed
    };

    requestUserPermission();
    getToken();

    // Add token refresh listener
    const unsubscribe = messaging().onTokenRefresh(onTokenRefresh);

    // Clean up listener on component unmount
    return () => unsubscribe();
  }, []);

  return null;
};

export default NotificationHandler;
