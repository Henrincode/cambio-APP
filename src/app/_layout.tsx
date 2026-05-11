import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
    <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
}