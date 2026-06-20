import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import { useAuthStore } from "../store/useAuthStore";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    await logout();

    router.replace("/login");
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>

      <TouchableOpacity
        onPress={handleLogout}
        style={{
          backgroundColor: "red",
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}
