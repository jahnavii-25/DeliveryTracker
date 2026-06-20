# 🚚 DeliveryTracker

A React Native delivery management application built using Expo, TypeScript, Zustand, AsyncStorage, Leaflet, and OpenStreetMap.

The application simulates a real-world logistics system where drivers manage deliveries and managers monitor delivery progress and vehicle locations in real time.

---

# 📱 Features

## Authentication

* Driver Login
* Manager Login
* Session Persistence using AsyncStorage
* Logout Functionality
* Role-Based Navigation

### Demo Credentials

#### Driver Account

Email:

```text
driver@test.com
```

Password:

```text
123456
```

#### Manager Account

Email:

```text
ops@test.com
```

Password:

```text
123456
```

---

# 🚛 Driver Features

* View Assigned Orders
* Accept Orders
* Mark Orders as Picked Up
* Mark Orders as In Transit
* Mark Orders as Delivered
* Simulate Truck Movement
* Start Automatic Tracking
* Stop Automatic Tracking

---

# 📊 Manager Features

* View All Orders
* Monitor Delivery Status Updates
* Track Vehicle Location
* View Live Truck Position on Map
* Monitor Tracking State

---

# 🗺️ Live Tracking System

The application includes a delivery tracking simulation system.

### Tracking Flow

Driver Action

↓

Location Update

↓

Zustand Global Store

↓

Manager Dashboard

↓

Leaflet Map

↓

Vehicle Marker Updates

### Technologies Used

* React Native WebView
* Leaflet
* OpenStreetMap
* Zustand State Management

---

# 🏗️ Project Architecture

```text
Driver Dashboard
       ↓
Tracking Service
       ↓
Zustand Store
       ↓
Manager Dashboard
       ↓
Tracking Map
       ↓
Leaflet + OpenStreetMap
```

---

# 🛠️ Technology Stack

## Frontend

* React Native
* Expo
* TypeScript

## State Management

* Zustand

## Data Persistence

* AsyncStorage

## Maps

* Leaflet
* OpenStreetMap
* React Native WebView

## UI Components

* React Native Components
* Expo Router

---

# 📂 Project Structure

```text
DeliveryTracker
│
├── app
│   ├── login.tsx
│   ├── driver
│   └── manager
│
├── components
│   ├── Header.tsx
│   ├── OrderCard.tsx
│   └── TrackingMap.tsx
│
├── store
│   ├── useAuthStore.ts
│   └── useDeliveryStore.ts
│
├── services
│   └── trackingSimulator.ts
│
├── data
│   ├── users.ts
│   └── orders.ts
│
├── types
│   ├── user.ts
│   └── order.ts
│
└── assets
```

---

# 🚀 Installation

## 1. Clone Repository

```bash
git clone https://github.com/jahnavii-25/DeliveryTracker.git
```

```bash
cd DeliveryTracker
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Start Development Server

```bash
npx expo start
```

---

# 📱 Running on Android Using Expo Go

## Step 1

Install Expo Go from Google Play Store:

https://play.google.com/store/apps/details?id=host.exp.exponent

---

## Step 2

Start the project:

```bash
npx expo start
```

---

## Step 3

A QR Code will appear in the terminal:

```text
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █▀▄█▀ ██  █ ▄▄▄▄▄ █
█ █   █ █▄   ▄█▄▄██ █   █ █
█ █▄▄▄█ █ ▀█▀█▄▀ ▀█ █▄▄▄█ █
█▄▄▄▄▄▄▄█ ▀▄█ █ ▀ █▄▄▄▄▄▄▄█
```

---

## Step 4

Open Expo Go on your Android device.

Tap:

```text
Scan QR Code
```

Scan the QR code displayed in the terminal.

---

## Step 5

The application will automatically load on the device.

Make sure:

* Phone and PC are connected to the same Wi-Fi network.
* Metro Bundler is running.

---

# 🔄 Testing Delivery Tracking

## Driver Workflow

1. Login as Driver
2. Accept an Order
3. Mark Order as Picked Up
4. Mark Order as In Transit
5. Start Auto Tracking

---

## Manager Workflow

1. Login as Manager
2. Open Manager Dashboard
3. View Order Status Updates
4. Observe Vehicle Marker on Map
5. Monitor Live Tracking

---

# 💾 Persistence

The application uses:

* AsyncStorage
* Zustand Persist Middleware

Persisted Data:

* User Session
* Orders
* Delivery Statuses
* Tracking State
* Vehicle Coordinates

---

# 🔮 Future Enhancements

* Real GPS Tracking using expo-location
* Push Notifications
* Backend API Integration
* WebSocket-Based Real-Time Tracking
* Driver Assignment System
* Delivery Analytics Dashboard
* Delivery History
* Cloud Database Integration

---

# 👩‍💻 Author

Jahnavi Tiwari

GitHub:

https://github.com/jahnavii-25

---

# 📄 License

This project was developed for learning, portfolio, and academic demonstration purposes.
