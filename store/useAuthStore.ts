import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

import { users } from "../data/users";
import { User } from "../types/user";

interface AuthStore {
  user: User | null;

  login: (email: string, password: string) => Promise<boolean>;

  logout: () => Promise<void>;

  restoreSession: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,

  login: async (email, password) => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!foundUser) {
      return false;
    }

    await AsyncStorage.setItem("currentUser", JSON.stringify(foundUser));

    set({
      user: foundUser,
    });

    return true;
  },

  logout: async () => {
    await AsyncStorage.removeItem("currentUser");

    set({
      user: null,
    });
  },

  restoreSession: async () => {
    const savedUser = await AsyncStorage.getItem("currentUser");

    if (!savedUser) {
      return;
    }

    set({
      user: JSON.parse(savedUser),
    });
  },
}));
