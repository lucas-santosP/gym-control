import React from "react";
import { tw } from "@/libs/tailwind";
import { Routes } from "./src/routes";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        // Pre-load fonts feather icons and poppins font
        await Font.loadAsync(Feather.font);
        await Font.loadAsync({
          Poppins_100Thin,
          Poppins_200ExtraLight,
          Poppins_300Light,
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_600SemiBold,
          Poppins_700Bold,
          Poppins_800ExtraBold,
          Poppins_900Black,
        });
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Artificially delay for two seconds to simulate a slow loading experience
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) await SplashScreen.hideAsync();
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <SafeAreaView style={tw("flex-1")} onLayout={onLayoutRootView}>
      <Routes />
    </SafeAreaView>
  );
}
