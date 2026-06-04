import "../../global.css";
import { Stack, useRouter, useSegments } from "expo-router";
import { useFonts } from "expo-font";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ClerkProvider, ClerkLoaded, useAuth } from "@clerk/expo";
import { tokenCache } from "../lib/tokenCache";
import { View, ActivityIndicator } from "react-native";
import { useLanguageStore } from "../store/languageStore";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
if (!publishableKey) {
  throw new Error("Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env");
}

function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const { selectedLanguageCode, hasHydrated } = useLanguageStore();

  useEffect(() => {
    if (!isLoaded || !hasHydrated) return;

    const currentSegment = segments[0];

    // Check if current route is in the auth/onboarding group
    const inAuthGroup =
      currentSegment === "sign-in" ||
      currentSegment === "sign-up" ||
      currentSegment === "onboarding";

    if (!isSignedIn) {
      if (!inAuthGroup) {
        // Redirect to onboarding if not signed in and trying to access a protected route
        router.replace("/onboarding");
      }
    } else {
      // Authenticated user
      if (!selectedLanguageCode) {
        // If an authenticated user has no selected language, route them to the language selection screen
        if (currentSegment !== "language-selection") {
          router.replace("/language-selection");
        }
      } else {
        // If language is selected, they should not access auth/onboarding screens
        if (inAuthGroup) {
          router.replace("/" as any);
        }
      }
    }
  }, [isLoaded, hasHydrated, isSignedIn, selectedLanguageCode, segments, router]);

  if (!isLoaded || !hasHydrated) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF" }}>
        <ActivityIndicator size="large" color="#7C3AED" />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <InitialLayout />
      </ClerkLoaded>
    </ClerkProvider>
  );
}

