import moment from "moment";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  FormattedForecastData,
  FormattedHistoricalData,
} from "../../utils/types";
import { useFetch } from "../fetch/fetch";
import { useXHR } from "../xhr/xhr";

type Props = {
  children?: React.ReactNode;
};

type City = "Aarhus" | "Horsens" | "Copenhagen";

type RequestType = "xhr" | "fetch";

type ContextType = {
  city: City;
  changeCity: (city: City) => void;
  requestType: RequestType;
  changeRequestType: (type: RequestType) => void;
  latestMeasurements: () => FormattedHistoricalData;
  minTempForLastDay: () => number;
  maxTempForLastDay: () => number;
  totalPrecipForLastDay: () => number;
  avgWindSpeedForLastDay: () => number;
  forecastData: FormattedForecastData[];
};

const AppContext = createContext<ContextType>({} as ContextType);

export const useAppContext = (): ContextType =>
  useContext(AppContext) as ContextType;

export const Context: React.FC<Props> = ({ children }: Props) => {
  const [city, setCity] = useState<City>("Aarhus");
  const [requestType, setRequestType] = useState<RequestType>("fetch");
  const [historicalData, setHistoricalData] = useState<
    FormattedHistoricalData[]
  >([]);
  const [forecastData, setForecastData] = useState<FormattedForecastData[]>([]);
  const { forecastData: xhrForecastData, historicalData: xhrHistoricalData } =
    useXHR(city);
  const {
    forecastData: fetchForecastData,
    historicalData: fetchHistoricalData,
  } = useFetch(city);

  //initial data load
  useEffect(() => {
    if (forecastData.length === 0) {
      setForecastData(fetchForecastData);
      setHistoricalData(fetchHistoricalData);
    }
  }, [forecastData, fetchForecastData]);

  useEffect(() => {
    if (requestType === "fetch") {
      setForecastData(fetchForecastData);
      setHistoricalData(fetchHistoricalData);
    } else {
      setForecastData(xhrForecastData);
      setHistoricalData(xhrHistoricalData);
    }
  }, [requestType]);

  const latestMeasurements = useCallback(
    () => historicalData[historicalData.length - 1],
    [historicalData]
  );

  const minTempForLastDay = useCallback(() => {
    const last24 = historicalData
      .map((item) => item.data.temperature.value)
      .slice(-24);
    return Math.min(...last24);
  }, [historicalData]);

  const maxTempForLastDay = useCallback(() => {
    const last24 = historicalData
      .map((item) => item.data.temperature.value)
      .slice(-24);
    return Math.max(...last24);
  }, [historicalData]);

  const totalPrecipForLastDay = useCallback(
    () =>
      historicalData
        .map((item) => item.data.precipitation.value)
        .slice(-24)
        .reduce((item, prev) => item + prev),
    [historicalData]
  );

  const avgWindSpeedForLastDay = useCallback(() => {
    const last24 = historicalData
      .map((item) => item.data.wind.value)
      .slice(-24);
    return last24.reduce((item, prev) => item + prev) / 24;
  }, [historicalData]);

  return (
    <AppContext.Provider
      value={{
        city,
        changeCity: (city: City) => setCity(city),
        changeRequestType: (type: RequestType) => setRequestType(type),
        requestType,
        latestMeasurements,
        minTempForLastDay,
        maxTempForLastDay,
        totalPrecipForLastDay,
        avgWindSpeedForLastDay,
        forecastData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
