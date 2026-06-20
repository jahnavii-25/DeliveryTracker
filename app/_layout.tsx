import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="driver" />
        <Stack.Screen name="manager" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
