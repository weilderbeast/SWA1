import {
  CloudCoverage,
  DataGroup,
  Precipitation,
  Temperature,
  WindSpeed,
} from "../../utils/types";

const url = "localhost:8080";
const data = "/data";
const forecast = "/forecast";

export const useFetch = () => {
  const getDataForCity = async (city: string) => {
    const res = await fetch(url + data + "/" + city, {
      method: "GET",
    });

    const weaterData = await res.json();

    const temperature: Temperature = weaterData[0];
    const precipitation: Precipitation = weaterData[1];
    const wind: WindSpeed = weaterData[2];
    const cloud: CloudCoverage = weaterData[3];

    return {
      temperature,
      precipitation,
      wind,
      cloud,
    } as DataGroup;
  };

  const getForecastForCity = async (city: string) => {
    const res = await fetch(url + forecast + "/" + city, {
      method: "GET",
    });

    const weaterData = await res.json();

    const temperature: Temperature = weaterData[0];
    const precipitation: Precipitation = weaterData[1];
    const wind: WindSpeed = weaterData[2];
    const cloud: CloudCoverage = weaterData[3];

    return {
      temperature,
      precipitation,
      wind,
      cloud,
    } as DataGroup;
  };

  return {
    getDataForCity,
  };
};
