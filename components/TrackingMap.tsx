import { WebView } from "react-native-webview";

interface TrackingMapProps {
  latitude: number;
  longitude: number;
}

export default function TrackingMap({ latitude, longitude }: TrackingMapProps) {
  const html = `
<!DOCTYPE html>
<html>
<head>

<meta
name="viewport"
content="width=device-width, initial-scale=1.0"/>

<link
rel="stylesheet"
href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
/>

<style>

html,
body,
#map{
height:100%;
width:100%;
margin:0;
padding:0;
}

</style>

</head>

<body>

<div id="map"></div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script>

const map=L.map("map")
.setView(
[${latitude},${longitude}],
13
);

L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
maxZoom:19
}
).addTo(map);

L.marker(
[${latitude},${longitude}]
).addTo(map);

</script>

</body>
</html>
`;

  return (
    <WebView
      source={{ html }}
      javaScriptEnabled
      domStorageEnabled
      originWhitelist={["*"]}
      style={{
        height: 300,
        borderRadius: 12,
      }}
    />
  );
}
