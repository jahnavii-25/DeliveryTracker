import { create } from "zustand";
import { orders } from "../data/orders";
import { Order, OrderStatus } from "../types/order";

interface DeliveryStore {
  orders: Order[];

  currentLatitude: number;
  currentLongitude: number;

  updateOrderStatus: (orderId: string, status: OrderStatus) => void;

  updateLocation: (latitude: number, longitude: number) => void;

  trackingEnabled: boolean;

  startTracking: () => void;

  stopTracking: () => void;
}

export const useDeliveryStore = create<DeliveryStore>((set) => ({
  orders,
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
}));
