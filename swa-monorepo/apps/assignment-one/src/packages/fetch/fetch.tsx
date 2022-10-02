import { useCallback } from "react";
import {
  CloudCoverage,
  Composite,
  FormattedData,
  Precipitation,
  Temperature,
  WindSpeed,
} from "../../utils/types";

const url = "http://localhost:8080";
const data = "/data";
const forecast = "/forecast";

export const useFetch = () => {
  const getDataForCity = useCallback(async (city: string) => {
    return await fetch(url + data + "/" + city, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (value) => {
      const weatherData: Composite[] = await value.json();

      const arr: {
        temperature: Temperature;
        precipitation: Precipitation;
        wind: WindSpeed;
        cloud: CloudCoverage;
      }[] = [];

      let idx = 0;

      while (idx < weatherData.length - 1) {
        if (idx % 4 === 0) {
          arr.push({
            temperature: weatherData[idx] as Temperature,
            precipitation: weatherData[idx + 1] as Precipitation,
            wind: weatherData[idx + 2] as WindSpeed,
            cloud: weatherData[idx + 3] as CloudCoverage,
          });
        }
        idx++;
      }

      const formattedArr = arr.map(
        (item) =>
          ({
            place: item.temperature.place,
            time: item.temperature.time,
            data: {
              temperature: {
                value: item.temperature.value,
                unit: item.temperature.unit,
              },
              precipitation: {
                value: item.precipitation.value,
                unit: item.precipitation.unit,
                type: item.precipitation.type,
              },
              wind: {
                value: item.wind.value,
                unit: item.wind.unit,
                direction: item.wind.direction,
              },
              cloud: {
                value: item.cloud.value,
                unit: item.cloud.unit,
              },
            },
          } as FormattedData)
      );
      console.log(formattedArr);
      return formattedArr;
    });
  }, []);

  return {
    getDataForCity,
  };
};
