import { Box } from "ui";
import { FaCloudSun } from "react-icons/fa";
import { BsFillCloudRainFill, BsCloudsFill } from "react-icons/bs";
import { TbWind } from "react-icons/tb";
import { RiMapPin2Fill } from "react-icons/ri";
import { ImSpinner11 } from "react-icons/im";
import { useState } from "react";
import { useAppContext } from "../../../packages/context/context";

type RefreshState = "Manual" | "Auto";

export const Result = () => {
  const [refreshState, setRefreshState] = useState<RefreshState>("Auto");
  const { latestMeasurementForCity, setEnabled, enabled } = useAppContext();

  const data = latestMeasurementForCity("Aarhus")?.data;
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
                setEnabled(!enabled);
              }}
            >
              <ImSpinner11 /> Refresh
            </Box>
            <Box
              background={
                refreshState === "Manual" ? "rgba(55,55,55,0.6)" : "limegreen"
              }
              transition=".2s ease-in-out"
              padding="6px 14px"
              borderRadius="27px"
            >
              {refreshState}
            </Box>
          </Box>
          <p style={{ fontSize: "75px", fontWeight: "800" }}>
            {data?.temperature?.value} °{data?.temperature?.unit}
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
                {data?.precipitation?.value} {data?.precipitation?.unit}
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
                {data?.wind?.value} {data?.wind?.unit} {data?.wind?.direction}
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
                {data?.cloud?.value} {data?.cloud?.unit}
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
