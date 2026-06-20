import { FlatList, Text, TouchableOpacity, View } from "react-native";

import Header from "../../components/Header";
import OrderCard from "../../components/OrderCard";

import {
  startTruckSimulation,
  stopTruckSimulation,
} from "../../services/trackingSimulator";

import { useDeliveryStore } from "../../store/useDeliveryStore";

export default function DriverScreen() {
  const orders = useDeliveryStore((state) => state.orders);

  const updateLocation = useDeliveryStore((state) => state.updateLocation);

  const startTracking = useDeliveryStore((state) => state.startTracking);

  const stopTracking = useDeliveryStore((state) => state.stopTracking);

  const simulateMovement = () => {
    const state = useDeliveryStore.getState();

    updateLocation(
      state.currentLatitude + 0.001,
      state.currentLongitude + 0.001,
    );
  };

  const moveTruckAutomatically = () => {
    const state = useDeliveryStore.getState();

    updateLocation(
      state.currentLatitude + Math.random() * 0.002,
      state.currentLongitude + Math.random() * 0.002,
    );
  };

  const handleStartTracking = () => {
    startTracking();

    startTruckSimulation(moveTruckAutomatically);
  };

  const handleStopTracking = () => {
    stopTracking();

    stopTruckSimulation();
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        paddingTop: 50,
      }}
    >
      <Header title="Driver Orders" />

      <TouchableOpacity
        onPress={simulateMovement}
        style={{
          backgroundColor: "#16A34A",
          padding: 12,
          borderRadius: 8,
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Simulate Truck Movement
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleStartTracking}
        style={{
          backgroundColor: "#2563EB",
          padding: 12,
          borderRadius: 8,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Start Auto Tracking
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleStopTracking}
        style={{
          backgroundColor: "#DC2626",
          padding: 12,
          borderRadius: 8,
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Stop Auto Tracking
        </Text>
      </TouchableOpacity>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderCard order={item} isDriver={true} />}
      />
    </View>
  );
}
