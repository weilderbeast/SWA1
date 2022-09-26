import { Box } from "ui";
import {
  CloudCoverage,
  Precipitation,
  Temperature,
  WindSpeed,
} from "../../utils/types";
import "./app.css";
import { Result } from "./components/result";
import { Search } from "./components/search";
import { Timeline } from "./components/timeline";

export default function App() {
  const mockTemp: Temperature = {
    type: "temperature",
    place: "Aarhus",
    time: new Date().toISOString(),
    unit: "C",
    value: 35,
  };

  const mockPrecip: Precipitation = {
    type: "precipitation",
    place: "Aarhus",
    time: new Date().toISOString(),
    precipitation_type: "rain",
    unit: "mm",
    value: 10,
  };

  const mockWind: WindSpeed = {
    type: "wind speed",
    direction: "North",
    place: "Aarhus",
    time: new Date().toISOString(),
    unit: "m/s",
    value: 15,
  };

  const mockCloud: CloudCoverage = {
    type: "cloud coverage",
    place: "Aarhus",
    time: new Date().toISOString(),
    unit: "%",
    value: 100,
  };

  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      backgroundImage={`url("./${mockTemp.place}.jpg")`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        background="rgba(0,0,0, 0.5)"
        width="100%"
        height="100%"
        padding="65px"
        gap="15%"
      >
        {/* <Search /> */}
        <Result
          cloud={mockCloud}
          precipitation={mockPrecip}
          wind={mockWind}
          temperature={mockTemp}
        />
        <Timeline
          data={[
            {
              temperature: mockTemp,
              cloud: mockCloud,
              precipitation: mockPrecip,
              wind: mockWind,
            },
          ]}
        />
      </Box>
    </Box>
  );
}
