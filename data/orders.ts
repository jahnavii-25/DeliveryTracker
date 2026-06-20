import { Order } from "../types/order";

export const orders: Order[] = [
  {
    id: "ORD001",
    customerName: "Amit Sharma",
    customerAddress: "Hazratganj, Lucknow",
    packageType: "Electronics",
    status: "AVAILABLE",
    latitude: 26.8467,
    longitude: 80.9462,
  },
  {
    id: "ORD002",
    customerName: "Priya Singh",
    customerAddress: "Gomti Nagar, Lucknow",
    packageType: "Clothing",
    status: "AVAILABLE",
    latitude: 26.85,
    longitude: 80.992,
  },
  {
    id: "ORD003",
    customerName: "Rohit Verma",
    customerAddress: "Aliganj, Lucknow",
    packageType: "Groceries",
    status: "AVAILABLE",
    latitude: 26.885,
    longitude: 80.945,
  },
];
