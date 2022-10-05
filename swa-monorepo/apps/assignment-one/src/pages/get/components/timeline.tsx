import moment from "moment";
import { Box } from "ui";
import { useAppContext } from "../../../packages/context/context";

export const Timeline = () => {
  const { forecastData } = useAppContext();
  console.log(forecastData);

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      width="100%"
      justifyContent="flex-end"
    >
      <p style={{ fontSize: "56px", fontWeight: "700", marginBottom: "20px" }}>
        Forecast
      </p>
      <Box
        width="100%"
        height="50%"
        overflowX="auto"
        whiteSpace="nowrap"
        position="relative"
      >
        {forecastData.map((item, index) => (
          <Box
            key={index}
            height="100%"
            width="200px"
            background="rgba(1,1,1,0.5)"
            borderRadius="8px"
            padding="12px"
            display="inline-block"
            marginRight="16px"
          >
            <Box>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "700",
                  textTransform: "capitalize",
                }}
              >
                {moment(item.time).fromNow()}
              </p>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              height="100%"
              justifyContent="space-evenly"
              fontWeight="500"
            >
              <Box>
                Temperature
                <p style={{ fontSize: "18px", fontWeight: "300" }}>
                  {item.data.temperature.from} {"->"} {item.data.temperature.to}
                  °{item.data.temperature.unit}
                </p>
              </Box>
              <Box>
                Cloud coverage
                <p style={{ fontSize: "18px", fontWeight: "300" }}>
                  {item.data.cloud.from} {"->"} {item.data.cloud.to}
                  {item.data.cloud.unit}
                </p>
              </Box>
              <Box>
                Precipitation
                <p style={{ fontSize: "18px", fontWeight: "300" }}>
                  {item.data.precipitation.from} {"->"}{" "}
                  {item.data.precipitation.to}
                  {item.data.precipitation.unit}
                  <br />
                  {item.data.precipitation.types}
                </p>
              </Box>
              <Box>
                Wind
                <p style={{ fontSize: "18px", fontWeight: "300" }}>
                  {item.data.wind.from} {"->"} {item.data.wind.to}
                  {item.data.wind.unit}
                </p>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
