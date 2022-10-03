import moment from "moment";
import { BsCloudsFill, BsFillCloudRainFill } from "react-icons/bs";
import { TbWind } from "react-icons/tb";
import { Box } from "ui";
import {
  CloudCoverage,
  Precipitation,
  Temperature,
  WindSpeed,
} from "../../../utils/types";

type TimelineCardProps = {
  data: {
    temperature: Temperature;
    cloud: CloudCoverage;
    precipitation: Precipitation;
    wind: WindSpeed;
  };
  index: number;
};

export const TimelineCard = ({ data, index }: TimelineCardProps) => {
  const props =
    index === 1
      ? {
          height: "100%",
          width: "20%",
          backgroundColor: "rgba(155,155,155, 0.1)",
        }
      : {
          height: "70%",
          width: "15%",
          backgroundColor: "rgba(155,155,155, 0.05)",
        };

  return (
    <Box
      height={props.height}
      width={props.width}
      background={props.backgroundColor}
      boxShadow="0px 0px 52px 5px rgba(0,0,0,1)"
      position="relative"
      padding="20px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      borderRadius="8px"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        filter="blur(10px)"
        backdropFilter="blur(10px)"
        borderRadius="8px"
        height="100%"
        width="100%"
        zIndex={1}
      />
      <Box
        height="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        flexDirection="column"
        zIndex={2}
      >
        <p
          style={{
            fontSize: "18px",
            fontWeight: "300",
            textTransform: "capitalize",
          }}
        >
          {moment(data.temperature.time).fromNow()}
        </p>
        <Box>
          <p style={{ fontSize: "25px" }}>Aarhus</p>
          <p style={{ fontSize: "80px", fontWeight: "800" }}>
            {data.temperature.value}°{data.temperature.unit}
          </p>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems={index === 1 ? "center" : "flex-start"}
        flexDirection={index === 1 ? "row" : "column"}
        width="100%"
        padding="35px 0 15px 0"
        gap={index === 1 ? "18px" : "5px"}
        zIndex={2}
      >
        <Box display="inline-flex" justifyContent="center" alignItems="center">
          <BsFillCloudRainFill
            style={{ width: "20px", height: "20px", marginRight: "8px" }}
          />
          {data.precipitation.value} {data.precipitation.unit}
        </Box>
        <Box display="inline-flex" justifyContent="center" alignItems="center">
          <TbWind
            style={{ width: "20px", height: "20px", marginRight: "8px" }}
          />
          {data.wind.value} {data.wind.unit}
        </Box>
        <Box display="inline-flex" justifyContent="center" alignItems="center">
          <BsCloudsFill
            style={{ width: "20px", height: "20px", marginRight: "8px" }}
          />
          {data.cloud.value} {data.cloud.unit}
        </Box>
      </Box>
    </Box>
  );
};
