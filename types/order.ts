export type OrderStatus =
  | "AVAILABLE"
  | "ACCEPTED"
  | "PICKED_UP"
  | "IN_TRANSIT"
  | "DELIVERED";

export interface Order {
  id: string;
  customerName: string;
  customerAddress: string;
  packageType: string;
  status: OrderStatus;
  latitude: number;
  longitude: number;
}
