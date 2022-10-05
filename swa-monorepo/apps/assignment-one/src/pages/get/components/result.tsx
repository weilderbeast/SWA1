import { Box } from "ui";
import { FaCloudSun } from "react-icons/fa";
import { BsFillCloudRainFill, BsCloudsFill } from "react-icons/bs";
import { TbWind } from "react-icons/tb";
import { RiMapPin2Fill } from "react-icons/ri";
import { ImSpinner11, ImSpinner2 } from "react-icons/im";
import { useAppContext } from "../../../packages/context/context";
import { useState } from "react";

export const Result = () => {
  const {
    changeRequestType,
    latestMeasurements,
    city,
    requestType,
    changeCity,
    avgWindSpeedForLastDay,
    maxTempForLastDay,
    minTempForLastDay,
    totalPrecipForLastDay,
  } = useAppContext();
  const [open, setOpen] = useState(false);
  const data = latestMeasurements()?.data;

  if (!data) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="100%"
      >
        <ImSpinner2
          style={{
            width: "64px",
            height: "64px",
            animationName: "spin",
            animationDuration: "500ms",
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        />
      </Box>
    );
  }

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
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="10px"
          >
            <RiMapPin2Fill style={{ height: "30px", width: "30px" }} />
            <Box position="relative">
              <div onClick={() => setOpen(true)} className="city selected">
                <p style={{ fontSize: "35px", fontWeight: "300" }}>{city}</p>
              </div>
              <Box
                position="absolute"
                top="0"
                left="0"
                zIndex="99"
                background="rgba(1,1,1, 1)"
                padding="16px"
                borderRadius="8px"
                display={open ? "block" : "none"}
              >
                <div
                  className="city"
                  onClick={() => {
                    changeCity("Aarhus");
                    setOpen(false);
                  }}
                >
                  <p style={{ fontSize: "35px", fontWeight: "300" }}>Aarhus</p>
                </div>
                <div
                  className="city"
                  onClick={() => {
                    changeCity("Horsens");
                    setOpen(false);
                  }}
                >
                  <p style={{ fontSize: "35px", fontWeight: "300" }}>Horsens</p>
                </div>
                <div
                  className="city"
                  onClick={() => {
                    changeCity("Copenhagen");
                    setOpen(false);
                  }}
                >
                  <p style={{ fontSize: "35px", fontWeight: "300" }}>
                    Copenhagen
                  </p>
                </div>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="8px"
              background={requestType === "fetch" ? "lightblue" : "limegreen"}
              padding="6px 14px"
              borderRadius="27px"
              textTransform="capitalize"
              onClick={() => {
                changeRequestType(requestType === "fetch" ? "xhr" : "fetch");
              }}
              cursor="pointer"
            >
              <ImSpinner11 /> {requestType}
            </Box>
          </Box>
          <p style={{ fontSize: "75px", fontWeight: "800" }}>
            {data?.temperature?.value} °{data?.temperature?.unit}
          </p>
        </Box>
        <Box height="100%" display="flex" gap="32px">
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
          <Box height="100%" backgroundColor="white" width="2px" />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <p style={{ fontSize: "25px", fontWeight: "700" }}>
              Data for last day
            </p>
            <Box>
              <p style={{ fontSize: "18px", fontWeight: "300" }}>
                Maximum temperature
              </p>
              <p style={{ fontSize: "18px", fontWeight: "700" }}>
                {maxTempForLastDay()} {data?.temperature?.unit}
              </p>
            </Box>
            <Box>
              <p style={{ fontSize: "18px", fontWeight: "300" }}>
                Minimum temperature
              </p>
              <p style={{ fontSize: "18px", fontWeight: "700" }}>
                {minTempForLastDay()} {data?.temperature?.unit}
              </p>
            </Box>
            <Box>
              <p style={{ fontSize: "18px", fontWeight: "300" }}>
                Total precipitation
              </p>
              <p style={{ fontSize: "18px", fontWeight: "700" }}>
                {totalPrecipForLastDay()} {data?.precipitation?.unit}
              </p>
            </Box>
            <Box>
              <p style={{ fontSize: "18px", fontWeight: "300" }}>
                Average wind speed
              </p>
              <p style={{ fontSize: "18px", fontWeight: "700" }}>
                {avgWindSpeedForLastDay()} {data?.wind?.unit}
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
