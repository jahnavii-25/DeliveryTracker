import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header";
import OrderCard from "../../components/OrderCard";
import { useDeliveryStore } from "../../store/useDeliveryStore";

export default function DriverScreen() {
  const orders = useDeliveryStore((state) => state.orders);
  const updateLocation = useDeliveryStore((state) => state.updateLocation);
  const simulateMovement = () => {
    updateLocation(26.85, 80.992);
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

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderCard order={item} isDriver={true} />}
      />
    </View>
  );
}
