import { WebView } from "react-native-webview";

interface TrackingMapProps {
  latitude: number;
  longitude: number;
}

export default function TrackingMap({ latitude, longitude }: TrackingMapProps) {
  const html = `
    <!DOCTYPE html>
    <html>
      <body
        style="
          display:flex;
          justify-content:center;
          align-items:center;
          height:100vh;
          font-family:Arial;
        "
      >
        <div>
          <h2>Tracking Map</h2>
          <p>Latitude: ${latitude}</p>
          <p>Longitude: ${longitude}</p>
        </div>
      </body>
    </html>
  `;

  return (
    <WebView
      originWhitelist={["*"]}
      source={{
        html,
      }}
      style={{
        height: 250,
        borderRadius: 12,
      }}
    />
  );
}
