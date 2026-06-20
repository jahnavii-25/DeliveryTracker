import { Text, TouchableOpacity, View } from "react-native";

import { useDeliveryStore } from "../store/useDeliveryStore";
import { Order } from "../types/order";

interface OrderCardProps {
  order: Order;
  isDriver?: boolean;
}

export default function OrderCard({ order, isDriver = false }: OrderCardProps) {
  const updateOrderStatus = useDeliveryStore(
    (state) => state.updateOrderStatus,
  );

  const startTracking = useDeliveryStore((state) => state.startTracking);

  const stopTracking = useDeliveryStore((state) => state.stopTracking);

  const handleAcceptOrder = () => {
    updateOrderStatus(order.id, "ACCEPTED");
  };

  const handleNextStatus = () => {
    if (order.status === "ACCEPTED") {
      updateOrderStatus(order.id, "PICKED_UP");

      startTracking();

      return;
    }

    if (order.status === "PICKED_UP") {
      updateOrderStatus(order.id, "IN_TRANSIT");

      return;
    }

    if (order.status === "IN_TRANSIT") {
      updateOrderStatus(order.id, "DELIVERED");

      stopTracking();
    }
  };

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        {order.customerName}
      </Text>

      <Text>Address: {order.customerAddress}</Text>

      <Text>Package: {order.packageType}</Text>

      <Text>Status: {order.status}</Text>

      {isDriver && order.status === "AVAILABLE" && (
        <TouchableOpacity
          onPress={handleAcceptOrder}
          style={{
            marginTop: 12,
            backgroundColor: "#2563EB",
            padding: 10,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Accept Order
          </Text>
        </TouchableOpacity>
      )}

      {isDriver &&
        order.status !== "AVAILABLE" &&
        order.status !== "DELIVERED" && (
          <TouchableOpacity
            onPress={handleNextStatus}
            style={{
              marginTop: 12,
              backgroundColor: "green",
              padding: 10,
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Next Status
            </Text>
          </TouchableOpacity>
        )}
    </View>
  );
}
