import { useEffect, useState } from "react";
import {
  ForecastComposite,
  FormattedForecastData,
  FormattedHistoricalData,
  HistoricalComposite,
} from "../../utils/types";
import { formatForecastData, formatHistoricalData } from "../../utils/utils";

const url = "http://localhost:8080";
const dataUrl = "/data";
const forecastUrl = "/forecast";

export const useXHR = (city: string) => {
  const [historicalData, setHistoricalData] = useState<
    FormattedHistoricalData[]
  >([]);
  const [forecastData, setForecastData] = useState<FormattedForecastData[]>([]);

  //i hate this
  useEffect(() => {
    const historicalDataRequest = new XMLHttpRequest();
    historicalDataRequest.open("GET", url + dataUrl + "/" + city);
    historicalDataRequest.onload = () => {
      const data: HistoricalComposite[] = JSON.parse(
        historicalDataRequest.responseText
      );
      setHistoricalData(formatHistoricalData(data));
    };
    historicalDataRequest.send();

    const forecastDataRequest = new XMLHttpRequest();
    forecastDataRequest.open("GET", url + forecastUrl + "/" + city);
    forecastDataRequest.onload = () => {
      const data: ForecastComposite[] = JSON.parse(
        forecastDataRequest.responseText
      );
      setForecastData(formatForecastData(data));
    };
    forecastDataRequest.send();
  }, []);

  return {
    historicalData,
    forecastData,
  };
};
