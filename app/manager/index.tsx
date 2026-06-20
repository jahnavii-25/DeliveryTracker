import { FlatList, Text, View } from "react-native";
import Header from "../../components/Header";
import OrderCard from "../../components/OrderCard";
import TrackingMap from "../../components/TrackingMap";
import { useDeliveryStore } from "../../store/useDeliveryStore";

export default function ManagerScreen() {
  const orders = useDeliveryStore((state) => state.orders);
  const trackingEnabled = useDeliveryStore((state) => state.trackingEnabled);
  const currentLatitude = useDeliveryStore((state) => state.currentLatitude);
  const currentLongitude = useDeliveryStore((state) => state.currentLongitude);

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        paddingTop: 50,
      }}
    >
      <Header title="Manager Dashboard" />

      <TrackingMap latitude={currentLatitude} longitude={currentLongitude} />

      <Text
        style={{
          marginBottom: 15,
          fontWeight: "bold",
        }}
      >
        Tracking: {trackingEnabled ? "ACTIVE" : "INACTIVE"}
      </Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderCard order={item} />}
      />
    </View>
  );
}
