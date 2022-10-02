import { useEffect, useState } from "react";
import {
  HistoricalComposite,
  ForecastComposite,
  FormattedForecastData,
  FormattedHistoricalData,
} from "../../utils/types";
import { formatHistoricalData, formatForecastData } from "../../utils/utils";

const url = "http://localhost:8080";
const dataUrl = "/data";
const forecastUrl = "/forecast";

export const useFetch = (city: string) => {
  const [historicalData, setHistoricalData] = useState<
    FormattedHistoricalData[]
  >([]);
  const [forecastData, setForecastData] = useState<FormattedForecastData[]>([]);

  useEffect(() => {
    const fetchForecastData = async (city: string) => {
      return await fetch(url + forecastUrl + "/" + city, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
        .then(async (value) => {
          const weatherData: ForecastComposite[] = await value.json();
          return weatherData;
        })
        .then((value) => {
          setForecastData(formatForecastData(value));
        });
    };

    const fetchHistoricalData = async (city: string) => {
      return await fetch(url + dataUrl + "/" + city, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
        .then(async (value) => {
          const weatherData: HistoricalComposite[] = await value.json();
          return weatherData;
        })
        .then((value) => {
          setHistoricalData(formatHistoricalData(value));
        });
    };

    fetchForecastData(city);
    fetchHistoricalData(city);
  }, []);

  return {
    historicalData,
    forecastData,
  };
};
