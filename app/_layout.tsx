import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "@/src/Firebase/config";
import { useColorScheme } from "@/hooks/useColorScheme";
import NotificationHandler from "@/components/NotificationHandler/index";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "light" ? DarkTheme : DefaultTheme}>
      <NotificationHandler />
      <Stack initialRouteName="index">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" options={{ headerShown: false }} />
        <Stack.Screen
          name="CannibalizationForm/BlockA"
          options={{
            title: "Cannibalization Form",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTintColor: "#034c2e",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />

        <Stack.Screen
          name="CannibalizationForm/index"
          options={{
            title: "Cannibalization Form",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTintColor: "#034c2e",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="SerialNumberForm/index"
          options={{
            title: "Serial Number Tracibility Form",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTintColor: "#034c2e",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
