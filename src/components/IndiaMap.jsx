import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// Simplified India TopoJSON
const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

// Define city markers
const markers = [
  { name: "Delhi", coordinates: [77.209, 28.6139] },
  { name: "Mumbai", coordinates: [72.8777, 19.0760] },
  { name: "Chennai", coordinates: [80.2707, 13.0827] },
  { name: "Bangalore", coordinates: [77.5946, 12.9716] },
  { name: "Kolkata", coordinates: [88.3639, 22.5726] }
];

const IndiaMap = () => (
  <div className="india-map-container">
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ center: [82.8, 22.5], scale: 1000 }}
      width={500}
      height={400}
      style={{ width: "100%", height: "auto" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#fff"
              stroke="#999"
              strokeWidth={0.5}
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, label }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={4} fill="#ff69b4" stroke="#fff" strokeWidth={1} />
          {label ? (
            <text
              textAnchor="middle"
              y={-10}
              style={{ fontFamily: "Poppins", fill: "#4a148c", fontSize: "10px" }}
            >
              {name}
            </text>
          ) : null}
        </Marker>
      ))}
    </ComposableMap>
  </div>
);

export default IndiaMap;
