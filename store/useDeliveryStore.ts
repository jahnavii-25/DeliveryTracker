import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { orders as initialOrders } from "../data/orders";
import { Order, OrderStatus } from "../types/order";

interface DeliveryStore {
  orders: Order[];

  currentLatitude: number;
  currentLongitude: number;

  trackingEnabled: boolean;

  updateOrderStatus: (orderId: string, status: OrderStatus) => void;

  updateLocation: (latitude: number, longitude: number) => void;

  startTracking: () => void;

  stopTracking: () => void;

  resetStore: () => void;
}

export const useDeliveryStore = create<DeliveryStore>()(
  persist(
    (set) => ({
      orders: initialOrders,

      currentLatitude: 26.8467,
      currentLongitude: 80.9462,

      trackingEnabled: false,

      updateOrderStatus: (orderId, status) => {
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === orderId ? { ...order, status } : order,
          ),
        }));
      },

      updateLocation: (latitude, longitude) => {
        set({
          currentLatitude: latitude,
          currentLongitude: longitude,
        });
      },

      startTracking: () => {
        set({
          trackingEnabled: true,
        });
      },

      stopTracking: () => {
        set({
          trackingEnabled: false,
        });
      },

      resetStore: () => {
        set({
          orders: initialOrders,
          currentLatitude: 26.8467,
          currentLongitude: 80.9462,
          trackingEnabled: false,
        });
      },
    }),
    {
      name: "delivery-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
