import { Box } from "ui";
import {
  CloudCoverage,
  Precipitation,
  Temperature,
  WindSpeed,
} from "../../../utils/types";
import { FaCloudSun } from "react-icons/fa";
import { BsFillCloudRainFill, BsCloudsFill } from "react-icons/bs";
import { TbWind } from "react-icons/tb";
import { RiMapPin2Fill } from "react-icons/ri";
import { ImSpinner11 } from "react-icons/im";
import { useState } from "react";

type ResultProps = {
  temperature?: Temperature;
  precipitation?: Precipitation;
  wind?: WindSpeed;
  cloud?: CloudCoverage;
};

type RefreshState = "Manual" | "Auto";

export const Result = ({
  temperature,
  precipitation,
  wind,
  cloud,
}: ResultProps) => {
  const [refreshState, setRefreshState] = useState<RefreshState>("Auto");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="column"
        >
          <FaCloudSun style={{ width: "150px", height: "150px" }} />
          <p style={{ fontSize: "55px", fontWeight: "500" }}>Fog</p>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="10px"
          >
            <RiMapPin2Fill style={{ height: "30px", width: "30px" }} />
            <p style={{ fontSize: "35px", fontWeight: "300" }}>Aarhus</p>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="8px"
              background="rgba(55,55,55,0.6)"
              padding="6px 14px"
              borderRadius="27px"
              onClick={() => {
                setRefreshState(refreshState === "Auto" ? "Manual" : "Auto");
              }}
            >
              <ImSpinner11 /> Refresh
            </Box>
            <Box
              background={
                refreshState === "Manual" ? "rgba(55,55,55,0.6)" : "limegreen"
              }
              padding="6px 14px"
              borderRadius="27px"
            >
              {refreshState}
            </Box>
          </Box>
          <p style={{ fontSize: "75px", fontWeight: "800" }}>
            {temperature?.value} °{temperature?.unit}
          </p>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="column"
          gap="35px"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            gap="20px"
          >
            <BsFillCloudRainFill style={{ width: "50px", height: "50px" }} />
            <Box
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
              flexDirection="column"
            >
              <p style={{ fontSize: "25px", fontWeight: "300" }}>Rain</p>
              <p style={{ fontSize: "35px", fontWeight: "700" }}>
                {precipitation?.value} {precipitation?.unit}
              </p>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            gap="20px"
          >
            <TbWind style={{ width: "50px", height: "50px" }} />
            <Box
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
              flexDirection="column"
            >
              <p style={{ fontSize: "25px", fontWeight: "300" }}>Wind</p>
              <p style={{ fontSize: "35px", fontWeight: "700" }}>
                {wind?.value} {wind?.unit} {wind?.direction}
              </p>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            gap="20px"
          >
            <BsCloudsFill style={{ width: "50px", height: "50px" }} />
            <Box
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
              flexDirection="column"
            >
              <p style={{ fontSize: "25px", fontWeight: "300" }}>Clouds</p>
              <p style={{ fontSize: "35px", fontWeight: "700" }}>
                {cloud?.value} {cloud?.unit}
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Box>
  );
};
