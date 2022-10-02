import { Box } from "ui";
import "./app.css";
import { Result } from "./components/result";

export const App = () => {
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      backgroundImage={`url("./Aarhus.jpg")`}
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
        <Result />
        {/* <Timeline
          data={[
            {
              temperature: mockTemp,
              cloud: mockCloud,
              precipitation: mockPrecip,
              wind: mockWind,
            },
          ]}
        /> */}
      </Box>
    </Box>
  );
};
